<?php
const APPVERSION = 'v1.45.50';
const MODDIR = __DIR__.'/../mod/';
const TPLDIR = __DIR__.'/../tpl/';
const LOGDIR = '';
const APPTIMEZONE = 'UTC';
const MODREGISTRY = [
    'examplemod',
    'clock',
    'kraken',
    'lastfm',
    'namegen',
    'numbers',
    'quotes',
    'rotator',
    'twitch',
    'uptime',
];

date_default_timezone_set(APPTIMEZONE);
