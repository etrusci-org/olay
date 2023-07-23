function fyShuffle(arr) {
    const copy = [...arr]

    for (let i = copy.length - 1; i > 0; i--) {
        const y = Math.floor(Math.random() * i)
        const z = copy[i]
        copy[i] = copy[y]
        copy[y] = z
    }

    return copy
}
