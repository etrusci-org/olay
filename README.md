# Olay

Livestream overlay stuff for use as [Browser-Source](https://obsproject.com/kb/browser-source) in [OBS Studio](https://obsproject.com/).




## Quickstart

Go to <https://etrusci.org/tool/olay> to test each module with a configurator. You'll also find more instructions there.




## Self-hosting

You can also clone this repository or download a specific release and put it on your own webserver.

Requirements:

- Webserver (only needs to output HTML)
- To build the [src/](./src/) files:
  - tsc
  - sass
  - bash + python3 for:
    - [watchhtml.sh](./watchhtml.sh)
    - [bakehtml.py](./bakehtml.py)

See [tasks.json](./.vscode/tasks.json) for build commands.

Once you've built the source, just copy the [olay/](./olay/) directory to your webserver.




## License

See [LICENSE.md](./LICENSE.md).


---


[![GitHub Release](https://img.shields.io/github/v/release/etrusci-org/olay?label=latest%20release)](https://github.com/etrusci-org/olay/releases)  
[![GitHub Branch status](https://img.shields.io/github/checks-status/etrusci-org/olay/main)](https://www.codefactor.io/repository/github/etrusci-org/olay)  
[![GitHub Issues](https://img.shields.io/github/issues/etrusci-org/olay)](https://github.com/etrusci-org/olay/issues)  
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/etrusci-org/olay)](https://github.com/etrusci-org/olay/pulls)  
[![GitHub Repo stars](https://img.shields.io/github/stars/etrusci-org/olay)](https://github.com/etrusci-org/olay/stargazers)
