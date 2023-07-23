# [Olay](../../../README.md) - colorfader

Display and fade tru colors.

**Base URL**: <https://etrusci.org/tool/olay/?mod=colorfader>  
**Default configuration**: [colorfader.conf.js](./colorfader.conf.js)  
**Default style**: [colorfader.default.css](./colorfader.default.css)

---

## Examples

- [mod=colorfader](https://etrusci.org/tool/olay/?mod=colorfader)
- [mod=colorfader&duration=5](https://etrusci.org/tool/olay/?mod=colorfader&duration=5)
- [mod=colorfader&duration=5&function=ease-out](https://etrusci.org/tool/olay/?mod=colorfader&duration=5&function=ease-out)
- [mod=colorfader&duration=0.5&random=false](https://etrusci.org/tool/olay/?mod=colorfader&duration=0.5&random=false)
- [mod=colorfader&duration=5&random=false&list=|ff0000|00ff00|0000ff&shuffle=true](https://etrusci.org/tool/olay/?mod=colorfader&duration=5&random=false&list=|ff0000|00ff00|0000ff&shuffle=true)

---

## Configuration

### delay

Delay before fading to next color in seconds.

Valid: `Floats >= 0.0`

### duration

Fade to next color duration in seconds.

Valid: `Floats >= 0.0`

### function

Fade timing function to use.

Valid:

- `linear`: Linear transition
- `ease`: Ease transition
- `ease-in`: Ease-in transition
- `ease-out`: Ease-out transition
- `ease-in-out`: Ease-in-out transition

### random

Whether to use randomized colors or the values from the list.

Valid:

- `true`: Use randomized colors
- `false`: Use values from the list

### list

Specific color values to fade tru.

Valid: `Color HEX values without leading number sign (#)`

Start each item with `|`

### shuffle

Whether to shuffle the colors list.

Requires: `random = false`  
Valid:

- `true`: Shuffle list
- `false`: Keep list in order

---
