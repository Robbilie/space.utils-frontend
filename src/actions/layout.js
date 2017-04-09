/* eslint-disable import/prefer-default-export */

import { TOGGLE_SIDEBAR, SET_SEARCHING, SET_LOADING, SET_SEARCH } from '../constants';

export function toggle_sidebar() {
  return { type: TOGGLE_SIDEBAR, value: false };
};

export function set_searching(value) {
  return { type: SET_SEARCHING, value };
};

export function set_loading(value) {
  return { type: SET_LOADING, value };
};

export function set_search(value) {
  return { type: SET_SEARCH, value };
};
