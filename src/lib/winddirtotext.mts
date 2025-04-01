// thanks Edward Brey
export function winddirtotext(degrees: number): string
{
    const d: string[] = [
        '↓N',
        '↙NE',
        '←E',
        '↖SE',
        '↑S',
        '↗SW',
        '→W',
        '↘NW',
    ]

    return d[Math.round(degrees / 22.5) % 8]!
}
