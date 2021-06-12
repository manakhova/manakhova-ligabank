export const ActionType = {
  CHANGE_CONVERTER_TYPE_FROM: `setConverterTypeFrom`,
  CHANGE_CONVERTER_TYPE_TO: `setConverterTypeTo`,
  ADD_NEW_CONVERTATION: `addNewConvertation`,
  DELETE_ALL_CONVERTATIONS: `deleteAllConvertations`,
  CHANGE_CONVERTER_QUANTITY_FROM: `setConverterQuantityFrom`,
  CHANGE_CONVERTER_QUANTITY_TO: `setConverterQuantityTo`,
};


export const ActionCreator = {
  setConverterTypeFrom: (type) => ({
    type: ActionType.CHANGE_CONVERTER_TYPE_FROM,
    payload: type
  }),
  setConverterQuantityFrom: (quantity) => ({
    type: ActionType.CHANGE_CONVERTER_QUANTITY_FROM,
    payload: quantity
  }),
  setConverterTypeTo: (type) => ({
    type: ActionType.CHANGE_CONVERTER_TYPE_TO,
    payload: type
  }),
  setConverterQuantityTo: (quantity) => ({
    type: ActionType.CHANGE_CONVERTER_QUANTITY_TO,
    payload: quantity
  }),
  setNewConvertationToHistory: (convertation) => ({
    type: ActionType.ADD_NEW_CONVERTATION,
    payload: convertation
  }),
};
