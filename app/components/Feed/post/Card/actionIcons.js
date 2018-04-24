import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';

class actionIconBar extends React.Component {
   render () {
     const { time } = this.props;
     const formatedDate = moment(time).startOf('hour').fromNow();

     return (
      <View style={styles.container}>
        <Text style={styles.leftText}>
          {formatedDate}
        </Text>

        <TouchableOpacity
          style={[styles.rightText, styles.rightPadding]}
        >
          <Text>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rightText}
        >
          <Text>Comment</Text>
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
    flexDirection: 'row',
    height: 50,
    marginBottom: 10,
  },
  leftText: {
    color: '#aaa',
    flex: 1,
    justifyContent: 'center',
  },
  rightText: {
    justifyContent: 'center',
  },
  rightPadding: {
    paddingRight: 10,
  },
});

export default actionIconBar;

