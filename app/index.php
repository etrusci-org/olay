<?php
require __DIR__.'/lib/init.php';

include __DIR__.'/tpl/header.php';
?>




<h1>olay</h1>

<h2>modules</h2>

<ul>
    <?php
    foreach (array_keys(CONF['module']) as $k) {
        printf('
            <li>
                <a href="overlay.php?module=%1$s">%1$s</a><br>
                conf: <code>%2$s</code>
            </li>',
            $k,
            json_encode(CONF['module'][$k]),
        );
    }
    ?>
</ul>






<?php  include __DIR__.'/tpl/footer.php'; ?>
