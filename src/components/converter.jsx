import React from 'react';

const Converter = () => {
  return (
    <section className="converter">
      <h2 className="converter__title">Конвертер валют</h2>
      <div className="converter__container">
        <form className="converter__calc-form" method="post" action="#">
          <div className="converter__calc-form-item converter__have">
            <h3 className="converter__have-title">У меня есть</h3>
            <div className="converter__wrapper">
              <label>
                <input className="converter__input converter__have-input" type="number" name="money-have" id="money-have"/>
              </label>
              <div className="converter__type converter__have-type">
                  RUB
              </div>
            </div>
            <ul className="converter__options converter__have-options visually-hidden">
              <li className="converter__have-option converter__have-option--active">RUB</li>
              <li className="converter__have-option">USD</li>
              <li className="converter__have-option">EUR</li>
              <li className="converter__have-option">GBR</li>
              <li className="converter__have-option">CNY</li>
            </ul>
          </div>
          <div className="converter__calc-form-item converter__want">
            <h3 className="converter__want-title">Хочу приобрести</h3>
            <div className="converter__wrapper">
              <label>
                <input className="converter__input converter__want-input" type="number" name="money-want" id="money-want"/>
              </label>
              <div className="converter__type converter__want-type">
                  USD
              </div>
            </div>
            <ul className="converter__options converter__want-options visually-hidden">
              <li className="converter__want-option">RUB</li>
              <li className="converter__want-option converter__want-option--active">USD</li>
              <li className="converter__want-option">EUR</li>
              <li className="converter__want-option">GBR</li>
              <li className="converter__want-option">CNY</li>
            </ul>
          </div>
          <div className="converter__calc-form-item converter__container">
            <div className="converter__calendar">
              <label>
                <input className="converter__calendar-date" type="text" id="date" name="date"/>
              </label>
            </div>
            <button className="converter__calendar-button button button--converter" type="button">Сохранить результат</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Converter;
