export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const SET_IS_ABOUT_NAV = 'SET_IS_ABOUT_NAV'

const initialState = {
  isLoading: false,
  isAboutNav: false,
};

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case SET_IS_ABOUT_NAV:
      return { ...state, isAboutNav: action.isAboutNav }
    default: return state
  }
}
