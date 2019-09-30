export interface SendAction {
    type: string
}

export interface NewTimerAction extends SendAction {
    time: number
}
