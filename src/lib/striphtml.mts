export function striphtml(content: string): string
{
    const dump: HTMLDivElement = document.createElement('div')
    dump.innerHTML = content ?? ''
    return dump.innerText.trim()
}
