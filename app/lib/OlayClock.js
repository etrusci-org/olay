export const OlayClock = {
    run(conf) {
        let updateInterval = conf.updateInterval;
        let format = conf.format[0];
        let req = new URL(window.location.href);
        let dump;
        dump = req.searchParams.get('updateInterval') || 0;
        dump = parseInt(`${dump}`);
        if (dump > 0) {
            updateInterval = dump;
        }
        dump = req.searchParams.get('format') || '';
        if (conf.format.indexOf(dump) != -1) {
            format = dump;
        }
        if (!format)
            return;
        this.update(format);
        setInterval(() => {
            if (!format)
                return;
            this.update(format);
        }, updateInterval);
    },
    update(format) {
        console.log('format:', format, Date.now());
    },
};
