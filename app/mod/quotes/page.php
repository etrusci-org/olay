<script type="module">
    import { RandomQuoteTyper } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/RandomQuoteTyper.min.js';
    import { randomQuotes as quotes } from '<?php print($MODCONF['source']); ?>';


    RandomQuoteTyper.targetSelector = '.olay .mod';
    RandomQuoteTyper.init(quotes);


    update();
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    function update() {
        RandomQuoteTyper.typeQuote();
    }
</script>
