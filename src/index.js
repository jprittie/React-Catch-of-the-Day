import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        { /*Match could have two tags or one self-closing one */}
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeID" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>

  )

}

render(<Root/>, document.querySelector('#main'));
