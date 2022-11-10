# Olay

Live stream overlay stuff for use as Browser-Source in OBS. **Work in progress**.

---

## clock

Parameters:

```text
format=<FORMAT>: Change the output format

human  -> YYYY-MM-DD HH:MM:SS, default
unix   -> Seconds since start of unixepoch
milli  -> Milliseconds since start of unixepoch
uptime -> Nd NNh NNm NNs

updateEvery=<MILLISECONDS>: Change the update interval rate
```

Examples:

`https://etrusci.org/tool/olay/?module=clock`

`https://etrusci.org/tool/olay/?module=clock&format=human`

`https://etrusci.org/tool/olay/?module=clock&format=unix`

`https://etrusci.org/tool/olay/?module=clock&format=milli`

`https://etrusci.org/tool/olay/?module=clock&format=milli&updateEvery=100`

`https://etrusci.org/tool/olay/?module=clock&format=uptime`

---

## random-luck

Parameters:

```text
updateEvery=<MILLISECONDS>: Change the update interval rate
```

Examples:

`https://etrusci.org/tool/olay/?module=random-luck`

`https://etrusci.org/tool/olay/?module=random-luck&updateEvery=2000`

---

## random-quotes

Parameters:

```text
updateEvery=<MILLISECONDS>: Change the update interval rate
```

Examples:

`https://etrusci.org/tool/olay/?module=random-quotes`

`https://etrusci.org/tool/olay/?module=random-quotes&updateEvery=60000`
