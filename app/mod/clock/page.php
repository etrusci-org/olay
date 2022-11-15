<script type="module">
    import { padNum } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/padNum.min.js';


    update();
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    function update() {
        if (MODCONF.type == 'human') {
            let now = new Date();
            let t = MODCONF.format;
            t = t.replace('{year}', now.getFullYear());
            t = t.replace('{month}', (MODCONF.pad) ? padNum(now.getMonth()+1, 2, MODCONF.padChar) : now.getMonth()+1);
            t = t.replace('{day}', (MODCONF.pad) ? padNum(now.getDate(), 2, MODCONF.padChar) : now.getDate());
            t = t.replace('{hour}', (MODCONF.pad) ? padNum(now.getHours(), 2, MODCONF.padChar) : now.getHours());
            t = t.replace('{minute}', (MODCONF.pad) ? padNum(now.getMinutes(), 2, MODCONF.padChar) : now.getMinutes());
            t = t.replace('{second}', (MODCONF.pad) ? padNum(now.getSeconds(), 2, MODCONF.padChar) : now.getSeconds());
            MODOUTPUT.innerHTML = t;
        }

        if (MODCONF.type == 'unix') {
            MODOUTPUT.innerHTML = `${Math.round(Date.now() / 1000)}`;
        }

        if (MODCONF.type == 'milli') {
            MODOUTPUT.innerHTML = `${Date.now()}`;
        }
    }
</script>
