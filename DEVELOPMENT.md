# Olay Development

For the tinkerers.

---

## Hosting Requirements

Webserver with [PHP](https://php.net) 8 support.

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

**2.** Edit `conf.json` and add the following code. This is the configuration of the module with all the possible parameters and their default values.

```json
{
    "updateRate": 1000,
    "message": "hello cruel world"
}
```

**3.** Edit `page.php` and add the following code. This is the file that will be loaded in the browser.

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

**4.** Edit `app/lib/conf.php` and add the module handle to the mod registry.

```php
const MODREGISTRY = [
    'examplemod',
    'clock',
    'uptime',
    // ...
];
```

**5.** Open <https://yourserver.org/olay/?mod=examplemod> in a webbrowser. See if you can change the message by adding `&message=yay` to the URL.

---

## Module Variables/Constants/Functions

All modules have access to the following variables and constants.

**PHP:**

- const `MODDIR` (string) Path to module directory.
- const `TPLDIR` (string) Path to template directory.
- const `MODREGISTRY` (array) Registered module handles.
- var `$MODHANDLE` (string) Module handle.
- var `$MODCONFFILE` (string) Path to module configuration file.
- var `$MODPAGEFILE` (string) Path to module page file.
- var `$MODCONF` (array) Module configuration with parsed URL query parameters.
- var `$MODCONFJSON` (string) Same as `$MODCONF` but in JSON format.

**JavaScript:**

- const `MODCONF`   (obj) Module configuration with parsed URL query parameters.
- const `MODOUTPUT` (html element) HTML module wrapper element. See `app/tpl/premod.php`.
- func `fys(arr)` Shuffle an array in place.

---
