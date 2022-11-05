interface OlayInterface {
    conf: OlayConfInterface
    overlay: string | null
    main(): void
}


    interface OlayConfInterface {
        overlay: {
            clock: OlayClockConfInterface
            // randomLuck: OlayRandomLuckConfInterface
            // randomQuotes: OlayRandomQuotesConfInterface
        }

    }


        interface OlayClockConfInterface {
            updateInterval: number
            format: string[]
        }



interface OlayClockInterface {
    run(conf: OlayClockConfInterface): void
    update(format: string): void
}
