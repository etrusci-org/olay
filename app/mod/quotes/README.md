# Olay Quotes

Display random quotes.

**Module Handle:** `quotes`

---

## Module Parameters

### updateRate

In which interval the data should be reloaded.

Type: integer (milliseconds)  
Default: `600000`  
Valid: Integers >= 1

The typewriter script will always complete the current quote even if this value is less than the time it needs to do so. It will simply instantly start the next one when done.

### typingSpeed

Speed of the typewriter effect.

Type: integer (milliseconds)  
Default: `100`  
Valid: Integers >= 1

### source

Quotes source file.

Type: string  
Default: `https://cdn.jsdelivr.net/gh/etrusci-org/quotes@main/js/quotes-s9.min.js`  
Valid: URL/Path to valid quotes file

To load a remote source, the [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings must be set accordingly on the server. Use a [CDN](https://www.jsdelivr.com) if you get an `Cross-Origin Request Blocked` error can not change these settings. You won't have this problem if you [host](./../../../DEVELOPMENT.md) both the app and the quotes file yourself.

See [this quotes repo](https://github.com/etrusci-org/quotes/) for examples if you want to create your own file.

---
