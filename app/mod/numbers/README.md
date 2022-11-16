# Olay Numbers

Display numbers. Because.

**Module Handle:** `numbers`

---

## Parameters

| Parameter    | Valid Values                     | Default  |
|--------------|----------------------------------|----------|
| `updateRate` | Milliseconds (1s = 1000ms)       | `3000`   |
| `type`       | `random`, `countup`, `countdown` | `random` |
| `rangeStart` | Any integer                      | `1`      |
| `rangeEnd`   | Any integer                      | `100000` |
| `pad`        | `true`, `false`                  | `false`  |
| `padChar`    | Any character except linebreaks  | `0`      |

### Notes

- To count forever if `type` is set to `countup` or `countdown`, set `rangeStart` and `rangeEnd` to the same value.
- `pad` and `padChar` apply only if `type` is set to `random`.

---

## Examples

- [mod=numbers](https://etrusci.org/tool/olay/?mod=numbers)
- [mod=numbers&type=countup&rangeStart=1&rangeEnd=5](https://etrusci.org/tool/olay/?mod=numbers&type=countup&rangeStart=1&rangeEnd=5)
- [mod=numbers&type=countup&rangeStart=1&rangeEnd=1](https://etrusci.org/tool/olay/?mod=numbers&type=countup&rangeStart=1&rangeEnd=1)
- [mod=numbers&type=countdown&rangeStart=5&rangeEnd=1](https://etrusci.org/tool/olay/?mod=numbers&type=countdown&rangeStart=5&rangeEnd=1)
- [mod=numbers&type=countdown&rangeStart=5&rangeEnd=5](https://etrusci.org/tool/olay/?mod=numbers&type=countdown&rangeStart=5&rangeEnd=5)
- [mod=numbers&pad=true](https://etrusci.org/tool/olay/?mod=numbers&pad=true)
- [mod=numbers&pad=true&padChar=X](https://etrusci.org/tool/olay/?mod=numbers&pad=true&padChar=X)
