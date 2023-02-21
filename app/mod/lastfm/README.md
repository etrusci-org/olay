# Olay Last.fm

Display [Last.fm](https://last.fm) data.

**Module Handle:** `lastfm`

---

## Module Parameters

### updateRate

In which interval the data should be reloaded.

Type: integer (milliseconds)  
Default: `300000`  
Valid: Integers >= 60000

### type

Type: string  
Default: `stats`  
Valid: `stats` | `recent`

### apiKey

Type: string  
Default: `YOUR_API_KEY`  
Valid: Your Last.fm API key

### apiUser

Type: string  
Default: `spartalien`  
Valid: Your Last.fm username

### apiLimit

Type: integer  
Default: `20`  
Valid: Integers >= 1 & <= 200
Requires: `type=recent`

---
