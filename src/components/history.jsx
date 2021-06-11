import React from 'react';

const History = () => {
  return (
    <section className="history">
      <div className="history__container">
        <h3 className="history__title">История конвертаций</h3>
        <ul className="history__list">
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1003 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1030 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1003 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1030 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1003 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1030 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1030 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1030 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1000 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
          <li className="history__item">
            <span className="history__date">01.06.2021</span>
            <span className="history__convertation">
              <span id="from">1000 RUB</span>
              <span id="to">13,1234 USD</span>
            </span>
          </li>
        </ul>
        <button className="history__button button">Очистить историю</button>
      </div>
    </section>
  );
};

export default History;
