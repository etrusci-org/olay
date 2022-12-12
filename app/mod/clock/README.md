# Olay Clock

Display date and time.

**Module Handle:** `clock`  

---

## Module Parameters

### updateRate

In which interval the data should be reloaded.

Type: integer (milliseconds)  
Default: `1000`  
Valid: Integers >= 1

### type

Which type of clock to load.

Type: string  
Default: `human`  
Valid: `human` | `unix` | `unixms`

Type description:
- `human`: whatever `format` is set to
- `unix`: unix time in seconds
- `unixms`: unix time in milliseconds

### pad

Whether to pad/prefix numbers with leading characters.

Type: boolean  
Default: `true`  
Valid: `true` | `false`  
Requires: `type=human`

### padChar

Character used to pad/prefix numbers.

Type: string  
Default: `0`  
Valid: Any characters except linebreaks  
Requires: `type=human` & `pad=true`

### format

Human-readable format template.

Type: string  
Default: `{year}-{month}-{day} {hour}:{minute}:{second}`  
Valid: Any characters except linebreaks  
Requires: `type=human`

Available placeholders: `{year}`, `{month}`, `{day}`, `{hour}`, `{minute}`, `{second}`

### rep

Whether to replace numbers with characters.

Type: boolean  
Default: `false`  
Valid: `true` | `false`

### repMap

Character map used to replace numbers with characters.

Type: integer  
Default: `1`  
Valid: `1` | `2` | `3` | `4` | `5`  
Requires: `rep=true`

---
