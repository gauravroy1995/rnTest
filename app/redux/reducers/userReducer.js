import {types} from '../types/types';

const INITIAL_STATE = {
  timeSlotArray: [
    {
      slot: '9am-10am',
      isBooked: false,
      name: '',
      phone: '',
    },
    {
      slot: '10am-11am',
      isBooked: false,
      name: '',
      phone: '',
    },
    {
      slot: '11am-12pm',
      isBooked: false,
      name: '',
      phone: '',
    },
    {
      slot: '12pm-1pm',
      isBooked: false,
      name: '',
      phone: '',
    },

    {
      slot: '1pm-2pm',
      isBooked: false,
      name: '',
      phone: '',
    },
    {
      slot: '2pm-3pm',
      isBooked: false,
      name: '',
      phone: '',
    },
    {
      slot: '3pm-4pm',
      isBooked: false,
      name: '',
      phone: '',
    },
    {
      slot: '4pm-5pm',
      isBooked: false,
      name: '',
      phone: '',
    },
  ],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SAVE_USER_NAME:
      return {...state, timeSlotArray: action.payload};

    default:
      return state;
  }
};
