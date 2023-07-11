# [Olay](../../README.md) - numbers

Display random numbers and counters.

**Base URL**: <https://etrusci.org/tool/olay/?mod=numbers>  
**Default configuration**: [numbers.conf.js](./numbers.conf.js)

---

## Configuration

### updaterate

Numbers update rate in milliseconds.

Valid: *Integers >= 1*

### type

Which type of numbers/counter to load.

Valid: `random` | `countup` | `countdown`

- `random` = Random numbers in this range will be picked.
- `countup` = Count up from **start** to **end**.
- `countdown` = Count down from **start** to **end**.

### start, end

Start and end of the numbers range to use.

Valid: *Integers or* `none`

If **type** is set to `countup` or `countdown`, **end** can be set to `none` to count forever.

### repnum

Whether to replace numbers with characters.

Valid: `true` | `false`

### repmap

The character map for **repnum**.

Requires: `repnum=true`  
Valid: `1` | `2` | `3` | `4` | `5`

See [replaceNumsWithChars()](../lib/olay.js) for map contents.

---

## Examples

- [mod=numbers](https://etrusci.org/tool/olay/?mod=numbers)
- [mod=numbers&updaterate=2000](https://etrusci.org/tool/olay/?mod=numbers&updaterate=2000)
- [mod=numbers&updaterate=1000&type=countup](https://etrusci.org/tool/olay/?mod=numbers&updaterate=1000&type=countup&start=0&end=10)
- [mod=numbers&updaterate=1000&type=countdown](https://etrusci.org/tool/olay/?mod=numbers&updaterate=1000&type=countdown&start=10&end=0)
- [mod=numbers&updaterate=1000&type=countup&end=none](https://etrusci.org/tool/olay/?mod=numbers&updaterate=1000&type=countup&end=none)
- [mod=numbers&repnum=true&repmap=4](https://etrusci.org/tool/olay/?mod=numbers&repnum=true&repmap=4)

---
