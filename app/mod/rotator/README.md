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

Whether to load the items from a file. Supports images.

Type: boolean  
Default: `false`  
Valid: `true` | `false`

### itemsFile

Items source file.

Type: string  
Default: `./mod/rotator/items.json`  
Valid: URL/Path to valid quotes file

You must create your own file before the default value will work. Rename `olay/app/mod/rotator/items.example.json` to `olay/app/mod/rotator/items.json`.

`img` can be either a local or remote path/url. `txt` can be any characters except linebreaks.

In the module output, the image and text are wrapped inside individual `<div>` tags and can be targeted with CSS through `.olay .mod .img` and `.olay .mod .txt`.

To load a remote source, the [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings must be set accordingly on the server. Use a [CDN](https://www.jsdelivr.com) if you get an `Cross-Origin Request Blocked` error can not change these settings. You won't have this problem if you [host](./../../../DEVELOPMENT.md) both the app and the quotes file yourself.

### shuffle

Whether to shuffle the items.

Type: boolean  
Default: `false`  
Valid: `true` | `false`

---
