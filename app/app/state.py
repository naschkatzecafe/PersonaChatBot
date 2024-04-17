# state.py

import reflex as rx
import os
from openai import AsyncOpenAI
from .ryugibo import Ryugibo

inference_model = Ryugibo("dummy-0.0.0")


class State(rx.State):
    question: str

    chat_history: list[tuple[str, str]]

    async def answer(self):
        client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        session = await client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": self.question}],
            stop=None,
            temperature=7e-1,
            stream=True,
        )
        answer = ""
        emote = (
            inference_model.predict(
                inference_model.padding(
                    inference_model.tokenize(
                        [
                            self.question,
                        ],
                    ),
                ),
            ),
        )

        self.chat_history.append((f"[{emote}]: {self.question}", answer))
        self.question = ""
        yield

        async for item in session:
            if hasattr(item.choices[0].delta, "content"):
                if item.choices[0].delta.content is None:
                    break
                answer += item.choices[0].delta.content
                self.chat_history[-1] = (self.chat_history[-1][0], answer)
                yield
