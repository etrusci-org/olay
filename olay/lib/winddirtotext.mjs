// thanks Edward Brey
export function winddirtotext(degrees) {
    const d = [
        '↓N',
        '↙NE',
        '←E',
        '↖SE',
        '↑S',
        '↗SW',
        '→W',
        '↘NW',
    ];
    return d[Math.round(degrees / 22.5) % 8];
}
