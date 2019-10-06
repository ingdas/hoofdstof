export function vibrate(arg: Array<number>) {
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(arg);
    }
}

export function changeListener(setter: (newValue: string) => void) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        setter((event.target as HTMLInputElement).value)
    }
}

export function isDefined<T>(a: T | undefined | null): a is T {
    return a !== null && a !== undefined
}