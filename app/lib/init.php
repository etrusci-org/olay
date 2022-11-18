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
$MODCONFFILE = realpath(MODDIR.$MODHANDLE.'/conf.json');
$MODPAGEFILE = realpath(MODDIR.$MODHANDLE.'/page.php');
$MODCONF = [];
$MODCONFJSON = $MODCONF;

// stop if mod files do not exist
if (
    !$MODCONFFILE ||
    !$MODPAGEFILE
) {
    boo('mod files not found');
}

// load/prepare mod conf
$MODCONFJSON = file_get_contents($MODCONFFILE);
$MODCONF = json_decode($MODCONFJSON, true, JSON_THROW_ON_ERROR);

foreach ($_GET as $k => $v) {
    if (!array_key_exists($k, $MODCONF)) {
        continue;
    }

    $origType = get_debug_type($MODCONF[$k]);

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

$MODCONFJSON = json_encode($MODCONF, JSON_THROW_ON_ERROR);

// output
include TPLDIR.'header.php';
include TPLDIR.'premod.php';
include $MODPAGEFILE;
include TPLDIR.'footer.php';
