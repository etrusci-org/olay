# Olay Numbers

Display numbers. Because.

**Module Handle:** `numbers`

---

## Module Parameters

### updateRate

In which interval the data should be reloaded.

Type: integer (milliseconds)  
Default: `3000`  
Valid: Integers >= 1

### type

Type: string  
Default: `random`  
Valid: `random` | `countup` | `countdown`

To count forever with `countup` or `countdown`, set `rangeStart` and `rangeEnd` to the same value.

### rangeStart

Type: integer  
Default: `1`  
Valid: Any positive or negative integer

### rangeEnd

Type: integer  
Default: `100000`  
Valid: Any positive or negative integer

### pad

Whether to pad/prefix numbers with leading characters.

Type: boolean  
Default: `false`  
Valid: `true` | `false`  
Requires: `type=random`

### padChar

Character used to pad/prefix numbers.

Type: string  
Default: `0`  
Valid: Any characters except linebreaks  
Requires: `type=random` & `pad=true`

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

### labelType

Whether to add a label to numbers.

Type: boolean  
Default: `false`  
Valid: `true` | `false`

### labelNatural

Label for natural numbers.

Type: string  
Default: `=natural`  
Valid: Any characters except linebreaks  
Requires: `labelType=true`

### labelPrime

Label for prime numbers.

Type: string  
Default: `=prime`  
Valid: Any characters except linebreaks  
Requires: `labelType=true`

---
