export const ActionType = {
  CHANGE_CONVERTER_TYPE_FROM: `setConverterTypeFrom`,
  CHANGE_CONVERTER_TYPE_TO: `setConverterTypeTo`,
  ADD_NEW_CONVERTATION: `addNewConvertation`,
  CHANGE_CONVERTER_QUANTITY_FROM: `setConverterQuantityFrom`,
  CHANGE_CONVERTER_QUANTITY_TO: `setConverterQuantityTo`,
  DELETE_CONVERTATIONS: `deleteConvertations`,
  LOAD_DATA: `loadInfo`
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
  loadData: (data) => ({
    type: ActionType.LOAD_DATA,
    payload: data,
  }),
  deleteHistory: (convertations) => ({
    type: ActionType.DELETE_CONVERTATIONS,
    payload: convertations.slice(convertations.length),
  }),
};

