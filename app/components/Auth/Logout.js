import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from './../../actions';

class Logout extends React.Component {
  _handleSubmit = () => {
    this.props.logoutUser();
  }

  render () {
    const navigation = this.props.navigation;

    return (
      <View style={{justifyContent: 'center', marginTop: 200}}>
        <TouchableOpacity onPress={this._handleSubmit}>
          <Text style={{color: '#000099', textAlign: 'center', fontSize: 26}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  logoutUser,
}

export default connect(undefined, mapDispatchToProps)(Logout);
