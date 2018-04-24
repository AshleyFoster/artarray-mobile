import React from 'react';
import { View } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Login from './Auth/index';
import Feed from './Feed/index';

import userActions from '../actions';

const Root = ({ currentUser }) => {
  let Component;
  if (currentUser && currentUser.authentication_token) {
    Component = <Feed />;
  } else {
    Component = <Login />
  }

  return (
    <View style={{flex: 1}}>
      {Component}
    </View>
  )
};

const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(Root);
