# Olay Quotes

Display random quotes.

**Module Handle:** `quotes`

---

## Parameters

| Parameter     | Valid Values               | Default                                                                                             |
|---------------|----------------------------|-----------------------------------------------------------------------------------------------------|
| `updateRate`  | Milliseconds (1s = 1000ms) | `600000`                                                                                            |
| `typingSpeed` | Milliseconds (1s = 1000ms) | `100`                                                                                               |
| `source`      | URL to valid quotes file   | `https://cdn.jsdelivr.net/gh/etrusci-org/quotes@main/js/quotes-s9.min.js` |

### Notes

- To load a remote source, the crossorigin settings must be set accordingly on the server. Use a [CDN](https://www.jsdelivr.com) if you get an `Cross-Origin Request Blocked` error can not change these settings. You won't have this problem if you [host](./../../../DEVELOPMENT.md) both the app and the quotes file yourself.
- Javascript example for a valid quotes file:
  ```js
  export const quotes = [
      { author: `Cow`, text: `Moooo.` },
      { author: `Cat`, text: `Miaooooo.` },
      { author: `Dog`, text: `Wooff.` },
      { author: `Modem`, text: `|¬§°#@°€CHRRR°#@§°#¢!!` },
  ];
  ```
- The constant name must be `quotes`.

---

## Examples

- [mod=quotes](https://etrusci.org/tool/olay/?mod=quotes)
- [mod=quotes&updateRate=10000](https://etrusci.org/tool/olay/?mod=quotes&updateRate=10000)
- [mod=quotes&typingSpeed=500](https://etrusci.org/tool/olay/?mod=quotes&typingSpeed=500)
- [mod=quotes&source=https://yourwebsite.org/quotes.js](https://etrusci.org/tool/olay/?mod=quotes&source=https://yourwebsite.org/quotes.js) *(will obviously not work with this example source url)*
