import {types} from '../types/types';

export const saveIndex = text => ({
  type: types.SAVE_INDEX,
  payload: text,
});
