"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from app import style
from dotenv import load_dotenv

from app.state.chat_state import ChatState
from app.app_state import AppState
from app.page.registration import registration_page
from app.page.login import login_page, require_login
from app.routes import LOGIN_ROUTE, REGISTER_ROUTE

# 외부 정의 DB 모델

load_dotenv()


def qa(question: str, answer: str) -> rx.Component:
    return rx.chakra.box(
        rx.chakra.box(
            rx.chakra.text(
                question,
                text_align="right",
            ),
            style=style.question_style,
        ),
        rx.chakra.box(
            rx.chakra.text(
                answer,
                text_align="left",
            ),
            style=style.answer_style,
        ),
    )


def chat() -> rx.Component:
    return rx.chakra.box(
        rx.foreach(
            ChatState.chat_history,
            lambda messages: qa(
                messages[0],
                messages[1],
            ),
        )
    )


def action_bar() -> rx.Component:
    return rx.chakra.hstack(
        rx.chakra.input(
            value=ChatState.question,
            placeholder="Ask a question",
            on_change=ChatState.set_question,
            style=style.input_style,
        ),
        rx.chakra.button(
            "Ask",
            on_click=ChatState.answer,
            style=style.button_style,
        ),
    )


def show_logout_or_login_comp() -> rx.Component:
    return rx.cond(
        AppState.is_hydrated,
        rx.cond(
            AppState.token_is_valid,
            rx.chakra.box(
                rx.chakra.link(
                    "Protected Page", href="/protected", padding_right="10px"
                ),
                rx.chakra.link("Logout", href="/", on_click=AppState.do_logout),
                spacing="1.5em",
                padding_top="10%",
            ),
            rx.chakra.box(
                rx.chakra.link("Register", href="/register", padding_right="10px"),
                rx.chakra.link("Login", href="/login"),
                spacing="1.5em",
                padding_top="10%",
            ),
        ),
    )


def index() -> rx.Component:
    """Render the index page.

    Returns:
        A reflex component.
    """
    return rx.fragment(
        rx.chakra.color_mode_button(rx.chakra.color_mode_icon(), float="right"),
        rx.chakra.vstack(
            rx.chakra.heading("Welcome to my homepage!", font_size="2em"),
            show_logout_or_login_comp(),
        ),
    )


@require_login
def protected() -> rx.Component:
    """Render a protected page.

    The `require_login` decorator will redirect to the login page if the user is
    not authenticated.

    Returns:
        A reflex component.
    """
    return rx.chakra.vstack(
        rx.chakra.heading("Protected Page", font_size="2em"),
        rx.chakra.link("Home", href="/"),
        rx.chakra.link("Logout", href="/", on_click=AppState.do_logout),
        chat(),
        action_bar(),
        align="center",
    )


app = rx.App()
app.add_page(index)
app.add_page(protected)
app.add_page(registration_page, route=REGISTER_ROUTE)
app.add_page(login_page, route=LOGIN_ROUTE)
