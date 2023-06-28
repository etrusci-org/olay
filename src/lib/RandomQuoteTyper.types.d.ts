interface RandomQuoteTyperInterface {
    typingSpeed: number
    targetSelector: string
    target: HTMLDivElement | HTMLParagraphElement | HTMLSpanElement | HTMLAnchorElement | null
    quotes: QuoteArrayType | null
    queue: QuoteItemType[]
    quote: QuoteItemType
    typerID: number | null
    init(quotes: QuoteArrayType): void
    typeQuote(): void
    stop(): void
    _fys(arr: any[]): any[] // https://en.wikipedia.org/wiki/Fisher-Yates_algorithm
}

type QuoteItemType = { author: string, text: string } | null

type QuoteArrayType = QuoteItemType[]
