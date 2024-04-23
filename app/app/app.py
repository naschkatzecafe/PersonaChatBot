"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from app import style
from dotenv import load_dotenv

from app.state.chat_state import ChatState
from app.app_state import AppState
from app.page.registration import registration_page
from app.page.login import login_page
from app.page.dashboard import dashboard
from app.routes import LOGIN_ROUTE, REGISTER_ROUTE


# 외부 정의 DB 모델

load_dotenv()


app = rx.App()
app.add_page(dashboard, route="/", on_load=AppState.check_login)
app.add_page(registration_page, route=REGISTER_ROUTE)
app.add_page(login_page, route=LOGIN_ROUTE)
