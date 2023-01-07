# Olay Rotator

Display multiple text items in a rotation.

**Module Handle:** `rotator`

---

## Module Parameters

### updateRate

In which interval the data should be reloaded.

Type: integer (milliseconds)  
Default: `5000`  
Valid: Integers >= 1

### items

Text items to rotate through.

Type: string  
Default: `a|b|c|d|e|f|g`  
Valid: Any characters except linebreaks separated with `|`

### itemsFromFile

Whether to load the items from a local file. Supports images.

Type: boolean  
Default: `false`  
Valid: `true` | `false`

The file is located at `olay/app/mod/rotator/items.json`. `img` can be either a local or remote path/url. `txt` can be any characters except linebreaks.

The image and text are wrapped inside individual `<div>` tags and can be targeted with CSS through `.olay .mod .img` and `.olay .mod .txt`.

### shuffle

Whether to shuffle the items.

Type: boolean  
Default: `false`  
Valid: `true` | `false`

---
