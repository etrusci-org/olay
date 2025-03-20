#!/usr/bin/env bash

# elcolorfader <https://github.com/etrusci-org/elcolorfader>
curl -o ./src/lib/elcolorfader.mts https://raw.githubusercontent.com/etrusci-org/elcolorfader/refs/heads/main/src/elcolorfader.ts
sed -i 's/class ElColorfader/export class ElColorfader/g' ./src/lib/elcolorfader.mts

# elfloater <https://github.com/etrusci-org/elfloater>
curl -o ./src/lib/elfloater.mts https://raw.githubusercontent.com/etrusci-org/elfloater/refs/heads/main/src/elfloater.ts
sed -i 's/class ElFloater/export class ElFloater/g' ./src/lib/elfloater.mts

# tmi.js 1.8.5 <https://github.com/tmijs/tmi.js>
mkdir -p ./olay/lib/vendor/
curl -o ./olay/lib/vendor/tmi.min.js https://raw.githubusercontent.com/tmijs/tmi.js/7691acb4b4b1fbebabd0a85f26b6444e7d6c573e/dist/tmi.min.js
