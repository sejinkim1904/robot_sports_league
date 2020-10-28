import { v4 as uuid } from 'uuid';
import { GET_BOTS, DELETE_BOT, ADD_BOT } from '../actions/types';

const initialState = {
  bots: [
    { id: uuid(), name: 'george' },
    { id: uuid(), name: 'bob' },
    { id: uuid(), name: 'tom' },
    { id: uuid(), name: 'alex' },
  ]
}

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_BOTS:
      return {
        ...state
      }
    case DELETE_BOT:
      return {
        ...state,
        bots: state.bots.filter(bot => bot.id !== action.payload)
      }
    case ADD_BOT:
      return {
        ...state,
        bots: [action.payload, ...state.items]
      }
    default:
      return state;
  }
}