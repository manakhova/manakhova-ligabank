import React from 'react';
// import PropTypes from 'prop-types';
import Header from './header';
import Main from './main';
import Footer from './footer';

import '../../node_modules/flatpickr/dist/flatpickr.min.css';

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
};

export default App;
