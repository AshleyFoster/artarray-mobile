import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Avatar extends React.Component {
  render() {
    const style = {
      backgroundColor: '#000099',
      borderRadius: 35 / 2,
      height: 35,
      width: 35,
    }

    return (
      <View style={[styles.container, style]}>
        <Text style={styles.text}>AF</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Avatar
