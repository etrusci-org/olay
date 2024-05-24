# [Olay](../../../README.md) - clock

Display current local date and time.

**Base URL**: <https://etrusci.org/tool/olay/?mod=clock>  
**Default configuration**: [clock.conf.js](./clock.conf.js)  
**Default style**: [clock.default.css](./clock.default.css)

---

## Examples

- [mod=clock](https://etrusci.org/tool/olay/?mod=clock)
- [mod=clock&humanformat={hour}:{minute}&updaterate=60000](https://etrusci.org/tool/olay/?mod=clock&humanformat={hour}:{minute}&updaterate=60000)
- [mod=clock&repnum=true&repmap=4](https://etrusci.org/tool/olay/?mod=clock&repnum=true&repmap=4)
- [mod=clock&type=unix](https://etrusci.org/tool/olay/?mod=clock&type=unix)
- [mod=clock&type=unixms&updaterate=80](https://etrusci.org/tool/olay/?mod=clock&type=unixms&updaterate=80)
- [mod=clock&type=beats](https://etrusci.org/tool/olay/?mod=clock&type=beats)
- [mod=clock&type=beats&beatsformat=@{beats}](https://etrusci.org/tool/olay/?mod=clock&type=beats&beatsformat=@{beats})

---

## Configuration

### updaterate

Clock update rate in milliseconds.

Valid: `Integers >= 1`

### type

Which type of clock to load.

Valid:

- `human`: Human-readable format
- `unix`: Unixtime stamp in seconds
- `unixms`: Unixtime stamp in milliseconds

### humanformat

Human-readable format template.

Requires: `type = human`  
Valid: `Placeholders, text, HTML`

Placeholders:

- `{year}`: Year
- `{month}`: Month
- `{day}`: Day
- `{hour}`: Hour
- `{minute}`: Minute
- `{second}`: Second
- `{millisecond}`: Millisecond
- `{timezoneOffset}`: Timezone offset (relative from UTC)

### beatsformat

Internet time format template.

Requires: `type = beats`  
Valid: `Placeholders, text, HTML`

Placeholders:

- `{beats}`: Beats

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
<div class="mod clock">
    {date_time}
</div>
```

### Available CSS Selectors

```css
.mod {} /* or */ .mod.clock {} /* Module output container */
```

---
