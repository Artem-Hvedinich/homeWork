import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.age - b.age)]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => b.age - a.age)]
            }
            return state
        }
        case 'check': {
            return state.filter(a => a.age > action.payload)
        }
        default:
            return state
    }
}

export type ActionType = ActionSortUpType | ActionSortDownType | ActionCheckType

type ActionSortUpType = ReturnType<typeof ActionSortUpAC>
export const ActionSortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up',
    } as const
}

type ActionSortDownType = ReturnType<typeof ActionSortDownAC>
export const ActionSortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down',
    } as const
}

type ActionCheckType = ReturnType<typeof ActionCheckAC>
export const ActionCheckAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}
