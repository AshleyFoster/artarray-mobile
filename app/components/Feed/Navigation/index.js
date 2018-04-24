import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/';

class NavigationBar extends React.Component {

  render() {
    const { createPost } = this.props;

    return (
      <View style={styles.container}>
      <TouchableOpacity
      style={styles.leftText}
      onPress={createPost}
      >
      <Text>Add</Text>
      </TouchableOpacity>
      <Text style={styles.title}>ArtArray</Text>
      <TouchableOpacity
      style={styles.rightText}
      onPress={() => this.props.logoutUser()}
      >
      <Text>Logout</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 60,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    marginTop: 10,
  },
  leftText: {
    bottom: 0,
    justifyContent: 'center',
    left: 20,
    position: 'absolute',
    top: 10,
  },
  rightText: {
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    top: 10,
  },
});

mapDispatchToProps = {
  logoutUser,
}
export default connect(null, mapDispatchToProps)(NavigationBar);
