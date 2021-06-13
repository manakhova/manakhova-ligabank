import {ActionCreator} from "./action";

const getRates = (data) => {
  return {
    USD: data.Valute.USD.Value,
    EUR: data.Valute.EUR.Value,
    GBP: data.Valute.GBP.Value,
    CNY: data.Valute.CNY.Value,
  };
};

export const fetchData = () => (dispatch, _getState, api) => (
  api.get(``)
    .then(({data}) => dispatch(ActionCreator.loadData(getRates(data))))
);
