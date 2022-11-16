# Olay ExampleMod

Just an example module.

**Module Handle:** `examplemod`

---

## Parameters

| Parameter    | Valid Values                     | Default             |
|--------------|----------------------------------|---------------------|
| `updateRate` | Milliseconds (1s = 1000ms)       | `1000`              |
| `message`    | Any characters except linebreaks | `hello cruel world` |

### Notes

- `message` can not be `badword`.
- Use `%20` or `+` if you want spaces in `message`.

---

## Examples

- [mod=examplemod](https://etrusci.org/tool/olay/?mod=examplemod)
- [mod=examplemod&updateRate=250](https://etrusci.org/tool/olay/?mod=examplemod&updateRate=250)
- [mod=examplemod&updateRate=250&message=foobar](https://etrusci.org/tool/olay/?mod=examplemod&updateRate=250&message=foobar)
- [mod=examplemod&updateRate=250&message=badword](https://etrusci.org/tool/olay/?mod=examplemod&updateRate=250&message=badword)
