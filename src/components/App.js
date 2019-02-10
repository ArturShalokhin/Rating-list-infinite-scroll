import React, { Component } from 'react';

import Rating from './Rating';
import store from '../store';
import { initialRating } from '../store/modules/rating/action';

class App extends Component {
  componentDidMount () {
    store.dispatch(initialRating());
  }

  render () {
    return <Rating />
  }
}

export default App;
