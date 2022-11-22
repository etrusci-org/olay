# Olay Clock

Display date and time.

**Module Handle:** `clock`

---

## Parameters

| Parameter    | Valid Values                    | Default                                         |
|--------------|---------------------------------|-------------------------------------------------|
| `updateRate` | Milliseconds (1s = 1000ms)      | `1000`                                          |
| `type`       | `human`, `unix`, `unixms`       | `human`                                         |
| `pad`        | `true`, `false`                 | `true`                                          |
| `padChar`    | Any character except linebreaks | `0`                                             |
| `format`     | Template markup                 | `{year}-{month}-{day} {hour}:{minute}:{second}` |
| `rep`        | `true`, `false`                 | `false`                                         |
| `repMap`     | `1`, `2`, `3`, `4`, `5`         | `1`                                             |

### Notes

- `pad`, `padChar` and `format` apply only if `type` is set to `human`.
- `format` template markup understands the following placeholders: `{year}`, `{month}`, `{day}`, `{hour}`, `{minute}`, `{second}`. They are all optional.
- Use `%20` or `+` if you want spaces in `format`.

---

## Examples

- [mod=clock](https://etrusci.org/tool/olay/?mod=clock)
- [mod=clock&type=unix](https://etrusci.org/tool/olay/?mod=clock&type=unix)
- [mod=clock&type=unixms&updateRate=100](https://etrusci.org/tool/olay/?mod=clock&type=unixms&updateRate=100)
- [mod=clock&pad=false](https://etrusci.org/tool/olay/?mod=clock&pad=false)
- [mod=clock&padChar=X](https://etrusci.org/tool/olay/?mod=clock&padChar=X)
- [mod=clock&format={hour}:{minute}:{second}](https://etrusci.org/tool/olay/?mod=clock&format={hour}:{minute}:{second})
- [mod=clock&rep=true](https://etrusci.org/tool/olay/?mod=clock&rep=true)
- [mod=clock&rep=true&repMap=4](https://etrusci.org/tool/olay/?mod=clock&rep=true&repMap=4)
