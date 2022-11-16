<script type="module">
    import { getRandomInteger } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/getRandomInteger.min.js';
    import { padNum } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/padNum.min.js';
    import { isPrime } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/isPrime.min.js';


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

            let labelTypeStr = '';
            if (MODCONF.labelType) {
                if (!isPrime(n)) {
                    labelTypeStr = MODCONF.labelNatural;
                }
                else {
                    labelTypeStr = MODCONF.labelPrime;
                }
            }

            MODOUTPUT.innerHTML = (MODCONF.pad) ? `${padNum(n, MODCONF.rangeEnd.toString().length, MODCONF.padChar)}${labelTypeStr}` : `${n}${labelTypeStr}`;
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
