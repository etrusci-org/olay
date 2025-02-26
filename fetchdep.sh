#!/usr/bin/env bash

_VENDOR_PATH="./olay/lib/vendor/"

mkdir -p "${_VENDOR_PATH}"

cd "${_VENDOR_PATH}"

curl -o tmi.min.js https://raw.githubusercontent.com/tmijs/tmi.js/refs/heads/main/dist/tmi.min.js
