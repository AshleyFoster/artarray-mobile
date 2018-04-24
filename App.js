import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Root from './app/components/Root';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Root />
        </View>
      </Provider>
    );
  }
}
