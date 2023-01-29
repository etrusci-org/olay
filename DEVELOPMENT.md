# Olay Development

For the tinkerers.

---

## Hosting Requirements

- Webserver with [PHP](https://php.net) >= 8.1.x
- Internet connection because most modules rely on Javascript that is imported from a CDN

---

## Install

See if you want to adjust anything in `olay/app/lib/conf.php` first.

Upload the contents of `olay/app/` into a directory on your webserver.

Adjust the directory permissions on `olay/app/log/` so your webserver can write to it. To disable logging you can set `LOGDIR` in `olay/app/lib/conf.php` to an empty string.

See if <https://yourserver.org/olay/demo.php> works.

---

## Create Your Own Module

**1.** Start with creating the file structure.

```text
olay/
  app/
    mod/
      examplemod/
        conf.php
        page.php
        README.md
```

**2.** Edit `olay/app/mod/examplemod/conf.php` and add the following code. This is the configuration of the module with all the possible parameters and their default values.

```php
<?php
$MODCONF = [
    'updateRate' => 1000,
    'message' => 'hello cruel world',
];
```

**3.** Edit `olay/app/mod/examplemod/page.php` and add the following code. This is the file that will be loaded in the browser.

```html
<script type="module">
    // do stuff on init...

    // ...make sure updateRate is > 0
    MODCONF.updateRate = Math.max(1, MODCONF.updateRate);

    // ...or censor for fun
    if (MODCONF.message == 'badword') {
        MODCONF.message = 'censored';
    }

    // initial update on page load
    update();

    // continuous update
    // you can stop this with clearInterval(intervalID)
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);

    // the update function
    function update() {
        MODOUTPUT.innerHTML = `${MODCONF.message} | updateRate=${MODCONF.updateRate} | random number of the moment: ${Math.random()}`;
    }
</script>
```

**4.** Edit `olay/app/lib/conf.php` and add the module handle to the mod registry. The order of the `MODREGISTRY` entries do not matter.

```php
const MODREGISTRY = [
    'examplemod',
    'clock',
    'uptime',
    // ...
];
```

**5.** Open <https://yourserver.org/olay/?mod=examplemod> in a webbrowser. See if you can change the message by adding `&message=yay` to the URL.


**6.** Don't forget to write the `README.md` and add some demos to `olay/app/lib/demoparams.php` when the module is ready.

---

## Module Variables/Constants/Functions

Usually you only need the `MODCONF` and `MODOUTPUT` constants in JavaScript, but all modules have access to the following variables and constants.

**JavaScript:**
- const `MODCONF` (obj) Module configuration with parsed URL query parameters.
- const `MODOUTPUT` (html element) HTML module wrapper element. See `olay/app/tpl/premod.php`.

**PHP:**
- const `MODDIR` (string) Path to module directory.
- const `TPLDIR` (string) Path to template directory.
- const `MODREGISTRY` (array) Registered module handles.
- var `$MODHANDLE` (string) Module handle.
- var `$MODCONFFILE` (string) Path to module configuration file.
- var `$MODPAGEFILE` (string) Path to module page file.
- var `$MODCONF` (array) Module configuration with parsed URL query parameters.
- var `$MODCONFJSON` (string) Same as `$MODCONF` but in JSON format.

**Module URLs:**

Add `debug=true` to any module query parameters to show the loaded configuration below the output.  
E.g. `mod=clock&debug=true`

---
