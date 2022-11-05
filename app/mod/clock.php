<?php
$format = CONF['module']['clock']['format'][0];
if (isset($_GET['format']) && in_array($_GET['format'], CONF['module']['clock']['format'])) {
    $format = $_GET['format'];
}

$interval = CONF['module']['clock']['interval'];
if (isset($_GET['interval']) && ctype_digit($_GET['interval'])) {
    $interval = $_GET['interval'];
}
?>




<div class="clock">loading...</div>




<script type="module">
    import { padNum } from './lib/padNum.js'; // TODO: add this to nifty repo
    import { secondsToDurationString } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/secondsToDurationString.min.js';

    let format = '<?php print($format); ?>';
    let interval = <?php print($interval); ?>;
    let startTime = Date.now();

    let e = document.querySelector('.clock');

    function update() {
        if (format == 'unix') {
            e.innerHTML = `${Math.round(Date.now() / 1000)}`;
        }

        if (format == 'milli') {
            e.innerHTML = `${Date.now()}`;
        }

        if (format == 'human') {
            let now = new Date();
            e.innerHTML = `${now.getFullYear()}-${padNum(now.getMonth())}-${padNum(now.getDate())} ${padNum(now.getHours())}:${padNum(now.getMinutes())}:${padNum(now.getSeconds())}`;
        }

        if (format == 'uptime') {
            e.innerHTML = `${secondsToDurationString(Math.round((Date.now() - startTime) / 1000))}`;
        }
    }

    update();
    setInterval(() => {
        update();
    }, interval);
</script>
