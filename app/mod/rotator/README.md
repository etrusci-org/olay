# [Olay](../../../README.md) - rotator

Display and rotate tru text from a list.

**Base URL**: <https://etrusci.org/tool/olay/?mod=rotator>  
**Default configuration**: [rotator.conf.js](./rotator.conf.js)  
**Default style**: [rotator.default.css](./rotator.default.css)

---

## Examples

- [mod=rotator](https://etrusci.org/tool/olay/?mod=rotator)
- [mod=rotator&updaterate=2000](https://etrusci.org/tool/olay/?mod=rotator&updaterate=2000)
- [mod=rotator&updaterate=2000&items=|one|two|three](https://etrusci.org/tool/olay/?mod=rotator&updaterate=2000&items=|one|two|three)
- [mod=rotator&updaterate=2000&items=|one|two|three&shuffle=false](https://etrusci.org/tool/olay/?mod=rotator&updaterate=2000&items=|one|two|three&shuffle=false)

---

## Configuration

### updaterate

Rotation update rate in milliseconds.

Valid: `Integers >= 1`

### shuffle

Whether to shuffle the items list.

Valid:

- `true`: Shuffle list
- `false`: Keep list in order

### items

Items to rotate tru.

Valid: `text, HTML`

Start each item with `|`.  
Separate sub-items with `*`.  
Prefix image URL/paths with `img:`.

Example:
```js
items: `
    |just text
    |multiple*lines*of*text
    |img:https://example.org/test.png
    |text before image*img:https://example.org/test.png
    |img:https://example.org/test.png*text after image
`
```

---

## Output Styling

### HTML Elements

```html
<div class="mod rotator">
    {quote_text}
</div>
```

### Available CSS Selectors

```css
.mod {} /* or */ .mod.rotator {} /* Module output container */

.txt {} /* Text items */

.img {} /* Image items */

.img > img {} /* Image tags inside image items */

```

---
