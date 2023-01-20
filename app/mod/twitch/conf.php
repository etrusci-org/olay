<?php
$MODCONF = [
    'updateRate' => 120000,
    'type' => 'followerCount',
    'sep' => '<br>',
    'rotator' => false,
    'rotatorSpeed' => 2500,
    'format' => '{rank}. ({score}) {user}'
];

$WORKERCONF = [
    'twitchBin' => '~/app/twitch-cli/twitch',
    'commandsUpdateRate' => 900,
    'commandsDelay' => 5,
    'commands' => [
        'user' => 'api get users --unformatted --autopaginate -q login=spartalien',
        'channel' => 'api get /channels --unformatted --autopaginate -q broadcaster_id=540195916',
        'follower' => 'api get users follows --unformatted --autopaginate -q to_id=540195916',
        'subscriber' => 'api get /subscriptions --unformatted --autopaginate -q broadcaster_id=540195916',
        'bitsleader' => 'api get /bits/leaderboard --unformatted --autopaginate -q period=all -q count=100',
    ],
];
