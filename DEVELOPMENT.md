# Olay Development

For the tinkerers.

---

## Hosting Requirements

Webserver with [PHP](https://php.net) 8 support.

---

## Install

Simply upload the contents of `olay/app/` into a directory on your webserver.

---

## Create Your Own Module

**1.** Start with creating the file structure.

```text
olay/
  app/
    mod/
      examplemod/
        conf.json
        page.php
        README.md
```

**2.** Edit `olay/app/mod/examplemod/conf.json` and add the following code. This is the configuration of the module with all the possible parameters and their default values.

```json
{
    "updateRate": 1000,
    "message": "hello cruel world"
}
```

**3.** Edit `olay/app/mod/examplemod/page.php` and add the following code. This is the file that will be loaded in the browser.

```html
<script type="module">
    // do stuff on init
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

**4.** Edit `olay/app/lib/conf.php` and add the module handle to the mod registry.

```php
const MODREGISTRY = [
    'examplemod',
    'clock',
    'uptime',
    // ...
];
```

**5.** Open <https://yourserver.org/olay/?mod=examplemod> in a webbrowser. See if you can change the message by adding `&message=yay` to the URL.


**6.** Don't forget to write the `README.md` and add some demos to `olay/app/lib/demoparams.php` when the module is ready. :-)

---

## Module Variables/Constants/Functions

Usually you only need `MODCONF` and `MODOUTPUT` in JavaScript, but all modules have access to the following variables and constants.

**JavaScript:**

- const `MODCONF` (obj) Module configuration with parsed URL query parameters.
- const `MODOUTPUT` (html element) HTML module wrapper element. See `olay/app/tpl/premod.php`.
- func `fys(arr): arr` Shuffle an array in place (also returns shuffled array).
- func `replaceNumbers(num, mapKey): str` Replace numbers with other characters.

**PHP:**

- const `MODDIR` (string) Path to module directory.
- const `TPLDIR` (string) Path to template directory.
- const `MODREGISTRY` (array) Registered module handles.
- var `$MODHANDLE` (string) Module handle.
- var `$MODCONFFILE` (string) Path to module configuration file.
- var `$MODPAGEFILE` (string) Path to module page file.
- var `$MODCONF` (array) Module configuration with parsed URL query parameters.
- var `$MODCONFJSON` (string) Same as `$MODCONF` but in JSON format.

---
