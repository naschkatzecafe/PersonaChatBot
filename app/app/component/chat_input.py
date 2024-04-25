import reflex as rx

from app.state.chat_state import ChatState


def chat_input(can_input: bool) -> rx.Component:
    return rx.chakra.form(
        rx.hstack(
            rx.chakra.input(
                placeholder="대화를 입력하세요.",
                id="message",
                width="100%",
                value=ChatState.input_message,
                on_change=ChatState.set_input_message,
                is_required=True,
                is_disabled=~can_input,
            ),
            rx.cond(
                ChatState.is_hydrated,
                rx.chakra.button(
                    # o o가 왜 붙음.??
                    rx.icon("send"),
                    type_="submit",
                    is_loading=ChatState.is_waiting,
                    is_disabled=~can_input,
                    variant="outline",
                ),
            ),
            width="100%",
        ),
        on_submit=ChatState.on_submit,
        width="100%",
    )
