# Olay - Development Guide

- Modules must not introduce the need for something to be installed first to make it work. E.g. no background workers and stuff.
- Modules must render in the client only, no server-side rendering.
- Modules can fetch data from remote api's.
- Dependencies for modules must be stored inside the repo directly.
- Dependencies for the doc/configurator website, e.g. css and javascript libs can be added with cdn urls.
