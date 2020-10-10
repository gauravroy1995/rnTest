import {types} from '../types/types';

export const saveIndex = text => ({
  type: types.SAVE_INDEX,
  payload: text,
});
export const saveSlotsArr = text => ({
  type: types.SAVE_USER_ARR,
  payload: text,
});
