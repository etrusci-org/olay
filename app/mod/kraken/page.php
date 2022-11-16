<script type="module">
    update();
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    async function update() {
        const tickerData = await getTickerData(MODCONF.pair);

        if (tickerData.error.length > 0) {
            console.error(tickerData.error);
            MODOUTPUT.innerHTML = tickerData.error.join(', ');
            return;
        }

        let indexPrice = tickerData.result[MODCONF.pair]['c'][0];

        MODOUTPUT.innerHTML = `${MODCONF.label}${indexPrice}`;
    }


    async function getTickerData(pair) {
        return fetch(`https://api.kraken.com/0/public/Ticker?pair=${pair}`).then((response) => response.json())
    }
</script>
