<script type="module">
    import { getRandomInteger } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/getRandomInteger.min.js';
    import { padNum } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/padNum.min.js';


    if (
        MODCONF.type == 'countup' ||
        MODCONF.type == 'countdown'
    ) {
        var countNum = MODCONF.rangeStart;
    }


    update();
    var intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    function update() {
        if (MODCONF.type == 'random') {
            let n = getRandomInteger(MODCONF.rangeStart, MODCONF.rangeEnd);
            MODOUTPUT.innerHTML = (MODCONF.pad) ? padNum(n, MODCONF.rangeEnd.toString().length, MODCONF.padChar) : n;
        }

        if (MODCONF.type == 'countup') {
            MODOUTPUT.innerHTML = countNum;
            if (
                MODCONF.rangeStart != MODCONF.rangeEnd &&
                countNum >= MODCONF.rangeEnd
            ) {
                clearInterval(intervalID);
            }
            countNum += 1;
        }

        if (MODCONF.type == 'countdown') {
            MODOUTPUT.innerHTML = countNum;
            if (
                MODCONF.rangeStart != MODCONF.rangeEnd &&
                countNum <= MODCONF.rangeEnd
            ) {
                clearInterval(intervalID);
            }
            countNum -= 1;
        }
    }
</script>
