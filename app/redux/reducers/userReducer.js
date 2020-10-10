import {types} from '../types/types';

const INITIAL_STATE = {
  timeSlotArray: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SAVE_USER_NAME:
      return {...state, timeSlotArray: action.payload};

    default:
      return state;
  }
};
