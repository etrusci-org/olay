<script type="module">
    import { RandomQuoteTyper } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/RandomQuoteTyper.min.js';
    import { quotes } from '<?php print($MODCONF['source']); ?>';

    MODCONF.updateRate = Math.max(1, MODCONF.updateRate);
    RandomQuoteTyper.targetSelector = '.olay .mod';
    RandomQuoteTyper.typingSpeed = MODCONF.typingSpeed;
    RandomQuoteTyper.init(quotes);


    update();
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    function update() {
        RandomQuoteTyper.typeQuote();
    }
</script>
