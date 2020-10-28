import { GET_BOTS, DELETE_BOT, ADD_BOT } from './types';

export const getBots = () => {
  return {
    type: GET_BOTS
  };
};

export const deleteBot = (id) => {
  return {
    type: DELETE_BOT,
    payload: id
  };
};

export const addBot = bot => {
  return {
    type: ADD_BOT,
    payload: bot
  };
};
