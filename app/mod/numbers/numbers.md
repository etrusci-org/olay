# [Olay](../../../README.md) - numbers

Display random numbers and counters.

**Base URL**: <https://etrusci.org/tool/olay/?mod=numbers>  
**Default configuration**: [numbers.conf.js](./numbers.conf.js)  
**Default style**: [numbers.default.css](./numbers.default.css)

---

## Examples

- [mod=numbers](https://etrusci.org/tool/olay/?mod=numbers)
- [mod=numbers&updaterate=2000](https://etrusci.org/tool/olay/?mod=numbers&updaterate=2000)
- [mod=numbers&updaterate=1000&type=countup](https://etrusci.org/tool/olay/?mod=numbers&updaterate=1000&type=countup&start=0&end=10)
- [mod=numbers&updaterate=1000&type=countdown](https://etrusci.org/tool/olay/?mod=numbers&updaterate=1000&type=countdown&start=10&end=0)
- [mod=numbers&updaterate=1000&type=countup&end=none](https://etrusci.org/tool/olay/?mod=numbers&updaterate=1000&type=countup&end=none)
- [mod=numbers&repnum=true&repmap=4](https://etrusci.org/tool/olay/?mod=numbers&repnum=true&repmap=4)

---

## Configuration

### updaterate

Numbers update rate in milliseconds.

Valid: `Integers >= 1`

### type

Which type of numbers/counter to load.

Valid:

- `random`: Random numbers in this range will be picked.
- `countup`: Count up from **start** to **end**.
- `countdown`: Count down from **start** to **end**.

### start, end

Smallest (*start*) and largest (*end*) number of the range to use.

Valid:

- `Integers`: Use this number
- `none`: If **type** is set to `countup` or `countdown`, count forever.

### repnum

Whether to replace numbers with characters.

Valid:

- `true`: Replace numbers with characters
- `false`: Do not replace numbers with characters

### repmap

The character map for **repnum**.

Requires: `repnum = true`  
Valid:

- `1`: ABCDEFGHIJ
- `2`: ZYXWVUTSRQ
- `3`: 9876543210
- `4`: ●□◆■○▶◁▲◇▼
- `5`: ٠١٢٣٤٥٦٧٨٩

---

## Output Styling

### HTML Elements

```html
<div class="mod numbers">
    {numbers}
</div>

```

### Available CSS Selectors

```css
.mod {} /* or */ .mod.numbers {} /* Module output container */

```

---
