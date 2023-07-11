# [Olay](../../README.md) - rotator

Display and rotate tru text from a list.

**Base URL**: <https://etrusci.org/tool/olay/?mod=rotator>  
**Default configuration**: [rotator.conf.js](./rotator.conf.js)

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

Valid: *Integers >= 1*

### shuffle

Whether to shuffle the items list.

Valid: `true` | `false`

### items

Items to rotate tru.

Valid: *text, HTML*

Start each item with `|`.

---
