# Olay

Live stream overlay stuff for use as Browser-Source in [OBS Studio](https://github.com/obsproject/obs-studio).

---

## Usage

---

## Modules

- **clock** ([overlay](./app/?mod=clock), [conf](./app/mod/clock.conf.js)): Display current local date and time.
- **quotes** ([overlay](./app/?mod=quotes), [conf](./app/mod/quotes.conf.js)): Display random quotes.
- **rotator** ([overlay](./app/?mod=rotator), [conf](./app/mod/rotator.conf.js)): Display text and stuff from a list.

### Configuration

You can either set the defaults in the mod conf or set them tru request params.

Example: `?mod=clock&type=unix`

---

## Hosting

You can either load it from my [GitHub pages](https://etrusci-org.github.io/olay/) or host it on your own webserver.

In any case, currently, it won't run if do not load it from a webserver. E.g. just loading it from your local filesystem won't work because of [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

---
