<script type="module">
    import { fetchJSON } from './lib/fetchJSON.js';


    MODCONF.updateRate = Math.max(10000, MODCONF.updateRate);


    update();
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    async function update() {
        const tickerData = await fetchJSON(`https://api.kraken.com/0/public/Ticker?pair=${MODCONF.pair}`);

        if (tickerData.error.length > 0) {
            console.error(tickerData.error);
            MODOUTPUT.innerHTML = tickerData.error.join(', ');
            return;
        }

        let indexPrice = tickerData.result[MODCONF.pair]['c'][0];

        MODOUTPUT.innerHTML = `${MODCONF.label}${indexPrice}`;
    }
</script>
