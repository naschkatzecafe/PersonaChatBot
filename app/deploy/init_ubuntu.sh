#!/bin/sh

asdf local python 3.10.12

python -m venv .venv

. $(pwd)/.venv/bin/activate

cat requirements_ubuntu.txt | xargs pip install
