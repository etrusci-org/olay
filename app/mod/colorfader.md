# [Olay](../../README.md) - colorfader

Display and fade tru colors.

**Base URL**: <https://etrusci.org/tool/olay/?mod=colorfader>  
**Default configuration**: [colorfader.conf.js](./colorfader.conf.js)

---

## Configuration

### delay

Delay before fading to next color in seconds.

Valid: *Integers >= 0*

### duration

Fade to next color duration in seconds.

Valid: *Integers >= 1*

### function

Fade timing function to use.

Valid: `ease` | `linear` | `ease-in` | `ease-out` | `ease-in-out`

### random

Whether to use randomized colors or the values from the colors list.

Valid: `true` | `false`

### list

Specific color values to fade tru.

Valid: *Color HEX values without leading number sign (#)*

Start each item with `|`.

### shuffle

Whether to shuffle the colors list.

Requires: `random=false`  
Valid: `true` | `false`

---

## Examples

- [mod=colorfader](https://etrusci.org/tool/olay/?mod=colorfader)
- [mod=colorfader&duration=5](https://etrusci.org/tool/olay/?mod=colorfader&duration=5)
- [mod=colorfader&duration=5&function=ease-out](https://etrusci.org/tool/olay/?mod=colorfader&duration=5&function=ease-out)
- [mod=colorfader&duration=5&random=false](https://etrusci.org/tool/olay/?mod=colorfader&duration=5&random=false)
- [mod=colorfader&duration=5&random=false&list=|ff0000|00ff00|0000ff&shuffle=true](https://etrusci.org/tool/olay/?mod=colorfader&duration=5&random=false&list=|ff0000|00ff00|0000ff&shuffle=true)

---
