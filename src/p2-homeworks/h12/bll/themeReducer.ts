export type ThemeType = 'dark' | 'red' | 'some'

export type StateType = {
    theme: string
}

export let initState: StateType = {
    theme: 'dark'
}

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEMES": {
            return {...state, theme: action.theme}
        }
        default:
            return state;
    }
};

type ActionType = changeThemeCType
export type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => {
    return {
        type: 'CHANGE_THEMES', theme
    } as const
};