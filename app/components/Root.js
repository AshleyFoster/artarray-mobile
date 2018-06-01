import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation'

import Auth from './Auth'
import Feed from './Feed'
import CreatePost from './Feed/post/Form/index'

const AuthStack = createStackNavigator({
  Auth: {
    screen: Auth
  },
});

const FeedStack = createStackNavigator({
  Home: { screen: Feed },
  CreatePost: { screen: CreatePost },
});


class Root extends React.Component {
  render () {
    const { currentUser } = this.props

    if (currentUser && currentUser.authentication_token) {
      return <FeedStack />
    } else {
      return <AuthStack/>
    }
  }
}

const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(Root);

