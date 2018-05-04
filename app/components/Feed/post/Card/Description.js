import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';

import ActionIconBar from './actionIcons';

class Description extends React.Component {
  render() {
    const { postId, title, description, time, likesCount, liked } = this.props;
    const formatedDate = moment(time).startOf('hour').fromNow();

    return (
      <View style={styles.container}>
        <ActionIconBar postId={postId} likesCount={likesCount} liked={liked} />

        <Text style={[styles.text, styles.bold]}>{title}</Text>

        <Text style={styles.text}>{description}</Text>

        <TouchableOpacity
          style={styles.text}
        >
          <Text style={[styles.text, styles.light]}>View all 10 comments</Text>
        </TouchableOpacity>

        <Text style={[styles.text, styles.light]}>{formatedDate}</Text>
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
    fontSize: 15,
  },
  light: {
    color: '#aaa',
  },
});

export default Description;
