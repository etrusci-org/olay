export function fyshuffle(arr: any[]): any[]
{
    const copy: any[] = [...arr]

    for (let i: number = copy.length - 1; i > 0; i--) {
        const y: number = Math.floor(Math.random() * i)
        const z: any = copy[i]
        copy[i] = copy[y]
        copy[y] = z
    }

    return copy
}
