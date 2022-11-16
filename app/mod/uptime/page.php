<script type="module">
    import { padNum } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/padNum.min.js';


    const startTime = Date.now();


    update();
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    function update() {
        let sec = Math.round((Date.now() - startTime) / 1000);
        let days = Math.floor(sec / (3600 * 24));
        let hours = Math.floor(sec % (3600 * 24) / 3600);
        let minutes = Math.floor(sec % 3600 / 60);
        let seconds = Math.floor(sec % 60);
        let t = MODCONF.format
        t = t.replace('{days}', (MODCONF.pad) ? padNum(days) : days);
        t = t.replace('{hours}', (MODCONF.pad) ? padNum(hours) : hours);
        t = t.replace('{minutes}', (MODCONF.pad) ? padNum(minutes) : minutes);
        t = t.replace('{seconds}', (MODCONF.pad) ? padNum(seconds) : seconds);
        MODOUTPUT.innerHTML = t;
    }
</script>
