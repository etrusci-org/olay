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
- Use `%20` or `+` if you want spaces in `format`.
- You may want to disable the Browser-Source setting "Shutdown source when not visible" in OBS or the time will be reset when the page gets reloaded.

---

## Examples

- [mod=uptime](https://etrusci.org/tool/olay/?mod=uptime)
- [mod=uptime&pad=true](https://etrusci.org/tool/olay/?mod=uptime&pad=true)
- [mod=uptime&pad=true&format={hours}:{minutes}:{seconds}](https://etrusci.org/tool/olay/?mod=uptime&pad=true&format={hours}:{minutes}:{seconds})
