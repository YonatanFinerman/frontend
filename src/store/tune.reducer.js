export const SET_TUNES = 'SET_TUNES'
// export const REMOVE_TUNE = 'REMOVE_TUNE'
// export const ADD_TUNE = 'ADD_TUNE'
// export const UPDATE_TUNE = 'UPDATE_TUNE'
// export const ADD_TO_TUNET = 'ADD_TO_TUNET'
// export const CLEAR_TUNET = 'CLEAR_TUNET'
// export const UNDO_REMOVE_TUNE = 'UNDO_REMOVE_TUNE'
// export const REMOVE_FROM_TUNET = 'REMOVE_FROM_TUNET'
// export const TOGGLE_FILTER_MODAL = 'TOGGLE_FILTER_MODAL'
// export const TOGGLE_TUNE_MODAL = 'TOGGLE_TUNE_MODAL'
// export const TOGGLE_IS_TUNE = 'TOGGLE_IS_TUNE'

const initialState = {
    tunes: [],
    // tunet: [],
    // lastRemovedTune: null,
    // isTune: false,
    // isFilterModal:false,
    // isTuneModal:false,
}

export function tuneReducer(state = initialState, action) {
    var newState = state
    // var tunes
    
    switch (action.type) {
        case SET_TUNES:
            newState = { ...state, tunes: action.tunes }
            break
        // case REMOVE_TUNE:
        //     const lastRemovedTune = state.tunes.find(tune => tune._id === action.tuneId)
        //     tunes = state.tunes.filter(tune => tune._id !== action.tuneId)
        //     newState = { ...state, tunes, lastRemovedTune }
        //     break
        // case ADD_TUNE:
        //     newState = { ...state, tunes: [...state.tunes, action.tune] }
        //     break
        // case TOGGLE_FILTER_MODAL:
        //     newState = { ...state, isFilterModal: !state.isFilterModal }
        //     break
        // case TOGGLE_TUNE_MODAL:
        //     newState = { ...state, isTuneModal: !state.isTuneModal }
        //     break
        // case TOGGLE_IS_TUNE:
        //     newState = { ...state, isTune: action.isTune }
        //     break
        // case UPDATE_TUNE:
        //     tunes = state.tunes.map(tune => (tune._id === action.tune._id) ? action.tune : tune)
        //     newState = { ...state, tunes }
        //     break
        // case ADD_TO_TUNET:
        //     newState = { ...state, tunet: [...state.tunet, action.tune] }
        //     break
        // case REMOVE_FROM_TUNET:
        //     tunet = state.tunet.filter(tune => tune._id !== action.tuneId)
        //     newState = { ...state, tunet }
        //     break
        // case CLEAR_TUNET:
        //     newState = { ...state, tunet: [] }
        //     break
        // case UNDO_REMOVE_TUNE:
        //     if (state.lastRemovedTune) {
        //         newState = { ...state, tunes: [...state.tunes, state.lastRemovedTune], lastRemovedTune: null }
        //     }
        //     break
        default:
    }
    return newState
}
