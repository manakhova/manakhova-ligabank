import React from 'react';
import PropTypes from 'prop-types';
// import flatpickr from 'flatpickr';
import {MoneyType} from '../const';

const Converter = (props) => {
  const {onMoneyTypeFromClick,
    onMoneyHaveChange,
    onMoneyWantChange,
    onMoneyTypeToClick,
    converterFrom,
    converterTo,
    converterFromQuantity,
    converterToQuantity,
    date,
    onSaveConvertationClick} = props;

  const handleSelectFromClick = () => {
    const optionsFrom = document.querySelector(`.converter__have-options`);
    optionsFrom.style.display = optionsFrom.style.display === `none` ? `block` : `none`;
  };

  const handleSelectToClick = () => {
    const optionsTo = document.querySelector(`.converter__want-options`);
    optionsTo.style.display = optionsTo.style.display === `none` ? `block` : `none`;
  };

  const closeSelect = () => {
    document.querySelectorAll(`.converter__options`).forEach((list) => {
      list.style.display = `none`;
    });
  };

  return (
    <section className="converter">
      <h2 className="converter__title">Конвертер валют</h2>
      <div className="converter__container">
        <form className="converter__calc-form" method="post" action="#">
          <div className="converter__calc-form-item converter__have">
            <h3 className="converter__have-title">У меня есть</h3>
            <div className="converter__wrapper">
              <label>
                <input className="converter__input converter__have-input" type="number" name="money-have" min="0" value={converterFromQuantity} id="money-have" onChange={onMoneyHaveChange(converterFromQuantity)}/>
              </label>
              <div className="converter__type converter__have-type" onClick={handleSelectFromClick}>
                {converterFrom}
              </div>
            </div>
            <ul className="converter__options converter__have-options">
              {Object.values(MoneyType).map((money, i) => (
                <li key={money + i} className="converter__have-option" onClick={onMoneyTypeFromClick(money, closeSelect)}>
                  {money}
                </li>
              ))}
            </ul>
          </div>
          <div className="converter__calc-form-item converter__want">
            <h3 className="converter__want-title">Хочу приобрести</h3>
            <div className="converter__wrapper">
              <label>
                <input className="converter__input converter__want-input" type="number" name="money-want" min="0" id="money-want" value={converterToQuantity} onChange={onMoneyWantChange(converterToQuantity)}/>
              </label>
              <div className="converter__type converter__want-type" onClick={handleSelectToClick}>
                {converterTo}
              </div>
            </div>
            <ul className="converter__options converter__want-options">
              {Object.values(MoneyType).map((money, i) => (
                <li key={money + i} className="converter__want-option" onClick={onMoneyTypeToClick(money, closeSelect)}>
                  {money}
                </li>
              ))}
            </ul>
          </div>
          <div className="converter__calc-form-item converter__container">
            <div className="converter__calendar">
              <label>
                <input className="converter__calendar-date" type="text" id="date" name="date" defaultValue={date}/>
              </label>
            </div>
            <button className="converter__calendar-button button button--converter" type="button" onClick={onSaveConvertationClick(converterFrom, converterFromQuantity, converterTo, converterToQuantity, date)}>Сохранить результат</button>
          </div>
        </form>
      </div>
    </section>
  );
};

Converter.propTypes = {
  converterFrom: PropTypes.string.isRequired,
  converterTo: PropTypes.string.isRequired,
  converterFromQuantity: PropTypes.number.isRequired,
  converterToQuantity: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  onMoneyTypeFromClick: PropTypes.func.isRequired,
  onMoneyTypeToClick: PropTypes.func.isRequired,
  onSaveConvertationClick: PropTypes.func.isRequired,
  onMoneyHaveChange: PropTypes.func.isRequired,
  onMoneyWantChange: PropTypes.func.isRequired
};

export default Converter;
