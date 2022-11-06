<div class="output">loading...</div>




<script type="module">
    import { RandomQuoteTyper } from './lib/RandomQuoteTyper.js'; // TODO: add this to nifty repo

    const modConf = <?php print(json_encode($this->modConf)); ?>;
    RandomQuoteTyper.targetSelector = '.output';

    RandomQuoteTyper.init();
    RandomQuoteTyper.typeQuote();

    setInterval(() => {
        RandomQuoteTyper.typeQuote();
    }, modConf.updateEvery);
</script>
