const initState: boolean = true

export type ActionType = LoadingType

export const loadingReducer = (state = initState, action: ActionType): boolean => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return !state
        }
        default:
            return state
    }
}

type LoadingType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => {
    return {
        type: 'LOADING',
        loading: loading
    } as const
} // fix any