function fys(arr) {
    for (let x = arr.length - 1; x > 0; x--) {
        const y = Math.floor(Math.random() * x);
        const z = arr[x];
        arr[x] = arr[y];
        arr[y] = z;
    }
    return arr;
}
