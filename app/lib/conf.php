<?php
error_reporting(E_ALL);


$conf = [
    // module configs/defaults
    'module' => [
        'clock' => [
            'updateEvery' => 1_000,
            'format' => [ // 0 = default, 1...N = alternative
                'human',
                'unix',
                'milli',
                'uptime',
            ],
        ],
        'random-luck' => [
            'updateEvery' => 13_000,
        ],
        'random-numbers' => [
            'updateEvery' => 5_000,
            'format' => [ // 0 = default, 1...N = alternative
                'simple',
                'label',
            ],
            'pad' => false,
            'padChar' => '0',
            'rangeStart' => 1,
            'rangeEnd' => 100_000,
        ],
        'random-quotes' => [
            'updateEvery' => 600_000,
        ],
    ],
];
