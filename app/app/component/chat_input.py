import reflex as rx

from app.state.chat_state import ChatState


def chat_input(can_input: bool) -> rx.Component:
    return rx.form(
        rx.hstack(
            rx.input(
                placeholder="대화를 입력하세요.",
                id="message",
                width="100%",
                required=True,
                disabled=~can_input,
            ),
            rx.cond(
                ChatState.is_hydrated,
                rx.button(
                    rx.icon("send"),
                    type_="submit",
                    loading=ChatState.is_waiting,
                    disabled=~can_input,
                    variant="outline",
                ),
            ),
            width="100%",
        ),
        on_submit=ChatState.on_submit,
        on_mount=ChatState.on_mount,
        reset_on_submit=True,
        width="100%",
    )
