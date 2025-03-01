# Olay

Livestream overlay stuff for use as [Browser-Source](https://obsproject.com/kb/browser-source) in [OBS Studio](https://obsproject.com/).




## Quickstart

Go to <https://etrusci.org/tool/olay> to test each module with a configurator. You'll also find more instructions there.




<!-- ## Complementary stuff

- [elfloater](https://github.com/etrusci-org/elfloater)
- [elcolorfader](https://github.com/etrusci-org/elcolorfader) -->




## Self-hosting

You can also clone this repository or download a specific release and put it on your own webserver.

Requirements:

- Webserver (only needs to output HTML)
- To build the [src/](./src/) files:
  - tsc
  - sass
  - [watchhtml.sh](./watchhtml.sh) and [bakehtml.py](./bakehtml.py)

See [./.vscode/tasks.json](.vscode/tasks.json) for build commands.
