export function vibrate(arg: Array<number>) {
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(arg);
    }
}