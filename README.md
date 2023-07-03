# Olay

Live stream overlay stuff for use as Browser-Source in [OBS Studio](https://github.com/obsproject/obs-studio).

---

## Modules

- [clock](./app/clock/): Current local date and time.
- [quotes](./app/quotes/): Random quotes.
- [rotator](./app/rotator/): Text and stuff from a list.

---

## Usage

The Base URL is: `https://etrusci-org.github.io/olay/app/`

1. Add Browser-Source to your Scene in OBS Studio.
2. Insert the URL to the **overlay.html** file of the module you want to use. E.g. `https://etrusci-org.github.io/olay/app/clock/overlay.html`.
3. Adjust the CSS to your liking. All the output will go inside a `<div>` with the class `mod`. Also see [default.css](./app/default.css).

---

## Hosting

You can either load it from my GitHub pages or host it on your own webserver.

In any case, currently, it won't run if do not load the **overlay.html** files from a webserver. E.g. just loading it from your local filesystem won't work because of [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

---
