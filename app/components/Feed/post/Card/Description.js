import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ActionIconBar from './actionIcons';

class Description extends React.Component {
  render() {
    const { title, description, time } = this.props;

    return (
      <View style={styles.container}>
        <ActionIconBar time={time} />

        <TouchableOpacity
          style={styles.text}
        >
          <Text style={[styles.text, styles.bold]}>10 likes</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          {title}
        </Text>

        <Text style={styles.text}>
          {description}
        </Text>

        <TouchableOpacity
          style={styles.text}
        >
          <Text style={[styles.text, styles.light]}>View all 10 comments</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#eee',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    flexDirection: 'column',
    height: 200,
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
  },
  bold: {
    fontWeight: '600',
  },
  light: {
    color: '#aaa',
  },
});

export default Description;
