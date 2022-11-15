# Olay Numbers

Display numbers. Because.

**Module Handle:** `numbers`

---

## Parameters

| Parameter    | Valid Values                     | Default   |
|--------------|----------------------------------|-----------|
| `updateRate` | Milliseconds (1s = 1000ms)       | `3000`    |
| `type`       | `random`, `countup`, `countdown` | `random`  |
| `rangeStart` | Any integer                      | `1`       |
| `rangeEnd`   | Any integer                      | `1000000` |
| `pad`        | `true`, `false`                  | `true`    |
| `padChar`    | Any character except linebreaks  | `0`       |

### Notes

- `pad` and `padChar` apply only if `type` is set to `random`.
- `range*` can not be `0`.

---

## Examples

- <http://localhost/olay/app/?mod=numbers>
- <http://localhost/olay/app/?mod=numbers&type=countup&rangeStart=1&rangeEnd=5>
- <http://localhost/olay/app/?mod=numbers&type=countup&rangeStart=1&rangeEnd=1>
- <http://localhost/olay/app/?mod=numbers&type=countdown&rangeStart=5&rangeEnd=1>
- <http://localhost/olay/app/?mod=numbers&type=countdown&rangeStart=5&rangeEnd=5>
- <http://localhost/olay/app/?mod=numbers&pad=true>
- <http://localhost/olay/app/?mod=numbers&pad=true&padChar=X>
