<?php
error_reporting(E_ALL);


$conf = [
    // module configs/defaults
    'module' => [
        'clock' => [
            'updateEvery' => 1_000,
            'format' => [
                'human', // 0 = default
                'unix', // 1...N = alternative
                'milli',
                'uptime',
            ],
        ],
        'random-luck' => [
            'updateEvery' => 13_000,
        ],
        'random-quotes' => [
            'updateEvery' => 300_000,
        ],
    ],
];
