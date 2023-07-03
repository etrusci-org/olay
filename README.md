# Olay

Live stream overlay stuff for use as Browser-Source in [OBS Studio](https://github.com/obsproject/obs-studio).

---

## Usage

The Base URL is: `https://etrusci-org.github.io/olay/`

1. Add Browser-Source to your Scene in OBS Studio.
2. Insert the URL to the **overlay.html** file of the module you want to use. E.g. `https://etrusci-org.github.io/olay/app/clock/overlay.html`.
3. Adjust the CSS to your liking. All the output will go inside a `<div>` with the class `mod`. Also see [default.css](./app/default.css).

---

## Modules

- **clock** ([overlay](./app/clock/overlay.html), [conf](./app/clock/conf.js)): Display current local date and time.
- **quotes** ([overlay](./app/quotes/overlay.html), [conf](./app/quotes/conf.js)): Display random quotes.
- **rotator** ([overlay](./app/rotator/overlay.html), [conf](./app/rotator/conf.js)): Display text and stuff from a list.

---

## Hosting

You can either load it from my [GitHub pages](https://etrusci-org.github.io/olay/) or host it on your own webserver.

In any case, currently, it won't run if do not load the **overlay.html** files from a webserver. E.g. just loading it from your local filesystem won't work because of [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

---
