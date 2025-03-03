#!/usr/bin/env bash

inotifywait ./src/ --monitor --recursive --format '%w%f' --event close_write |
while read -r f
do
    if [ "${f##*.}" == "html" ]
    then
        python3 ./bakehtml.py
    fi
done
