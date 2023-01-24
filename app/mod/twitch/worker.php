#!/usr/bin/env php
<?php
print('[olay twitch worker]'.PHP_EOL);

require __DIR__.'/conf.php';

$WORKERCONF['commandsUpdateRate'] = max(30, $WORKERCONF['commandsUpdateRate']);
$WORKERCONF['commandsDelay'] = max(1, $WORKERCONF['commandsDelay']);

// cache file pattern, %s will be replaced with a handle
$cacheFilePattern = __DIR__.'/cache/%s.json';

// forever
while (true) {
    // loop tru commands
    foreach ($WORKERCONF['commands'] as $commandKey => $command) {
        // prep vars
        $command = sprintf('%s %s', $WORKERCONF['twitchBin'], $command);
        $output = null;
        $exitCode = null;

        $cacheFile = sprintf($cacheFilePattern, $commandKey);
        $cacheData = [];

        exec($command, $output, $exitCode);

        if (!$output) {
            print('bad output'.PHP_EOL);
            continue;
        }

        $apiData = json_decode($output[0], true);

        if (
            !$apiData ||
            !array_key_exists('data', $apiData)
        ) {
            print($commandKey.' troubles'.PHP_EOL);
            sleep($WORKERCONF['commandsDelay']);
            continue;
        }

        $apiData = $apiData['data'];

        print(date('Y-m-d H:i:s').' '.$commandKey.' -> "'.$cacheFile.'"'.PHP_EOL);

        if ($commandKey == 'user') {
            $cacheData = [
                'broadcaster_type' => $apiData[0]['broadcaster_type'],
                'created_at' => date('Y-m-d H:i:s', strtotime($apiData[0]['created_at'])),
                'description' => $apiData[0]['description'],
                'display_name' => $apiData[0]['display_name'],
                'profile_image_url' => $apiData[0]['profile_image_url'],
            ];
        }

        if ($commandKey == 'channel') {
            $cacheData = [
                'title' => $apiData[0]['title'],
                'game_name' => $apiData[0]['game_name'],
            ];
        }

        if ($commandKey == 'follower') {
            foreach ($apiData as $v) {
                $cacheData[] = [
                    'followed_at' => date('Y-m-d H:i:s', strtotime($v['followed_at'])),
                    'from_name' => $v['from_name'],
                ];
            }
        }

        if ($commandKey == 'subscriber') {

            $userCacheFile = sprintf($cacheFilePattern, 'user');
            $userCacheData = file_get_contents($userCacheFile);
            $userCacheData = json_decode($userCacheData, true);

            foreach ($apiData as $v) {
                if (strtolower($v['user_name']) == strtolower($userCacheData['display_name'])) {
                    continue;
                }
                $cacheData[] = [
                    'is_gift' => $v['is_gift'],
                    'tier' => $v['tier'],
                    'user_name' => $v['user_name'],
                ];
            }
        }

        if ($commandKey == 'bitsleader') {
            foreach ($apiData as $v) {
                $cacheData[] = [
                    'rank' => $v['rank'],
                    'score' => $v['score'],
                    'user_name' => $v['user_name'],
                ];
            }
        }

        if ($commandKey == 'chatter') {
            foreach ($apiData as $v) {
                $cacheData[] = [
                    'user_login' => $v['user_login'],
                    'user_name' => $v['user_name'],
                ];
            }
        }

        $cacheData = json_encode($cacheData, JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
        file_put_contents($cacheFile, $cacheData, LOCK_EX);

        // wait a bit before running the next command
        sleep($WORKERCONF['commandsDelay']);
    }

    // wait a bit before repeating the loop
    printf('next run on %s'.PHP_EOL, date('Y-m-d H:i:s', time()+$WORKERCONF['commandsUpdateRate']));
    sleep($WORKERCONF['commandsUpdateRate']);
}
