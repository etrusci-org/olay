# Olay

Live stream overlays for use as Browser-Source in OBS. **Work in progress**.

---

## Module Overview

| Module        | Parameters              |
|---------------|-------------------------|
| clock         | `updateEvery`, `format` |
| random-luck   | `updateEvery`           |
| random-quotes | `updateEvery`           |

## Parameter Default Values

```text
clock
    updateEvery: 1000
    format: human

random-luck
    updateEvery: 13000

random-quotes
    updateEvery: 300000
```

## Usage Examples

`<olay>/?module=clock`

`<olay>/?module=clock&format=human`

`<olay>/?module=clock&format=unix`

`<olay>/?module=clock&format=milli`

`<olay>/?module=clock&format=milli&updateEvery=100`

`<olay>/?module=clock&format=uptime`

`<olay>/?module=random-luck`

`<olay>/?module=random-quotes`

`<olay>/?module=random-quotes&updateEvery=60000`
