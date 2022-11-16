# Olay Rotator

Display multiple text items in a rotation.

**Module Handle:** `rotator`

---

## Parameters

| Parameter    | Valid Values                  | Default |
|--------------|-------------------------------|---------|
| `updateRate` | Milliseconds (1s = 1000ms)    | `10000` |
| `items`      | Text items separated with `|` | `a|b|c` |
| `shuffle`    | `true`, `false`               | `false` |

### Notes

- Use `%20` or `+` if you want spaces in `items`.

---

## Examples

- [mod=rotator](https://etrusci.org/tool/olay/?mod=rotator)
- [mod=rotator&updateRate=1000](https://etrusci.org/tool/olay/?mod=rotator&updateRate=1000)
- [mod=rotator&updateRate=1000&shuffle=true](https://etrusci.org/tool/olay/?mod=rotator&updateRate=1000&shuffle=true)
