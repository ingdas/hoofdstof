export enum AdminActionType {
    NewAdminState = "NewAdminState",
    SelectDomain = "SelectDomain",
    Answer = "Answer"
}

export interface NewAdminStateAction {
    adminState: AdminState
}

export interface AdminState {
    domain?: number
    answers: Record<string, Record<string, number>>
    firstOne: Record<string, Record<string, string>>
}