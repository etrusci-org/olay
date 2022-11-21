function fys(arr) {
    for (let x = arr.length - 1; x > 0; x--) {
        const y = Math.floor(Math.random() * x);
        const z = arr[x];
        arr[x] = arr[y];
        arr[y] = z;
    }
    return arr;
}


function replaceNumbers(num, mapKey) {
    if (mapKey === undefined) {
        mapKey = 1;
    }

    const map = {
        1: { '0': 'A', '1': 'B', '2': 'C', '3': 'D', '4': 'E', '5': 'F', '6': 'G', '7': 'H', '8': 'I', '9': 'J' },
        2: { '0': 'Z', '1': 'Y', '2': 'X', '3': 'W', '4': 'V', '5': 'U', '6': 'T', '7': 'S', '8': 'R', '9': 'Q' },
        3: { '0': '9', '1': '8', '2': '7', '3': '6', '4': '5', '5': '4', '6': '3', '7': '2', '8': '1', '9': '0' },
        4: { '0': '●', '1': '□', '2': '◆', '3': '■', '4': '○', '5': '▶', '6': '◁', '7': '▲', '8': '◇', '9': '▼' },
        5: { '0': '٠', '1': '١', '2': '٢', '3': '٣', '4': '٤', '5': '٥', '6': '٦', '7': '٧', '8': '٨', '9': '٩' },
    };

    let chars = '';
    for (const x of String(num).split('')) {
        if (map[mapKey][x]) {
            chars += map[mapKey][x];
        } else {
            chars += x;
        }
    }

    return chars;
}
