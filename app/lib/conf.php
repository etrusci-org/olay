<?php
error_reporting(E_ALL);


define('CONF', [

    // module config with defaults
    'module' => [

        'clock' => [
            'interval' => 1_000,
            'format' => [
                'human', // 0 = default
                'unix', // 1...N = alternative
                'milli',
                'uptime',
            ],
        ],

        'random-luck' => [
            'interval' => 13_000,
        ]

    ],

]);
