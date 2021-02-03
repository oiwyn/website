import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ScrollToTop from 'react-router-scroll-top'
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';

window.React = React;
ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script src="https://kit.fontawesome.com/bc08721d7a.js" crossorigin="anonymous"></script>
    </Helmet>
    <BrowserRouter>
      <ScrollToTop>
        <App/>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
