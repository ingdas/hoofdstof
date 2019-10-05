export enum AdminActionType {
    NewAdminState = "NewAdminState",
    SelectDomain = "SelectDomain"
}

export interface NewAdminStateAction {
    adminState: AdminState
}

export interface AdminState {
    domain?: number
    answers: Record<string, Record<string | number, number>>
}