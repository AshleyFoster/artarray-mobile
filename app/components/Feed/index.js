import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/';

class Feed extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>

        <Button
          onPress={() => this.props.logoutUser()}
        >
          Logout
        </Button>
      </View>
    );
  }
}

export default connect(null, {logoutUser})(Feed);
