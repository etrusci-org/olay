# Olay

Livestream overlay stuff for use as [Browser-Source](https://obsproject.com/kb/browser-source) in [OBS Studio](https://obsproject.com/).

[![GitHub Release](https://img.shields.io/github/v/release/etrusci-org/olay?label=latest%20release)](https://github.com/etrusci-org/olay/releases) [![GitHub Branch status](https://img.shields.io/github/checks-status/etrusci-org/olay/main)](https://www.codefactor.io/repository/github/etrusci-org/olay) [![GitHub Issues](https://img.shields.io/github/issues/etrusci-org/olay)](https://github.com/etrusci-org/olay/issues) [![GitHub Repo Stars](https://img.shields.io/github/stars/etrusci-org/olay)](https://github.com/etrusci-org/olay/stargazers)




## Modules

- **clock**: Current local date/time in various formats.
- **colorfader**: Fade the whole page through random colors.
- **countdu**: Count down/up within a number or time range.
- **dnmap**: A world map that shows the current day and night on Earth and the positions of the Sun (subsolar point) and the Moon (sublunar point).
- **floater**: Let a text float around the screen like the old DVD logo screensaver.
- **goal**: Status of one of your personal goals.
- **quotes**: Random quotes typewriter.
- **rotator**: Rotate through text items.
- **soho**: Current images of the sun in various spectrums.
- **twitchchat**: Chat messages from one or more Twitch channels.




## Get started

Go to <https://etrusci.org/tool/olay> to read the *get started*-guide and setup/preview the overlays with the provided configurator.

Feel free to [start a new discussion](https://github.com/etrusci-org/olay/discussions) if you need more help with, or have specific questions about, Olay.




## Self-hosting

You can also clone this repository or download a specific [release](https://github.com/etrusci-org/olay/releases) and put it on your own webserver.

Requirements:

- Webserver (only needs to output HTML)
- To build the [src/](./src/) files:
  - tsc
  - sass
  - bash for: [watchhtml.sh](./watchhtml.sh)
  - python for: [bakehtml.py](./bakehtml.py)

See [tasks.json](./.vscode/tasks.json) for build commands.

Once everything is built, just copy the [olay/](./olay/) directory to your webserver.




## License

See [LICENSE.md](./LICENSE.md).
