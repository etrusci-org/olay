#!/usr/bin/env bash

_SRC="./olay/"
_DST="etrusci.org:/home/public/tool/olay/3/"

rsync -r -t --progress --delete -c -l -H -z -s "${_SRC}" "${_DST}"
