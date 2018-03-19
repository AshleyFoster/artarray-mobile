import React from 'react';
import { Text, View } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChooseAuth from './ChooseAuth';
import Form from './Form';
import { loginUser, signupUser } from '../../actions/';

const LOGIN_PAGE = "Login"
const REGISTER_PAGE = "Register"

class Auth extends React.Component {
  state = {
    authPage: undefined,
    loginError: false,
    registerError: false,
  }

  get isLoginPage() {
    this.state.authPage === LOGIN_PAGE
  }

  get isRegisterPage() {
    this.state.authPage === REGISTER_PAGE
  }

  setAuthPageToLogin = () => {
    this.setState({ authPage: LOGIN_PAGE })
  }

  setAuthPageToRegister = () => {
    this.setState({ authPage: REGISTER_PAGE })
  }

  onSubmit = ({ email, password }) => {
    const { authPage } = this.state;
    const { onLogin, onSignup } = this.props;

    if (authPage === LOGIN_PAGE) {
      onLogin(email, password).then(e => console.log(e)).catch(() => {
        console.log('Login Error')
        this.setState({ loginError: true })
      });
    } else {
      onSignup(email, password).then(e => console.log(e)).catch(() => {
        console.log('Registration Error')
        this.setState({ registerError: true })
      });
    }
  }

  render() {
    const { authPage, loginError, registerError } = this.state;

    if (authPage) {
      return (
        <View>
          {loginError && <Text>Email or Password wrong</Text>}
          {registerError && <Text>Unable to create User</Text>}
          <Form
            authPage={authPage}
            isLogin={this.setAuthPageToLogin}
            isRegister={this.setAuthPageToRegister}
            onSubmit={this.onSubmit}
          />
        </View>
      );
    } else {
      return (
        <ChooseAuth
          authPage={this.authPage}
          isLoginPage={this.setAuthPageToLogin}
          isRegisterPage={this.setAuthPageToRegister}
        />
      );
    }
  }
}

const mapDispatchToProps = {
  onLogin: loginUser,
  onSignup: signupUser
};

export default connect(undefined, mapDispatchToProps)(Auth);
