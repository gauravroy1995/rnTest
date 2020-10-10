import React, {PureComponent} from 'react';

import {Alert, ActivityIndicator, View, Text} from 'react-native';
import App from './App';

import {Provider} from 'react-redux';
import {GlobalToast} from './app/components/toast';
import {createStore, applyMiddleware} from 'redux';

import combinedReducers from './app/redux/reducers/combineReducer';

const store = createStore(combinedReducers);
export default class AppContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <App />
        <GlobalToast />
      </Provider>
    );
  }
}

AppContainer.propTypes = {};
