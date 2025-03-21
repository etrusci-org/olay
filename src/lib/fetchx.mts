export async function fetchx(type: 'text' | 'json' | 'blob', url: string, options: RequestInit = {}): Promise<any>
{
    const response = await fetch(url, options)

    switch (type) {
        case 'json': return await response.json()
        case 'text': return await response.text()
        case 'blob': return await response.blob()
    }
}
