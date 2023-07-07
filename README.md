# Olay

Live stream overlay stuff for use as Browser-Source in [OBS Studio](https://github.com/obsproject/obs-studio).

---

## Modules

- **clock** ([overlay](https://etrusci.org/tool/olay2-beta/?mod=clock), [conf](./app/mod/clock.conf.js)): Display current local date and time.
- **numbers** ([overlay](https://etrusci.org/tool/olay2-beta/?mod=numbers), [conf](./app/mod/numbers.conf.js)): Display random numbers and counters.
- **quotes** ([overlay](https://etrusci.org/tool/olay2-beta/?mod=quotes), [conf](./app/mod/quotes.conf.js)): Display random quotes.
- **rotator** ([overlay](https://etrusci.org/tool/olay2-beta/?mod=rotator), [conf](./app/mod/rotator.conf.js)): Display text and stuff from a list.

---

## Configuration

Each module has it's own configuration file where the default settings are stored. You can either adjust them in the file or override them through URL parameters. For example...

- you load the clock with: [mod=clock](https://etrusci.org/tool/olay2-beta/?mod=clock)  
- but you can also override `type` and other parameters like so: [mod=clock&type=unixms&updaterate=70](https://etrusci.org/tool/olay2-beta/?mod=clock&type=unixms&updaterate=70)

See the individual module configuration files for available configuration parameters.

---

## Output Styling

All modules will output their content to a `<div>` with the class `mod`. Some modules may introduce sub-elements, but in general it's enough to style `div.mod` like so:

```css
div.mod {
    font-family: sans-serif;
    font-size: 42px;
    color: #009900;
}
```

([CSS Reference](https://developer.mozilla.org/docs/Web/CSS))

---

## Hosting

You can either load it from my [my webserver](https://etrusci.org/tool/olay2-beta/) or host it on your own.

To install it on your own webserver, simply copy the contents of the **app/** directory to your webserver.

In any case, it won't run if do not load it from a webserver. E.g. just loading it from your local filesystem won't work because of [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

---
