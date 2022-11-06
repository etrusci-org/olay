<?php
require __DIR__.'/conf.php';
require __DIR__.'/core.php';

$Olay = new Olay(conf: $conf);
$Olay->renderModule();
