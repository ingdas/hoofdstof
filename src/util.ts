export function vibrate(arg: Array<number>) {
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(arg);
    }
}

export function changeListener(setter : (newValue : string) => void){
    return (event : React.ChangeEvent<HTMLInputElement>) => {
        setter((event.target as HTMLInputElement).value)
    }
}