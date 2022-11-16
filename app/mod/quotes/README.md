# Olay Quotes

Display random quotes.

**Module Handle:** `quotes`

---

## Parameters

| Parameter    | Valid Values               | Default                                                                                             |
|--------------|----------------------------|-----------------------------------------------------------------------------------------------------|
| `updateRate` | Milliseconds (1s = 1000ms) | `600000`                                                                                            |
| `source`     | URL to valid quotes file   | `https://cdn.jsdelivr.net/gh/etrusci-org/spartalien.com@8.12.24/app/public/res/randomQuotes.min.js` |

### Notes

- To load a remote source, the crossorigin settings must be set accordingly. Use a [CDN](https://www.jsdelivr.com) if you get an `Cross-Origin Request Blocked` error in the dev console.
- Javascript example for a valid quotes file:
  ```js
  export const quotes = [
      { author: `Cow`, text: `Moooo.` },
      { author: `Cat`, text: `Miaooooo.` },
      { author: `Dog`, text: `Wooff.` },
      { author: `Modem`, text: `|¬§°#@°€CHRRR°#@§°#¢!!` },
  ];
  ```
- If you name the `quotes` constant something else, make sure to adjust the import statement in `quotes/page.php` to `import { OtherVariableName as quotes } from ...`.
---

## Examples

- [mod=quotes](https://etrusci.org/tool/olay/?mod=quotes)
- [mod=quotes&updateRate=30000](https://etrusci.org/tool/olay/?mod=quotes&updateRate=30000)
- [mod=quotes&source=https://yourwebsite.org/quotes.js](https://etrusci.org/tool/olay/?mod=quotes&source=https://yourwebsite.org/quotes.js) *(will obviously not work with this example source url)*
