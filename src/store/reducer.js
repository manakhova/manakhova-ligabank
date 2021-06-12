import {ActionType} from './action';
import dayjs from 'dayjs';

const initialState = {
  converterFrom: `RUS`,
  converterFromQuantity: 1000,
  converterTo: `USD`,
  converterToQuantity: 10,
  date: dayjs(new Date()).format(`DD.MM.YYYY`),
  historyConvertations: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CONVERTER_TYPE_FROM:
      return {
        ...state,
        converterFrom: action.payload
      };
    case ActionType.CHANGE_CONVERTER_QUANTITY_FROM:
      return {
        ...state,
        converterFromQuantity: action.payload
      };
    case ActionType.CHANGE_CONVERTER_QUANTITY_TO:
      return {
        ...state,
        converterToQuantity: action.payload
      };
    case ActionType.CHANGE_CONVERTER_TYPE_TO:
      return {
        ...state,
        converterTo: action.payload
      };
    case ActionType.ADD_NEW_CONVERTATION:
      return {
        ...state,
        historyConvertations: [...state.historyConvertations, action.payload]
      };
  }

  return state;
};


export {reducer};
