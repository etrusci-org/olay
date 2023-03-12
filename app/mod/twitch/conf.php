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
        // you can comment-out those you don't need
        'user' => 'api get /users --unformatted --autopaginate -q login=spartalien',
        'channel' => 'api get /channels --unformatted --autopaginate -q broadcaster_id=540195916',
        'stream' => 'api get /streams --unformatted --autopaginate -q type=live -q first=1 -q user_login=spartalien',
        'follower' => 'api get /users/follows --unformatted --autopaginate -q to_id=540195916',
        'subscriber' => 'api get /subscriptions --unformatted --autopaginate -q broadcaster_id=540195916',
        'bitleader' => 'api get /bits/leaderboard --unformatted --autopaginate -q period=all -q count=100',
        'chatter' => 'api get /chat/chatters --unformatted --autopaginate -q broadcaster_id=540195916 -q moderator_id=540195916',
        'banned' => 'api get /moderation/banned --unformatted --autopaginate -q broadcaster_id=540195916',
        'goal' => 'api get /goals --unformatted --autopaginate -q broadcaster_id=540195916',
        'emote' => 'api get /chat/emotes --unformatted --autopaginate -q broadcaster_id=540195916',
    ],
];
