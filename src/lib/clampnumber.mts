export function clampnumber(num: number, min: number, max: number): number
{
    return Math.max(min, Math.min(num, max))
}
