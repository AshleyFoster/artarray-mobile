import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { fetchPosts } from '../../../actions/posts';

class FooterNavigation extends React.Component {
  render() {
    const { fetchPosts } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.leftText}
          onPress={fetchPosts}
        >
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.text}
        >
          <Text>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rightText}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: StyleSheet.hairlineWidth,
    height: 50,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    marginTop: 10,
  },
  leftText: {
    bottom: 0,
    justifyContent: 'center',
    left: 20,
    position: 'absolute',
    top: 0,
  },
  text: {
    justifyContent: 'center',
  },
  rightText: {
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    top: 0,
  },
});

mapDispatchToProps = {
  fetchPosts
}

export default connect(undefined, mapDispatchToProps)(FooterNavigation);
