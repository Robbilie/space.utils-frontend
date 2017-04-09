import { TOGGLE_SIDEBAR, SET_SEARCHING, SET_LOADING, SET_SEARCH } from '../constants';

export default function layout(state = { title: '', search: '', isLoading: false, isSearching: false, isOpen: false }, { type, value }) {
  switch (type) {
    case TOGGLE_SIDEBAR: return { ...state, isOpen: !state.isOpen };
    case SET_SEARCHING: return { ...state, isSearching: value };
    case SET_LOADING: return { ...state, isLoading: value };
    case SET_SEARCH: return { ...state, search: value };
    default: return state;
  }
}
