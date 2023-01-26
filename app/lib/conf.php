<?php
const APPVERSION = 'v1.36.49-dev';
const MODDIR = __DIR__.'/../mod/';
const TPLDIR = __DIR__.'/../tpl/';
const LOGDIR = '';
const APPTIMEZONE = 'UTC';
const MODREGISTRY = [
    'examplemod',
    'clock',
    'kraken',
    'numbers',
    'quotes',
    'rotator',
    'twitch',
    'uptime',
];

date_default_timezone_set(APPTIMEZONE);
