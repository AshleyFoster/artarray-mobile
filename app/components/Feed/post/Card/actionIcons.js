import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { likePost, unlikePost } from '../../../../actions/posts';

class actionIconBar extends React.Component {
  handleLike = (postId) => {
    const { liked } = this.props;

    if (this.props.liked) {
      this.props.unlikePost(postId)
    } else {
      this.props.likePost(postId)
    }
  }

  formatLikesCount() {
    const { likesCount } = this.props;

    if (likesCount > 1) {
      return (`${likesCount} likes`);
    } else if (likesCount == 1) {
      return (`${likesCount} like`);
    } else {
      return ('Be the first to like this!');
    }
  }

  render () {
    const { postId, liked } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.leftText}>
          {this.formatLikesCount()}
        </Text>

        <TouchableOpacity
          style={styles.rightText}
          onPress={() => this.handleLike(postId)}
        >
          <Icon
            name={this.props.liked ? 'heart' : 'heart-o'}
            style='regular'
            type='font-awesome'
            color='#000099'
          />
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
    flex: 1,
    justifyContent: 'center',
  },
  rightText: {
    justifyContent: 'center',
    marginRight: 10,
  },
});

mapDispatchToProps = {
  likePost,
  unlikePost,
}

export default connect(null, mapDispatchToProps)(actionIconBar);
