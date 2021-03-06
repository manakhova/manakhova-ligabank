import React from 'react';
import PropTypes from 'prop-types';
import {MoneyType, WEEK_AGO} from '../const';
import dayjs from 'dayjs';

const Converter = (props) => {
  const {onMoneyTypeFromClick,
    onMoneyHaveInput,
    onMoneyWantInput,
    onMoneyTypeToClick,
    converterFrom,
    converterTo,
    converterFromQuantity,
    converterToQuantity,
    date,
    currentDate,
    onSaveConvertationClick,
    onDateInputChange} = props;

  const formattedDate = dayjs(date).format(`YYYY-MM-DD`);
  const formattedCurrentdDate = dayjs(currentDate).format(`YYYY-MM-DD`);

  const weekAgoDate = Date.now() - WEEK_AGO;
  const formattedMinDate = dayjs(new Date(weekAgoDate).toISOString()).format(`YYYY-MM-DD`);

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
      <div className="converter__wrapper">
        <h2 className="converter__title">Конвертер валют</h2>
        <a className="converter__link" href="https://www.cbr-xml-daily.ru/">Курсы валют, API</a>
      </div>
      <div className="converter__container">
        <form className="converter__calc-form" method="post" action="#">
          <div className="converter__calc-form-item converter__have">
            <label className="converter__have-title" htmlFor="money-have">У меня есть</label>
            <div className="converter__wrapper">
              <input className="converter__input converter__have-input" type="text" name="money-have" value={`${converterFromQuantity}`} id="money-have" onInput={onMoneyHaveInput(converterFromQuantity)} required/>
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
            <label className="converter__want-title" htmlFor="money-want">Хочу приобрести</label>
            <div className="converter__wrapper">
              <input className="converter__input converter__want-input" type="text" name="money-want" min="0" id="money-want" value={`${converterToQuantity}`} onInput={onMoneyWantInput(converterToQuantity)} required/>
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
                <span className="converter__calendar-toggle"></span>
                <input className="converter__calendar-date" type="date" id="date" min={formattedMinDate} max={formattedCurrentdDate} name="date" value={formattedDate} onChange={onDateInputChange(date)}/>
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
  converterFromQuantity: PropTypes.string.isRequired,
  converterToQuantity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired,
  onMoneyTypeFromClick: PropTypes.func.isRequired,
  onMoneyTypeToClick: PropTypes.func.isRequired,
  onSaveConvertationClick: PropTypes.func.isRequired,
  onMoneyHaveInput: PropTypes.func.isRequired,
  onMoneyWantInput: PropTypes.func.isRequired,
  onDateInputChange: PropTypes.func.isRequired,
};

export default Converter;
