export const SET_TUNES = 'SET_TUNES'


const initialState = {
    tunes: [],

}

export function tuneReducer(state = initialState, action) {
    var newState = state

    switch (action.type) {
        case SET_TUNES:
            newState = { ...state, tunes: action.tunes }
            break

        default:
    }
    return newState
}
