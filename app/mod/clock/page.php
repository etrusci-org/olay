<script type="module">
    import { padNum } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/padNum.min.js';
    import { replaceNumbers } from './lib/replaceNumbers.js';


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
            if (MODCONF.rep) {
                t = replaceNumbers(t, MODCONF.repMap);
            }
            MODOUTPUT.innerHTML = t;
        }

        if (MODCONF.type == 'unix') {
            let t = Math.round(Date.now() / 1000);
            if (!MODCONF.rep) {
                MODOUTPUT.innerHTML = t;
            }
            else {
                MODOUTPUT.innerHTML = replaceNumbers(t, MODCONF.repMap);
            }
        }

        if (MODCONF.type == 'unixms') {
            let t = Date.now();
            if (!MODCONF.rep) {
                MODOUTPUT.innerHTML = t;
            }
            else {
                MODOUTPUT.innerHTML = replaceNumbers(t, MODCONF.repMap);
            }
        }
    }
</script>
