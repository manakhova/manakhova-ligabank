import React from 'react';
import PropTypes from 'prop-types';
import {MAX_HISTORY_CONVERTATIONS} from '../const';

const History = (props) => {
  const {historyConvertations, onDeleteHistoryClick} = props;

  const maxList = (list) => {
    if (list.length > MAX_HISTORY_CONVERTATIONS) {
      return list.slice(list.length - MAX_HISTORY_CONVERTATIONS, list.length);
    }

    return list;
  };

  const renderHistoryList = (list) => {
    if (list.length > 5) {
      return <ul className="history__list" style={{gridTemplateColumns: `50% 50%`}}>
        {maxList(list).map((item, i) => <li className="history__item" key={i}>
          <span className="history__date">{item.date}</span>
          <span className="history__convertation">
            <span id="from">{item.converterFromQuantity}{item.converterFrom}</span>
            <span id="to">{item.converterToQuantity}{item.converterTo}</span>
          </span>
        </li>)}
      </ul>;
    } else {
      return <ul className="history__list">
        {maxList(list).map((item, i) => <li className="history__item" key={i}>
          <span className="history__date">{item.date}</span>
          <span className="history__convertation">
            <span id="from">{item.converterFromQuantity}{item.converterFrom}</span>
            <span id="to">{item.converterToQuantity}{item.converterTo}</span>
          </span>
        </li>)}
      </ul>;
    }
  };

  return (
    <section className="history">
      <div className="history__container">
        <h3 className="history__title">История конвертаций</h3>
        {renderHistoryList(historyConvertations)}
        <button className="history__button button" onClick={onDeleteHistoryClick(historyConvertations)}>Очистить историю</button>
      </div>
    </section>
  );
};

History.propTypes = {
  historyConvertations: PropTypes.arrayOf(PropTypes.shape({
    converterFrom: PropTypes.string.isRequired,
    converterFromQuantity: PropTypes.string.isRequired,
    converterTo: PropTypes.string.isRequired,
    converterToQuantity: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  onDeleteHistoryClick: PropTypes.func.isRequired
};

export default History;

