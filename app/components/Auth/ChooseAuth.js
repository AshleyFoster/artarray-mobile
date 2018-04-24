import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'react-native-button';

class ChooseAuth extends React.Component {
  render () {
    const { isLoginPage, isRegisterPage } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>ArtArray</Text>

        <Button
          style={styles.submit}
          onPress={isLoginPage}
        >
          Login
        </Button>

        <Button
          style={styles.submit}
          onPress={isRegisterPage}
        >
          Register
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 50,
    padding: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  submit: {
    backgroundColor: '#000099',
    borderColor: '#000099',
    borderRadius: 1,
    borderWidth: 1,
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
    padding: 8,
  },
});

export default ChooseAuth;
