# Olay Twitch (WORK IN PROGRESS)

Fetch [Twitch](https://twitch.tv) [API](https://dev.twitch.tv/docs/api/reference) data for your account.  
Only usable if you self-host.  
Needs [Twitch CLI](https://dev.twitch.tv/docs/cli) and the local `worker.php` for fetching data.

**Module Handle:** `twitch`

---

## Parameters

| Parameter      | Valid Values                                                                                                                        | Default         |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| `updateRate`   | Milliseconds (1s = 1000ms)                                                                                                          | `120000`        |
| `type`         | `streamTitle`, `streamCategory`, `followerCount`, `subscriberCount`, `profileImage`, `followerList`, `subscriberList`, `bitsleader` | `followerCount` |
| `rotator`      | `true`, `false`                                                                                                                     | `false`         |
| `rotatorSpeed` | Milliseconds (1s = 1000ms)                                                                                                          | `2500`          |
| `sep`          | Any character except linebreaks                                                                                                     | `<br>`          |


### Notes

- Use `%20` or `+` if you want spaces in `sep`.

---

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
