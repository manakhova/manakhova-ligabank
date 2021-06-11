import React from 'react';
import Converter from './converter.jsx';
import History from './history.jsx';

const Main = () => {
  return (
    <main className="page__main">
      <section className="credit">
        <div className="credit__info">
          <h1 className="credit__title">Лига Банк</h1>
          <p className="credit__slogan">Кредиты на любой случай</p>
          <a href="#" className="credit__button button button--credit">Рассчитать кредит</a>
        </div>
      </section>
      <Converter/>
      <History/>
    </main>
  );
};

export default Main;
