<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Olay demo</title>
    <style>
        body {
            font-family: sans-serif;
        }
        code {
            font-family: monospace;
        }
        body, iframe {
            background: #ccc;
        }
        body, a {
            color: #000;
        }
        iframe {
            display: block;
            width: 30rem;
            max-width: 100%;
            height: 3rem;
            padding: .5rem;
            margin: 0 0 .5rem 0;
            border: 1px solid #666;
        }
    </style>
</head>
<body>
<h1><a href="https://github.com/etrusci-org/olay" target="_blank">Olay</a> demo</h1>
<hr>
<?php
require __DIR__.'/lib/conf.php';
require __DIR__.'/lib/demoparams.php';

foreach (DEMOPARAMS as $modHandle => $paramsOverrides) {
    if (!in_array($modHandle, MODREGISTRY)) continue;

    printf('<h2><a href="https://github.com/etrusci-org/olay/tree/main/app/mod/%1$s" target="_blank">%1$s</a></h2>', $modHandle);

    foreach ($paramsOverrides as $params) {
        $paramsPrefix = sprintf('mod=%s', $modHandle);
        $params = (!$params) ? $paramsPrefix : sprintf('%s&%s', $paramsPrefix, $params);
        printf('
            <code>%2$s</code><br>
            <iframe class="%1$s" loading="lazy" src="./?%2$s"></iframe>',
            $modHandle,
            $params,
        );
    }

    print('<hr>');
}
?>
</body>
</html>