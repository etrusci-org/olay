# [Olay](../../../README.md) - quotes

Display random quotes.

**Base URL**: <https://etrusci.org/tool/olay/?mod=quotes>  
**Default configuration**: [quotes.conf.js](./quotes.conf.js)  
**Default style**: [quotes.default.css](./quotes.default.css)

---

## Examples

- [mod=quotes](https://etrusci.org/tool/olay/?mod=quotes)
- [mod=quotes&updaterate=20000](https://etrusci.org/tool/olay/?mod=quotes&updaterate=20000)
- [mod=quotes&typingspeed=30](https://etrusci.org/tool/olay/?mod=quotes&typingspeed=40)
- [mod=quotes&sourcefile=https://cdn.jsdelivr.net/gh/etrusci-org/quotes@main/json/quotes-s9.json](https://etrusci.org/tool/olay/?mod=quotes&sourcefile=https://cdn.jsdelivr.net/gh/etrusci-org/quotes@main/json/quotes-s9.json)

---

## Configuration

### updaterate

Quotes update rate in milliseconds.

Valid: `Integers >= 1`

### typingspeed

Speed of the typing effect in milliseconds.

Valid: `Integers >= 1`

### sourcefile

URL/path to a [JSON](https://www.json.org) file that contains a list of quotes.

Valid: `URL, path`

Example of a valid quotes file:

```json
[
    { "author": "Foobar", "text": "Hello cruel world." },
    { "author": "Cow", "text": "Moo, mooo moo." },
    { "author": "Cat", "text": "Miao, miao miao." }
]
```

---

## Output Styling

### HTML Elements

```html
<div class="mod quotes">
    {quote_text}
</div>

```

### Available CSS Selectors

```css
.mod {} /* or */ .mod.quotes {} /* Module output container */

.mod.doneTyping {} /* Typing effect has completed */

```

---
