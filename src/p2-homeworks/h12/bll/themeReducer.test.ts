import {themeReducer} from "./themeReducer";

test('change theme in homework', () => {
    const startState = {theme: 'dark'}
    const endState = themeReducer(startState, {type: 'CHANGE_THEMES', theme: 'red'})

    expect(endState.theme).toBe('red');
})