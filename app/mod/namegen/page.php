<script type="module">
    import { getRandomInteger } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/getRandomInteger.min.js';
    import { getRandomArrayItem } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/getRandomArrayItem.min.js';
    import { ARTISTNAMEWORDS, RECORDNAMEWORDS, RECORDFORMATNAMES } from './mod/namegen/data.js';


    MODCONF.updateRate = Math.max(1, MODCONF.updateRate);


    update();


    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    function update() {
        MODOUTPUT.innerHTML = getRandomName();
    }


    function getRandomName() {
        let wordCount = 1;
        let source = [];
        let randomName = [];

        switch (MODCONF.type) {
            case 'artist':
                wordCount = getRandomInteger(2, 3);
                source = ARTISTNAMEWORDS;
                break;

            case 'record':
                wordCount = getRandomInteger(2, 5);
                source = RECORDNAMEWORDS;
                break;

            default:
                console.error('Unknown type:', MODCONF.type);
        }

        if (!source) {
            console.error('No source loaded');
            return;
        }

        while (randomName.length < wordCount) {
            let word = getRandomArrayItem(source)
            if (randomName.indexOf(word) == -1) {
                randomName.push(word)
            }
        }

        if (MODCONF.type == 'record') {
            randomName.push(`[${getRandomArrayItem(RECORDFORMATNAMES)}]`);
        }

        return randomName.join(' ');
    }
</script>
