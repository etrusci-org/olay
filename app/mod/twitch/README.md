# Olay Twitch

Fetch and display [Twitch](https://twitch.tv) [API](https://dev.twitch.tv/docs/api/reference) data for your account.  

**Module Handle:** `twitch`

---

## Requirements

- Self-hosted instance of Olay.
- [Twitch CLI](https://dev.twitch.tv/docs/cli) and a running background **worker.php** for refreshing cached data.

---

## Module Parameters

### updateRate

In which interval the data should be reloaded.

Type: integer (milliseconds)  
Default: `120000`  
Valid: Integers >= 1

### type

Which type of data to load.

Type: string  
Default: `followerCount`  
Valid: `streamTitle` | `streamCategory` | `followerCount` | `subscriberCount` | `profileImage` | `followerList` | `subscriberList` | `bitsleader`

Type description:
- `streamTitle`: Stream title
- `streamCategory`: Stream category
- `followerCount`: Follower count
- `subscriberCount`: Subscriber count
- `profileImage`: Profile image
- `followerList`: Follower list
- `subscriberList`: Subscriber list
- `bitsleader`: Bits leaderboard list

### sep

Separator for lists.

Type: string  
Default: `<br>`  
Valid: Any characters except linebreaks  
Requires: `rotator=false` & (`type=followerList` | `type=subscriberList` | `type=bitsleader`)

### rotator

Rotate through data items instead of displaying them all at once.

Type: boolean  
Default: `false`  
Valid: `true` | `false`  
Requires: `type=followerList` | `type=subscriberList` | `type=bitsleader`

Due to my incompetence, when initially loaded, the rotator will wait a full `rotatorSpeed` cycle before starting to run.

### rotatorSpeed

Delay between items if in rotator mode.

Type: integer (milliseconds)  
Default: `2500`  
Valid: Integers >= 1  
Requires: `rotator=true`

### format

Human-readable format template.

Type: string  
Default: `{rank}. ({score}) {user}`  
Valid: Any characters except linebreaks  
Requires: `type=bitsleader`

Available placeholders: `{rank}`, `{score}`, `{user}`

---

## Worker Configuration

These values can not be overriden with URL query parameters.

### twitchBin

Path to Twitch CLI executable.

Type: string  
Default: `~/app/twitch-cli/twitch`  
Valid: Path to executable

### commandsUpdateRate

In which interval new data should be fetched/cached from the Twitch API.

Type: integer (seconds)  
Default: `900`  
Valid: Integers >= 30

Don't go to low or you'll hit a rate-limit.

### commandsDelay

Delay between individual API commands.

Type: integer (seconds)  
Default: `5`  
Valid: Integers >= 1

### commands.user

Get user info.

Type: string  
Default: `api get users --unformatted --autopaginate -q login=spartalien`  
Valid: Twitch CLI command

### commands.channel

Get channel info.

Type: string  
Default: `api get /channels --unformatted --autopaginate -q broadcaster_id=540195916`  
Valid: Twitch CLI command

### commands.follower

Get followers list.

Type: string  
Default: `api get users follows --unformatted --autopaginate -q to_id=540195916`  
Valid: Twitch CLI command

### commands.subscriber

Get subscribers list.

Type: string  
Default: `api get /subscriptions --unformatted --autopaginate -q broadcaster_id=540195916`  
Valid: Twitch CLI command

### commands.bitsleader

Get bits leaderboard list.

Type: string  
Default: `api get /bits/leaderboard --unformatted --autopaginate -q period=all -q count=100`  
Valid: Twitch CLI command

---

## Worker Usage



Make the worker file executable:

```bash
cd olay/app/mod/twitch
chmod +x worker.php
```

Run the worker:

```bash
php worker.php 
# or
./worker.php
```

Stop the worker with `CTRL+C`.

---
