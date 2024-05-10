import reflex as rx
from typing import List, Dict, Any


class WordCloud(rx.Component):
    """WordCloud component."""

    tag = "ReactWordcloud"

    words: rx.Var[List[Dict[str, str | int]]] = []

    options: rx.Var[Dict[str, Any]] = {}

    is_default = True

    lib_dependencies: List[str] = [
        "react-wordcloud",
    ]

    def _get_custom_code(self) -> str | None:
        return """import dynamic from 'next/dynamic'
const ReactWordcloud = dynamic(() => import('react-wordcloud'), {
  ssr: false,
})
"""


word_cloud = WordCloud.create
