# Olay Uptime

Display time passed since this module was loaded.

**Module Handle:** `uptime`

---

## Parameters

| Parameter    | Valid Values               | Default                                  |
|--------------|----------------------------|------------------------------------------|
| `updateRate` | Milliseconds (1s = 1000ms) | `1000`                                   |
| `pad`        | `true`, `false`            | `false`                                  |
| `format`     | Template markup            | `{days}d {hours}h {minutes}m {seconds}s` |

### Notes

- `format` template markup understands the following placeholders: `{days}`, `{hours}`, `{minutes}`, `{seconds}`. They are all optional.

---

## Examples

- <http://localhost/olay/app/?mod=uptime>
- <http://localhost/olay/app/?mod=uptime&pad=true>
- <http://localhost/olay/app/?mod=uptime&pad=true>
- <http://localhost/olay/app/?mod=uptime&format={hours}:{minutes}:{seconds}>
