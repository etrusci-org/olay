<script type="module">
    import { RandomQuoteTyper } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/RandomQuoteTyper.min.js';
    import { randomQuotes as quotes } from 'https://cdn.jsdelivr.net/gh/etrusci-org/spartalien.com@8.12.24/app/public/res/randomQuotes.min.js';

    RandomQuoteTyper.targetSelector = '.olay .module';

    RandomQuoteTyper.init(quotes);
    RandomQuoteTyper.typeQuote();

    setInterval(() => {
        RandomQuoteTyper.typeQuote();
    }, modConf.updateEvery);
</script>
