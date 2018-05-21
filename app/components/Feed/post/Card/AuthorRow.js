import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Avatar from './Avatar';

class AuthorRow extends React.Component {
  state = {
    author: '',
  }

  parseAuthorName() {
    const { email, name } = this.props;

    if (name !== null) {
      this.setState({ author: name })
    } else {
      this.setState({ author: email })
    }
  }

  render() {
    const { author } = this.state;

    return (
      <View style={styles.container}>
        <Avatar />
        <Text style={styles.text}>
          {this.parseAuthorName()}
        </Text>

        <TouchableOpacity
          style={styles.rightText}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#eee',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    marginHorizontal: 6,
  },
  rightText: {
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default AuthorRow;
