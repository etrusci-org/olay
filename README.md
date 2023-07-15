# Olay

Live stream overlay stuff for use as Browser-Source in [OBS Studio](https://github.com/obsproject/obs-studio).

---

## Modules

- [clock](./app/mod/clock.md)
- [colorfader](./app/mod/colorfader.md)
- [numbers](./app/mod/numbers.md)
- [quotes](./app/mod/quotes.md)
- [rotator](./app/mod/rotator.md)

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

Default style: [app/lib/default.css](./app/lib/default.css).

For help with CSS see:
- [CSS For Starters](./CSS.md)
- [Full CSS Reference](https://developer.mozilla.org/docs/Web/CSS)

---

## Notes

- If you're unsure, test it in a webbrowser and not OBS directly. This way you can quickly edit the URL parameters or add `&debug=true` to see the current module configuration.
- To install it on your own webserver, just copy the contents of the **olay/app/** directory.
- If you install it on your own webserver and edit the module configurations, always enter values as *strings*. E.g. enclose in single-quotes (') or backticks (`).
- It won't run if not loaded from a webserver. E.g. just loading it from your local filesystem won't work because of [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

---
