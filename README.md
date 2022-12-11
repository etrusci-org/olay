# Olay

Live stream overlay stuff for use as Browser-Source in [OBS Studio](https://github.com/obsproject/obs-studio).

---

## Modules

- [Clock](./app/mod/clock/README.md)
- [ExampleMod](./app/mod/examplemod/README.md) (only for dev example)
- [Kraken](./app/mod/kraken/README.md)
- [Numbers](./app/mod/numbers/README.md)
- [Quotes](./app/mod/quotes/README.md)
- [Rotator](./app/mod/rotator/README.md)
- [Twitch](./app/mod/twitch/README.md) (only for self-hosting)
- [Uptime](./app/mod/uptime/README.md)

---

## Hosting

You are free to use the version hosted by me. The base URL is `https://etrusci.org/tool/olay/?`.

If you prefer to host it yourself and/or create your own modules, see [DEVELOPMENT](./DEVELOPMENT.md).

---

## Quick Example

This is how you add a module as Browser-Source in OBS Studio.

![1a](./doc/1a.png)

![1b](./doc/1b.png)

![2](./doc/2.png)

![3-5](./doc/3-5.png)

![6](./doc/6.png)

---

## Construct Module URL

1. Base URL: `https://etrusci.org/tool/olay/?`
2. Add a module: `<BASE_URL>mod=<MODULE_HANDLE>`
3. Add optional parameters: `<BASE_URL>mod=<MODULE_HANDLE>[&PARAM1=One][&PARAM2=Two]`

Example: `https://etrusci.org/tool/olay/?mod=clock&type=unixms&updateRate=100`

For more examples see [demo.php](https://etrusci.org/tool/olay/demo.php) or [demoparams.php](./app/lib/demoparams.php)

---

## Shared Amongst Modules

### updateRate Parameter

It's always in [milliseconds](https://en.wikipedia.org/wiki/Millisecond). 1 second = 1000 milliseconds.

### Spaces in Parameter Values

Use `+` or `%20`. E.g. for the [Kraken](./app/mod/kraken/README.md) label you could use `label=my+fancy+label:+`.

### Character Replacement Maps

For modules which accept the `repMap` parameter, these are the number/character replacement maps.

1. `0=A, 1=B, 2=C, 3=D, 4=E, 5=F, 6=G, 7=H, 8=I, 9=J`
2. `0=Z, 1=Y, 2=X, 3=W, 4=V, 5=U, 6=T, 7=S, 8=R, 9=Q`
3. `0=9, 1=8, 2=7, 3=6, 4=5, 5=4, 6=3, 7=2, 8=1, 9=0`
4. `0=●, 1=□, 2=◆, 3=■, 4=○, 5=▶, 6=◁, 7=▲, 8=◇, 9=▼`
5. `0=٠, 1=١, 2=٢, 3=٣, 4=٤, 5=٥, 6=٦, 7=٧, 8=٨, 9=٩`

---






















































<!--




## Usage

**Add a Browser-Source to your Scene:**

![1a](./doc/1a.png) ![1b](./doc/1b.png) ![2](./doc/2.png)

**Enter the module URL, adjust CSS and other settings:**

![3-5](./doc/3-5.png)

**You did it!**

![6](./doc/6.png)

---

## Change Module Output Style

The default CSS is as follow:

```css
body {
    /* basic reset */
    margin: 0;
    padding: 0;
    border: 0;
    overflow: hidden;
    min-width: 100vw;
    min-height: 100vh;
    /* basic style */
    font-family: sans-serif;
    font-size: 16px;
    color: #00ac86;
    background: transparent;
}
/* available but empty by default */
div.olay {}
div.mod {}
```

`div.olay` is the outer wrapper of `div.mod`.  
`div.mod` is the inner wrapper, where the module output will displayed.

In HTML this looks like this:
```html
<div class="olay">
    <div class="mod">
        module output will be here
    </div>
</div>
```
But you can also only change the `body` style to start. The wrappers are really just to give some more flexibility to those who want it.

Here are two examples to copy&paste into the Browser-Source's CSS field.

```css
/* Styles for the whole module page - this is most probably what you want */
body {
    font-family: 'Times New Roman', serif;
    font-size: 32px;
    color: #32cd32;
    background: #006400;
    text-shadow: #ffff00 0px 0px 5px;
    text-align: center;
}
```

```css
/* Separate styles for body, div.olay and div.mod */
body {
    background: #006400;
}

div.olay {
    border: 1px solid #0000ff;
    padding: 10px;
}

div.mod {
    color: #32cd32;
    border: 1px solid #ffff00;
    padding: 10px;
}
```

New to CSS? Checkout the [CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)!  
Need a color picker, [click here](https://duckduckgo.com/?t=ffab&q=color+picker&ia=answer) :-)

---

-->
