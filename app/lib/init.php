<?php
require __DIR__.'/conf.php';




function boo(string $message = 'something went wrong', int $code = 1): void {
    include TPLDIR.'header.php';
    printf('
        <div class="error">
            ERROR: %1$s<br>
            For help go to: <a href="https://github.com/etrusci-org/olay">github.com/etrusci-org/olay</a>
        </div>',
        $message
    );
    include TPLDIR.'footer.php';
    exit($code);
}




// stop if no mod handle
if (
    !isset($_GET['mod']) ||
    empty($_GET['mod'])
) {
    boo('no mod handle');
}

// stop if mod handle is not in mod registry
if (!in_array($_GET['mod'], MODREGISTRY)) {
    boo('unknown mod handle');
}

// 'member/prep some vars
$MODHANDLE = $_GET['mod'];
$MODCONFFILE = realpath(MODDIR.$MODHANDLE.'/conf.php');
$MODPAGEFILE = realpath(MODDIR.$MODHANDLE.'/page.php');
$MODCONF = [];
$MODCONFJSON = [];

// stop if mod files do not exist
if (
    !$MODCONFFILE ||
    !$MODPAGEFILE
) {
    boo('mod files not found');
}

// load mod conf
require $MODCONFFILE;

// stop if modconf var is not set
if (!isset($MODCONF)) {
    boo('$MODCONF var not set');
}

// bake conf with params the client wants to overwrite
foreach ($_GET as $k => $v) {
    // silently skip unknown params
    if (!array_key_exists($k, $MODCONF)) {
        continue;
    }

    // get original/desired param value type from mod conf
    $origType = get_debug_type($MODCONF[$k]);

    // overwrite mod conf parameters depending on type and validity
    switch ($origType) {
        case 'string':
            if (filter_var($v, FILTER_VALIDATE_REGEXP, ['options' => ['regexp' => '/./']])) {
                $MODCONF[$k] = (string) $v;
            }
            break;

        case 'int':
            if (
                $v == '0' ||
                filter_var($v, FILTER_VALIDATE_INT)
            ) {
                $MODCONF[$k] = (int) $v;
            }
            break;

        case 'float':
            if ($v == '0' ||
                $v == '0.0' ||
                filter_var($v, FILTER_VALIDATE_FLOAT)
            ) {
                $MODCONF[$k] = (float) $v;
            }
            break;

        case 'bool':
            if (filter_var($v, FILTER_VALIDATE_BOOL)) {
                $MODCONF[$k] = true;
            }
            else {
                $MODCONF[$k] = false;
            }
            break;
    }
}

// store mod conf as json for mod page scripts
$MODCONFJSON = json_encode($MODCONF, JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

// output
include TPLDIR.'header.php';
include TPLDIR.'premod.php';
if (isset($_GET['debug'])) {
    printf("<pre>MODCONF: %s</pre>", $MODCONFJSON);
}
include $MODPAGEFILE;
include TPLDIR.'footer.php';

// log module access, but not from demo
if (!isset($_GET['demo']) && LOGDIR) {
    $logFile = LOGDIR.date('Y-m-d').'.log';
    $ogLine = implode('|', [
        date('Y-m-d H:i:s e'),
        microtime(true),
        $_SERVER['QUERY_STRING'],
        $_SERVER['HTTP_USER_AGENT'],
    ]);
    file_put_contents($logFile, $ogLine.PHP_EOL, LOCK_EX | FILE_APPEND);
}
