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

## Notes

- If you're unsure, test it in a webbrowser and not OBS directly. This way you can quickly edit the URL parameters or add `&debug=true` to see the current module configuration.
- To install it on your own webserver, just copy the contents of the **olay/app/** directory.
- If you install it on your own webserver and edit the module configurations, always enter values as *strings*. E.g. enclose in single-quotes (') or backticks (`).

---
