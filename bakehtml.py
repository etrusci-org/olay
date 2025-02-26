#!/usr/bin/env python3

import pathlib
import time


MODS: list[str] = [
    'clock',
    'goal',
    'quotes',
    'rotator',
    'twitchchat',
]


def fancycb() -> str:
    cb: str = ''

    for n in str(int(time.time())):
        cb += chr(int(n) + 97)

    return cb



if __name__ == '__main__':
    REPO_DIR: pathlib.Path = pathlib.Path(__file__).parent.resolve()
    SRC_DIR: pathlib.Path = REPO_DIR.joinpath('src')
    MOD_DIR: pathlib.Path = REPO_DIR.joinpath('src', 'mod')
    OUT_DIR: pathlib.Path = REPO_DIR.joinpath('olay', 'mod')
    HEADER_FILE: pathlib.Path = SRC_DIR.joinpath('mod', 'header.html')
    FOOTER_FILE: pathlib.Path = SRC_DIR.joinpath('mod', 'footer.html')
    CACHE_BUST: str = fancycb()

    for mod in MODS:
        body_file: pathlib.Path = MOD_DIR.joinpath(mod, 'body.html')
        out_file: pathlib.Path = OUT_DIR.joinpath(mod, 'index.html')

        code: str = ''
        code += HEADER_FILE.read_text()
        code += body_file.read_text()
        code += FOOTER_FILE.read_text()
        code = code.strip()

        code = code.replace('{CACHE_BUST}', CACHE_BUST)

        if not out_file.is_file() or len(code) != len(out_file.read_text().strip()):
            print(f'{time.time()} baking {mod} html ...')
            out_file.write_text(code)
