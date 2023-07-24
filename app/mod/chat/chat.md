# [Olay](../../../README.md) - chat

Display messages from one or more twitch chats.

WORK IN PROGRESS!

**Base URL**: <https://etrusci.org/tool/olay/?mod=chat>  
**Default configuration**: [chat.conf.js](./chat.conf.js)  
**Default style**: [chat.default.css](./chat.default.css)

---

## Examples

- [mod=chat](https://etrusci.org/tool/olay/?mod=chat)

---

## Configuration

### channels

List of channels to join.

Valid: `channel names`

Start each item with `|`

### ignore

List of user names (not display names) to ignore.

Valid: `user names`

Start each item with `|`

### limit

Limit the amount of displayed messages.

Valid: `Integers >= 1`

### removeafter

Time in milliseconds after old messages get removed.

Valid:

- `Integers >= 1`: Remove old messages after this amount of time
- `never`: Never remove old messages

Set to `never` to only respect **limit**.

### addto

Where to add new messages.

Valid:

- `bottom`: Add to bottom
- `top`: Add to top

### timestampformat

Human-readable format template.

Valid: `Placeholders, text, HTML`

Placeholders:

- `{year}`: Year
- `{month}`: Month
- `{day}`: Day
- `{hour}`: Hour
- `{minute}`: Minute
- `{second}`: Second
- `{millisecond}`: Millisecond
- `{timezoneOffset}`: Timezone offset (relative from UTC)

Full example: `{year}-{month}-{day}<br>{hour}:{minute}:{second}.{millisecond}<br>{timezoneOffset}`

### usercolor

Whether to use the name color chosen by user.

Valid:

- `true`: Use user color
- `false`: Use color from *Custom CSS* field in Browser-Source

### emotes

Whether to parse emotes.

Valid:

- `true`: Parse and display emotes as images
- `false`: Display only text value

### emotetheme

Color theme for emotes images background.

Valid:

- `light`: Light theme
- `dark`: Dark theme

### emotesize

Size of the emotes images.

Valid:

- `large`: 112 x 112 pixel
- `medium`: 56 x 56 pixel
- `small`: 28 x 28 pixel

### badge*

A badge/symbol to put before the user name depending on his "status".

Valid:

- `text, HTML`: Show badge
- `none`: Hide badge

Available badge parameters:

- `badgebroadcaster`: Symbol for broadcaster
- `badgemoderator`: Symbol for moderator
- `badgevip`: Symbol for VIP
- `badgesubscriber`: Symbol for subscriber
- `badgesubgifter`: Symbol for sub-gifter
- `badgebits`: Symbol for bits-giver

The broadcaster will always have only one badge.

### autoscroll

Whether to auto-scroll to the latest message.

Valid:

- `true`: Auto-scroll
- `false`: Do not auto-scroll

### repnum

Whether to replace timestamp numbers with characters.

Valid:

- `true`: Replace timestamp numbers with characters
- `false`: Do not replace timestamp numbers with characters

### repmap

The character map for **repnum**.

Requires: `repnum = true`  
Valid:

- `1`: ABCDEFGHIJ
- `2`: ZYXWVUTSRQ
- `3`: 9876543210
- `4`: ●□◆■○▶◁▲◇▼
- `5`: ٠١٢٣٤٥٦٧٨٩

### joininterval

Channel join interval in milliseconds.

Valid: `Integers >= 1`

---
