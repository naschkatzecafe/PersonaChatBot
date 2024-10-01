"""New user registration form and validation logic."""

from __future__ import annotations

import reflex as rx

from app.routes import REGISTER_ROUTE, LOGIN_ROUTE
from app.state.registration_state import RegistrationState


def registration_page() -> rx.Component:
    """Render the registration page.

    Returns:
        A reflex component.
    """
    register_form = rx.form(
        rx.fragment(
            rx.flex(
                rx.heading(
                    "iNotePal", as_="h1", size="4xl", weight="bold", align="left"
                ),
                padding_bottom="10vh",
            ),
            rx.flex(
                rx.heading("Sign up", as_="h1", size="lg", align="left"),
                padding_bottom="2vh",
            ),
            rx.flex(
                rx.text("Email Address", size="md", weight="medium", align="left"),
                rx.input(placeholder="email", id="email", type_="email"),
                rx.text("Password", size="md", weight="bold", align="left"),
                rx.input(placeholder="password", id="password", type="password"),
                rx.text("Confirm Password", size="md", weight="bold", align="left"),
                rx.input(
                    placeholder="confirm password",
                    id="confirm_password",
                    type="password",
                ),
                direction="column",
                padding_bottom="2vh",
            ),
            rx.flex(
                rx.button(
                    "Register",
                    type_="submit",
                    is_loading=RegistrationState.is_loading,
                    size="lg",
                    variant="outline",
                )
            ),
        ),
        width="80vw",
        on_submit=RegistrationState.handle_registration,
    )

    return rx.fragment(
        rx.cond(
            RegistrationState.success,
            rx.vstack(
                rx.text(
                    "Registration successful, check your mail to confirm signup so as to login!"
                ),
                rx.spinner(),
            ),
            rx.vstack(
                rx.cond(  # conditionally show error messages
                    RegistrationState.error_message != "",
                    rx.text(RegistrationState.error_message),
                ),
                register_form,
                rx.link("Already have an account?", href=LOGIN_ROUTE),
                padding_top="3vh",
                margin="0px 10vw",
                align="center",
            ),
        ),
    )
