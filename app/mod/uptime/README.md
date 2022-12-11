# Olay Uptime

Display time passed since this module was loaded.

**Module Handle:** `uptime`

---

You may want to disable the Browser-Source setting "Shutdown source when not visible" in OBS Studio or the time will be reset when the page gets reloaded.

---

## Module Parameters

### updateRate

In which interval the data should be reloaded.

Type: integer (milliseconds)  
Default: `1000`  
Valid: Integers >= 1

### pad

Whether to pad/prefix numbers with leading characters.

Type: boolean  
Default: `false`  
Valid: `true` | `false`

### padChar

Character used to pad/prefix numbers.

Type: string  
Default: `0`  
Valid: Any characters except linebreaks  
Requires: `pad=true`

### format

Human-readable format template.

Type: string  
Default: `{days}d {hours}h {minutes}m {seconds}s`  
Valid: Any characters except linebreaks

Available placeholders: `{days}`, `{hours}`, `{minutes}`, `{seconds}`

---
