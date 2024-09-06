import reflex as rx
import reflex_chakra as rc
from collections import Counter
from typing import List, Tuple, Dict

from app.state.chat_state import ChatState

# ['공포' '기쁨' '놀람' '분노' '슬픔' '중립' '혐오']


class EmotionState(ChatState):

    colors = {
        "혐오": "#49312d",
        "분노": "#91615a",
        "공포": "#af625c",
        "슬픔": "#de776c",
        "중립": "#e5988e",
        "놀람": "#ebb9b0",
        "기쁨": "#f2ebc8",
    }

    def get_bg_color(self, emotion_count):

        if len(emotion_count) == 0:
            return "white"

        bg_color = f"linear-gradient(45deg, "
        ratio = 0
        base = sum(emotion_count.values())

        for i, (k, v) in enumerate(emotion_count.items()):
            bg_color = (
                bg_color
                + f"{self.colors[k]} {ratio}% {ratio+round((emotion_count[k]/base)*100)}%, "
            )
            ratio += round((emotion_count[k] / base) * 100)

        return bg_color[:-2] + ")"

    @rx.var
    def get_box_params_for_one(self) -> str:

        current_chats = self.current_messages
        box_params = []

        emotions = [c[2] for c in current_chats if c[0] == "user"]

        emotion_count = Counter(emotions)
        bg_colors = self.get_bg_color(emotion_count)

        return bg_colors

    @rx.var
    def get_box_params(self) -> List[Tuple[str, str, str]]:

        past_chats = self.past_messages
        box_params = []

        emotions_of_the_day = [
            [id, [c[2] for c in chats if c[0] == "user"]]
            for (id, chats) in past_chats[::-1]
        ]

        num_chat = len(emotions_of_the_day)

        height = str(int(100 / ((num_chat // 3) + 1))) + "%"
        width = (
            str(100 if num_chat == 1 else 32 if num_chat == 3 or num_chat > 4 else 49)
            + "%"
        )

        if len(emotions_of_the_day) > 0:
            for id, emotions in emotions_of_the_day:
                emotion_count = Counter(emotions)
                bg_colors = self.get_bg_color(emotion_count)

                box_params.append((id, bg_colors, width, height))
        return box_params


def create_box():

    return rc.box(
        bg=EmotionState.get_box_params_for_one,
        border_radius="10px",
        width="100%",
        height="10vh",
    )


def create_boxes(params):

    return rc.box(
        bg=params[1],
        border_radius="10px",
        width="8em",  # params[2],
        # height=params[3],
    )


def emotion_card() -> rx.Component:

    return (
        rx.flex(
            rx.foreach(EmotionState.get_box_params, create_boxes),
            spacing="2",
            width="100%",
            height="30vh",
            flex_wrap="wrap",
        ),
    )


def create_color_legend(color):

    return rx.hstack(
        rc.text("●", color=color[1], font_size="1em"),
        rc.text(color[0], font_size="1em"),
    )


def show_emotion_colors() -> rx.Component:

    return rx.hstack(rx.foreach(EmotionState.colors, create_color_legend))
