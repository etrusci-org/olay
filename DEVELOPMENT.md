# Olay Development

<!-- How to create stuff... DRAFTS.... -->
<!--
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

**2.** Edit `app/mod/examplemod/conf.json` and add the following code.

```json
{
    "updateRate": 1000
}
```

**3.** Edit `page.php` and add the following code.

```html
<script type="module">
    // initial update on page load
    update();

    // continuous update
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);

    // the update function
    function update() {
        MODOUTPUT.innerHTML = `Hello cruel world - ${Date.now()}`;
    }
</script>
```

**4.** Edit `app/lib/conf.php` and add the module handle to the mod registry.

```php
const MODREGISTRY = [
    'examplemod',
    'clock',
    'uptime',
    'quotes',
    'numbers',
];
```

**5.** Open <https://yourserver.org/olay/?mod=examplemod> in a webbrowser.

Modules have access to the folllowing variables:

PHP
- `$MODHANDLE`   (str) mod file name w/o extension.
- `$MODCONFFILE` (str) path to mod/MODHANDLE/conf.php
- `$MODPAGEFILE` (str) path to mod/MODHANDLE/page.php
- `$MODCONF`     (arr) mod configuration with parsed url query params
- `$MODCONFJSON` (str) mod configuration in json format

JavaScript
- `MODCONF`   (obj) mod configuration
- `MODOUTPUT` (element) html output element

---
-->
