# [Olay](../../README.md) - clock

Display current local date and time.

**Base URL**: <https://etrusci.org/tool/olay/?mod=clock>  
**Default configuration**: [clock.conf.js](./clock.conf.js)

---

## Examples

- [mod=clock](https://etrusci.org/tool/olay/?mod=clock)
- [mod=clock&humanformat={hour}:{minute}&updaterate=60000](https://etrusci.org/tool/olay/?mod=clock&humanformat={hour}:{minute}&updaterate=60000)
- [mod=clock&repnum=true&repmap=4](https://etrusci.org/tool/olay/?mod=clock&repnum=true&repmap=4)
- [mod=clock&type=unix](https://etrusci.org/tool/olay/?mod=clock&type=unix)
- [mod=clock&type=unixms&updaterate=80](https://etrusci.org/tool/olay/?mod=clock&type=unixms&updaterate=80)

---

## Configuration

### updaterate

Clock update rate in milliseconds.

Valid: *Integers >= 1*

### type

Which type of clock to load.

Valid: `human` | `unix` | `unixms`

- `human` = Human-readable format
- `unix` = Unixtime stamp in seconds
- `unixms` = Unixtime stamp in milliseconds

### humanformat

Human-readable format template.

Requires: `type=human`  
Valid: *Placeholders, text, HTML*  
Placeholders: `{year}`, `{month}`, `{day}`, `{hour}`, `{minute}`, `{second}`, `{millisecond}`, `{timezoneOffset}`  
Full example: `{year}-{month}-{day}<br>{hour}:{minute}:{second}.{millisecond}<br>{timezoneOffset}`

### repnum

Whether to replace numbers with characters.

Valid: `true` | `false`

### repmap

The character map for **repnum**.

Requires: `repnum=true`  
Valid: `1` | `2` | `3` | `4` | `5`

See [replaceNumsWithChars()](../lib/olay.js) for map contents.

---
