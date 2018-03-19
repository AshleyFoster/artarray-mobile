import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Root from './app/components/Root';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Root />
        </View>
      </Provider>
    );
  }
}
