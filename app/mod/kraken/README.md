# Olay Kraken

Display Kraken Ticker data.

**Module Handle:** `kraken`

---

## Parameters

| Parameter    | Valid Values                             | Default   |
|--------------|------------------------------------------|-----------|
| `updateRate` | Milliseconds (1s = 1000ms)               | `60000`   |
| `pair`       | Asset pair to get data for               | `MANAUSD` |
| `label`      | Text label to prefix the indexPrice with |           |

### Notes

- `updateRate` can not be less than `10000`.
- For a list of valid `pair` identifiers see <https://api.kraken.com/0/public/Ticker>.
- Use `%20` or `+` if you want spaces in `label`.

---

## Examples

- [mod=kraken](https://etrusci.org/tool/olay/?mod=kraken)
- [mod=kraken&updateRate=10000](https://etrusci.org/tool/olay/?mod=kraken&updateRate=10000)
- [mod=kraken&label=MANA/USD:+](https://etrusci.org/tool/olay/?mod=kraken&label=MANA/USD:+)
