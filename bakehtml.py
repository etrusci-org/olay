#!/usr/bin/env python3

import pathlib
import time


MODS: list[str] = [
    'clock',
    'quotes',
    'rotator',
]


if __name__ == '__main__':
    REPO_DIR: pathlib.Path = pathlib.Path(__file__).parent.resolve()
    SRC_DIR: pathlib.Path = REPO_DIR.joinpath('src')
    MOD_DIR: pathlib.Path = REPO_DIR.joinpath('src', 'mod')
    OUT_DIR: pathlib.Path = REPO_DIR.joinpath('olay', 'mod')
    HEADER_FILE: pathlib.Path = SRC_DIR.joinpath('mod', 'header.html')
    FOOTER_FILE: pathlib.Path = SRC_DIR.joinpath('mod', 'footer.html')
    CACHE_BUST: str = str(time.time())

    for mod in MODS:
        print(f'baking {mod} html ...')

        body_file: pathlib.Path = MOD_DIR.joinpath(mod, 'body.html')
        out_file: pathlib.Path = OUT_DIR.joinpath(mod, 'index.html')

        code: str = ''
        code += HEADER_FILE.read_text()
        code += body_file.read_text()
        code += FOOTER_FILE.read_text()

        code = code.replace('{CACHE_BUST}', CACHE_BUST)

        out_file.write_text(code)
