#!/usr/bin/env bash

curl -o ./src/lib/elcolorfader.mts https://raw.githubusercontent.com/etrusci-org/elcolorfader/refs/heads/main/src/elcolorfader.ts
sed -i 's/class ElColorfader/export class ElColorfader/g' ./src/lib/elcolorfader.mts

curl -o ./olay/lib/vendor/tmi.min.js https://raw.githubusercontent.com/tmijs/tmi.js/refs/heads/main/dist/tmi.min.js
