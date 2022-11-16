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

---

## Examples

- [mod=examplemod](http://localhost/olay/app/?mod=examplemod)
- [mod=examplemod&updateRate=250](http://localhost/olay/app/?mod=examplemod&updateRate=250)
- [mod=examplemod&updateRate=250&message=foobar](http://localhost/olay/app/?mod=examplemod&updateRate=250&message=foobar)
- [mod=examplemod&updateRate=250&message=badword](http://localhost/olay/app/?mod=examplemod&updateRate=250&message=badword)
