import {ActionType} from './action';

const initialState = {
  converterFrom: `RUS`,
  converterFromQuantity: ``,
  converterTo: `USD`,
  converterToQuantity: ``,
  date: String(new Date()),
  historyConvertations: [],
  rates: {},
  isDataLoaded: false
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
    case ActionType.DELETE_CONVERTATIONS:
      return {
        ...state,
        historyConvertations: action.payload
      };
    case ActionType.LOAD_DATA:
      return {
        ...state,
        rates: action.payload,
        isDataLoaded: true
      };
  }

  return state;
};


export {reducer};
