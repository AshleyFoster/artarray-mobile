import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from 'react-native-button';

class Form extends React.Component {
  state = {
    email: '',
    password: '',
  }

  updateEmail = email => this.setState({ email })
  updatePassword = password => this.setState({ password })

  onSubmit = () => {
    const { email, password } = this.state
    const { onSubmit } = this.props

    onSubmit({ email, password })
  }

  render() {
    const { authPage, email, password } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.pageText}>{authPage}</Text>

        <TextInput
          placeholder='Email'
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          style={styles.textInput}
          keyboardType='email-address'
          value={email}
          onChangeText={this.updateEmail}
        />
        <TextInput
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          style={styles.textInput}
          value={password}
          onChangeText={this.updatePassword}
        />

        <Button style={styles.submit}
          onPress={this.onSubmit}
        >
          {this.props.authPage}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
  },
  pageText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#000099',
    margin: 10,
    padding: 8,
    textAlign: 'center',
  },
  submit: {
    backgroundColor: '#000099',
    borderColor: '#000099',
    borderRadius: 1,
    borderWidth: 1,
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
    padding: 8,
  },
});

export default Form;
