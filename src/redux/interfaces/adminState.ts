export interface AdminState {
    domain?: string
    answers: Record<string, Record<string | number, number>>
}