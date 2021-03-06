import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import Converter from './converter.jsx';
import {calculateRates} from '../const.js';
import History from './history.jsx';
import {fetchData} from "../store/api-actions";
import dayjs from 'dayjs';

const Main = (props) => {
  const {converterFrom,
    converterFromQuantity,
    setConverterTypeFrom,
    setConverterQuantityFrom,
    converterTo,
    converterToQuantity,
    setConverterTypeTo,
    setConverterQuantityTo,
    date,
    currentDate,
    rates,
    historyConvertations,
    setNewConvertationToHistory,
    onLoadData,
    isDataLoaded,
    deleteHistory,
    setNewDate} = props;

  const inputFrom = document.querySelector(`#money-have`);
  const inputTo = document.querySelector(`#money-want`);

  const handleMoneyTypeFromClick = (money, closeSelect) => (evt) => {
    evt.preventDefault();
    setConverterTypeFrom(money);
    setConverterQuantityFrom(``);
    setConverterQuantityTo(``);

    closeSelect();
  };

  const handleMoneyTypeToClick = (money, closeSelect) => (evt) => {
    evt.preventDefault();
    setConverterTypeTo(money);
    setConverterQuantityFrom(``);
    setConverterQuantityTo(``);

    closeSelect();
  };

  const handleConvertationSaveClick = (moneyFrom, moneyFromQuantity, moneyTo, moneyToQuantity, convertationDate) => (evt) => {
    evt.preventDefault();

    const newConvertation = {
      converterFrom: moneyFrom,
      converterFromQuantity: moneyFromQuantity,
      converterTo: moneyTo,
      converterToQuantity: moneyToQuantity,
      date: dayjs(convertationDate).format(`DD.MM.YYYY`)
    };

    setNewConvertationToHistory(newConvertation);
  };

  const handleMoneyHaveChange = (quantity) => (evt) => {
    evt.preventDefault();
    quantity = evt.target.value;
    setConverterQuantityFrom(quantity);

    inputTo.value = Number(calculateRates(converterFrom, converterTo, inputFrom.value, rates)).toFixed(2);
    setConverterQuantityTo(inputTo.value);
  };

  const handleMoneyWantChange = (quantity) => (evt) => {
    evt.preventDefault();
    quantity = evt.target.value;
    setConverterQuantityTo(quantity);

    inputFrom.value = Number(calculateRates(converterTo, converterFrom, inputTo.value, rates)).toFixed(2);
    setConverterQuantityFrom(inputFrom.value);
  };

  const handleDeleteHistoryCkick = (list) => (evt) => {
    evt.preventDefault();

    deleteHistory(list);
  };

  const handleDateChange = (newDate) => (evt) => {
    newDate = evt.target.value;
    setNewDate(newDate);
  };

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return (
    <main className="page__main">
      <section className="credit">
        <div className="credit__info">
          <h1 className="credit__title">???????? ????????</h1>
          <p className="credit__slogan">?????????????? ???? ?????????? ????????????</p>
          <a href="#" className="credit__button button button--credit">???????????????????? ????????????</a>
        </div>
      </section>
      <Converter
        converterFrom={converterFrom}
        converterTo={converterTo}
        converterFromQuantity={converterFromQuantity}
        converterToQuantity={converterToQuantity}
        date={date}
        currentDate={currentDate}
        onMoneyTypeFromClick={handleMoneyTypeFromClick}
        onMoneyTypeToClick={handleMoneyTypeToClick}
        onSaveConvertationClick={handleConvertationSaveClick}
        onMoneyHaveInput={handleMoneyHaveChange}
        onMoneyWantInput={handleMoneyWantChange}
        onDateInputChange={handleDateChange}
      />
      <History
        historyConvertations={historyConvertations}
        onDeleteHistoryClick={handleDeleteHistoryCkick}/>
    </main>
  );
};

Main.propTypes = {
  converterFrom: PropTypes.string.isRequired,
  converterTo: PropTypes.string.isRequired,
  converterFromQuantity: PropTypes.string.isRequired,
  converterToQuantity: PropTypes.string.isRequired,
  setConverterTypeFrom: PropTypes.func.isRequired,
  setConverterQuantityFrom: PropTypes.func.isRequired,
  setConverterTypeTo: PropTypes.func.isRequired,
  setConverterQuantityTo: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired,
  rates: PropTypes.shape({
    USD: PropTypes.number,
    EUR: PropTypes.number,
    GBP: PropTypes.number,
    CNY: PropTypes.number,
  }).isRequired,
  historyConvertations: PropTypes.arrayOf(PropTypes.shape({
    converterFrom: PropTypes.string.isRequired,
    converterFromQuantity: PropTypes.string.isRequired,
    converterTo: PropTypes.string.isRequired,
    converterToQuantity: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  setNewConvertationToHistory: PropTypes.func.isRequired,
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  deleteHistory: PropTypes.func.isRequired,
  setNewDate: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    converterFrom: state.converterFrom,
    converterTo: state.converterTo,
    converterFromQuantity: state.converterFromQuantity,
    converterToQuantity: state.converterToQuantity,
    date: state.date,
    currentDate: state.currentDate,
    rates: state.rates,
    historyConvertations: state.historyConvertations,
    isDataLoaded: state.isDataLoaded
  };
};

const mapDispatchToProps = (dispatch) => ({
  setConverterTypeFrom(converterFrom) {
    dispatch(ActionCreator.setConverterTypeFrom(converterFrom));
  },
  setConverterQuantityFrom(converterFromQuantity) {
    dispatch(ActionCreator.setConverterQuantityFrom(converterFromQuantity));
  },
  setConverterQuantityTo(converterToQuantity) {
    dispatch(ActionCreator.setConverterQuantityTo(converterToQuantity));
  },
  setConverterTypeTo(converterTo) {
    dispatch(ActionCreator.setConverterTypeTo(converterTo));
  },
  setNewConvertationToHistory(historyConvertations) {
    dispatch(ActionCreator.setNewConvertationToHistory(historyConvertations));
  },
  onLoadData() {
    dispatch(fetchData());
  },
  deleteHistory(historyConvertations) {
    dispatch(ActionCreator.deleteHistory(historyConvertations));
  },
  setNewDate(date) {
    dispatch(ActionCreator.setNewDate(date));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
