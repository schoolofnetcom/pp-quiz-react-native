import React, { Component } from 'react';
import { Provider } from 'react-redux'

import AppNav from './src/nav'
import store from './src/store'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <AppNav /> 
      </Provider>
    )
  }
}