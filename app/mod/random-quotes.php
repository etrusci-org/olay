<?php
$interval = CONF['module']['random-quotes']['interval'];
if (isset($_GET['interval']) && ctype_digit($_GET['interval'])) {
    $interval = $_GET['interval'];
}
?>




<div class="random-quotes">loading...</div>




<script type="module">
    import { RandomQuoteTyper } from './lib/RandomQuoteTyper.js'; // TODO: add this to nifty repo

    let interval = <?php print($interval); ?>;

    RandomQuoteTyper.targetSelector = '.random-quotes';

    RandomQuoteTyper.init();

    RandomQuoteTyper.typeQuote();
    setInterval(() => {
        RandomQuoteTyper.typeQuote();
    }, interval);
</script>
