# Olay Kraken

Display [Kraken](https://kraken.com) Ticker data.

**Module Handle:** `kraken`

---

## Module Parameters

### updateRate

In which interval the data should be reloaded.

Type: integer (milliseconds)  
Default: `60000`  
Valid: Integers >= 10000

### pair

Asset pair to get the data for.

Type: string  
Default: `MANAUSD`  
Valid: Any key from <https://api.kraken.com/0/public/Ticker>

### label

Text label to prefix the index price with.

Type: string  
Default: *none*  
Valid: Any characters except linebreaks

---
