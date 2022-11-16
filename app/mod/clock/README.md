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

### Notes

- `pad`, `padChar` and `format` apply only if `type` is set to `human`.
- `format` template markup understands the following placeholders: `{year}`, `{month}`, `{day}`, `{hour}`, `{minute}`, `{second}`. They are all optional.

---

## Examples

- [mod=clock](http://localhost/olay/app/?mod=clock)
- [mod=clock&type=unix](http://localhost/olay/app/?mod=clock&type=unix)
- [mod=clock&type=unixms&updateRate=100](http://localhost/olay/app/?mod=clock&type=unixms&updateRate=100)
- [mod=clock&pad=false](http://localhost/olay/app/?mod=clock&pad=false)
- [mod=clock&padChar=X](http://localhost/olay/app/?mod=clock&padChar=X)
- [mod=clock&format={hour}:{minute}:{second}](http://localhost/olay/app/?mod=clock&format={hour}:{minute}:{second})
