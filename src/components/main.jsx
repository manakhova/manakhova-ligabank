import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import Converter from './converter.jsx';
import History from './history.jsx';

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
    historyConvertations,
    setNewConvertationToHistory} = props;

  const handleMoneyTypeFromClick = (money, closeSelect) => (evt) => {
    evt.preventDefault();
    setConverterTypeFrom(money);

    closeSelect();
  };

  const handleMoneyTypeToClick = (money, closeSelect) => (evt) => {
    evt.preventDefault();
    setConverterTypeTo(money);

    closeSelect();
  };

  const handleConvertationSaveClick = (moneyFrom, moneyFromQuantity, moneyTo, moneyToQuantity, convertationDate) => (evt) => {
    evt.preventDefault();

    const newConvertation = {
      converterFrom: moneyFrom,
      converterFromQuantity: moneyFromQuantity,
      converterTo: moneyTo,
      converterToQuantity: moneyToQuantity,
      date: convertationDate
    };

    setNewConvertationToHistory(newConvertation);
  };

  const handleMoneyHaveChange = (quantity) => (evt) => {
    quantity = Number(evt.target.value);
    setConverterQuantityFrom(quantity);
  };

  const handleMoneyWantChange = (quantity) => (evt) => {
    quantity = Number(evt.target.value);
    setConverterQuantityTo(quantity);
  };

  return (
    <main className="page__main">
      <section className="credit">
        <div className="credit__info">
          <h1 className="credit__title">Лига Банк</h1>
          <p className="credit__slogan">Кредиты на любой случай</p>
          <a href="#" className="credit__button button button--credit">Рассчитать кредит</a>
        </div>
      </section>
      <Converter
        converterFrom={converterFrom}
        converterTo={converterTo}
        converterFromQuantity={converterFromQuantity}
        converterToQuantity={converterToQuantity}
        date={date}
        onMoneyTypeFromClick={handleMoneyTypeFromClick}
        onMoneyTypeToClick={handleMoneyTypeToClick}
        onSaveConvertationClick={handleConvertationSaveClick}
        onMoneyHaveChange={handleMoneyHaveChange}
        onMoneyWantChange={handleMoneyWantChange}
      />
      <History
        historyConvertations={historyConvertations}/>
    </main>
  );
};

Main.propTypes = {
  converterFrom: PropTypes.string.isRequired,
  converterTo: PropTypes.string.isRequired,
  converterFromQuantity: PropTypes.number.isRequired,
  converterToQuantity: PropTypes.number.isRequired,
  setConverterTypeFrom: PropTypes.func.isRequired,
  setConverterQuantityFrom: PropTypes.func.isRequired,
  setConverterTypeTo: PropTypes.func.isRequired,
  setConverterQuantityTo: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  historyConvertations: PropTypes.array.isRequired,
  setNewConvertationToHistory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    converterFrom: state.converterFrom,
    converterTo: state.converterTo,
    converterFromQuantity: state.converterFromQuantity,
    converterToQuantity: state.converterToQuantity,
    date: state.date,
    historyConvertations: state.historyConvertations
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
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
