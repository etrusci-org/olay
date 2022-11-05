<?php
$interval = CONF['module']['random-luck']['interval'];
if (isset($_GET['interval']) && ctype_digit($_GET['interval'])) {
    $interval = $_GET['interval'];
}
?>




<div class="random-luck">loading...</div>




<script type="module">
    import { isLucky } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/isLucky.min.js';

    let interval = <?php print($interval); ?>;

    let e = document.querySelector('.random-luck');

    function update() {
        e.innerHTML = `${(!isLucky(0.5)) ? 'L=0' : 'L=1'}`;
    }

    update();
    setInterval(() => {
        update();
    }, interval);
</script>
