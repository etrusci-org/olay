# Olay Twitch (WORK IN PROGRESS)

Fetch [Twitch](https://twitch.tv) [API](https://dev.twitch.tv/docs/api/reference) data for your account.  
Only usable if you self-host.  
Needs [Twitch CLI](https://dev.twitch.tv/docs/cli) and the local `worker.php` for fetching data.

**Module Handle:** `twitch`

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
Requires: `rotator=false`

Will only be applied if `type=followerList`,  `type=subscriberList` or `type=bitsleader`.

### rotator

Rotate through data items instead of displaying them all at once.

Type: boolean  
Default: `false`  
Valid: `true` | `false`  
Requires: `type=followerList` | `type=subscriberList` | `type=bitsleader`

### rotatorSpeed

Delay between items if in rotator mode.

Type: integer (milliseconds)  
Default: `2500`  
Valid: Integers >= 1
Requires: `rotator=true`

---





<!--
## Worker Configuration

These can not be overriden with URL query parameters.

| Parameter                    | Valid Values              | Default                                                                             |
|------------------------------|---------------------------|-------------------------------------------------------------------------------------|
| `worker.twitchBin`           | Path to Twitch CLI binary | `~/app/twitch-cli/twitch`                                                           |
| `worker.cacheDir`            | Path to cache directory   | `./mod/twitch/cache`                                                                |
| `worker.commandsUpdateRate`  | Seconds                   | `900`                                                                               |
| `worker.commandsDelay`       | Seconds                   | `5`                                                                                 |
| `worker.commands.user`       | Twitch CLI parameters     | `api get users --unformatted --autopaginate -q login=spartalien`                    |
| `worker.commands.channel`    | Twitch CLI parameters     | `api get /channels --unformatted --autopaginate -q broadcaster_id=540195916`        |
| `worker.commands.follower`   | Twitch CLI parameters     | `api get users follows --unformatted --autopaginate -q to_id=540195916"`            |
| `worker.commands.subscriber` | Twitch CLI parameters     | `api get /subscriptions --unformatted --autopaginate -q broadcaster_id=540195916"`  |
| `worker.commands.bitsleader` | Twitch CLI parameters     | `api get /bits/leaderboard --unformatted --autopaginate -q period=all -q count=100` |

---

## Run Worker

```bash
cd olay/app/mod/twitch
php worker.php
```
-->
