"""
Top-level State for the App.

Authentication data is stored in the base State class so that all substates can
access it for verifying access to event handlers and computed vars.
"""

import os
import jwt
import time
import reflex as rx
from app.supabase_client import supabase_client

from app.routes import LOGIN_ROUTE

JWT_SECRET = os.getenv("JWT_SECRET")
JWT_ALGORITHM = os.getenv("JWT_ALGORITHM")


class AppState(rx.State):

    auth_token: str = rx.Cookie("auth_token", secure=True)

    def do_logout(self):
        """signout."""
        self.auth_token = ""
        yield

    @rx.var(cache=True)
    def user_mail(self) -> str:
        if not self.token_is_valid:
            return ""

        return self.decodeJWT["email"]

    @rx.var(cache=True)
    def decodeJWT(self) -> dict:
        """
        Decode the JWT token.

        This method decodes the JWT token using the provided secret and algorithm,
        verifies its authenticity, and checks if it's within the valid time range.

        Returns:
            dict: A dictionary containing the decoded JWT token if it's valid,
                  otherwise returns an empty dictionary.

        Raises:
            Exception: Any exception encountered during the decoding process.
        """
        try:
            decoded_token = jwt.decode(
                self.auth_token,
                JWT_SECRET,
                do_verify=True,
                algorithms=[JWT_ALGORITHM],
                audience="authenticated",
                leeway=1,
            )
            return (
                decoded_token
                if decoded_token["exp"] >= time.time()
                and decoded_token["iat"] <= time.time()
                else None
            )
        except Exception as e:
            return {}

    @rx.var
    def token_is_valid(self) -> bool:
        """
        Check if the JWT token is valid.

        This method checks if the JWT token is valid by attempting to decode it.
        If decoding is successful, it returns True, indicating that the token is valid.
        If decoding fails for any reason, it returns False.

        Returns:
            bool: True if the JWT token is valid, False otherwise.
        """
        try:
            return bool(self.decodeJWT)
        except Exception:
            return False

    def check_login(self):
        """
        로그인이 안되어있으면 로그인 페이지로 redirect시킴
        """
        if not self.token_is_valid:
            return rx.redirect(LOGIN_ROUTE)
