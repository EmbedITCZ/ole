type Mixed = {}
type Maybe<T> = T | null | undefined
type Constructor<T> = new (...args: any[]) => T
type HTMLElementClass = typeof HTMLElement
