<?php
function loadModule(): void {
    if (!isset($_GET['module']) || empty($_GET['module'])) {
        printf('boo: no module defined');
        exit(1);
    }

    if (!array_key_exists($_GET['module'], CONF['module'])) {
        printf('boo: module "%s" not found', $_GET['module']);
        exit(2);
    }

    $moduleFile = __DIR__.'/../mod/'.$_GET['module'].'.php';
    if (!file_exists($moduleFile) || !is_file($moduleFile)) {
        printf('boo: module file "%s" not found', $moduleFile);
    }

    include __DIR__.'/../tpl/header.php';
    include $moduleFile;
    include __DIR__.'/../tpl/footer.php';
}
