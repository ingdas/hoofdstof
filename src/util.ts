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

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a : Array<any>) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}