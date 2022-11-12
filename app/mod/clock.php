<script type="module">
    import { padNum } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/padNum.min.js';
    import { secondsToDurationString } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/secondsToDurationString.min.js';

    const startTime = Date.now();

    function update() {
        if (modConf.format == 'unix') {
            outputElement.innerHTML = `${Math.round(Date.now() / 1000)}`;
        }

        if (modConf.format == 'milli') {
            outputElement.innerHTML = `${Date.now()}`;
        }

        if (modConf.format == 'human') {
            let t = new Date();
            outputElement.innerHTML = `${t.getFullYear()}-${padNum(t.getMonth()+1)}-${padNum(t.getDate())} ${padNum(t.getHours())}:${padNum(t.getMinutes())}:${padNum(t.getSeconds())}`;
        }

        if (modConf.format == 'uptime') {
            outputElement.innerHTML = `${secondsToDurationString(Math.round((Date.now() - startTime) / 1000))}`;
        }
    }

    update();

    setInterval(() => {
        update();
    }, modConf.updateEvery);
</script>
