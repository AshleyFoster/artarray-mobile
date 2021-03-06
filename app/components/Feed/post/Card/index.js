import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
} from 'react-native';

import AuthorRow from './AuthorRow';
import Description from './Description';
import URL from '../../../../rootUrl';

class Card extends React.Component {
  state = {
    loading: true,
  }

  handleLoad = () => {
    this.setState({ loading: false });
  }

  render() {
    const {
      postId,
      authorEmail,
      authorName,
      title,
      description,
      image,
      time,
      likesCount,
      liked
    } = this.props;
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <AuthorRow email={authorEmail} name={authorName} />

        <View style={styles.image}>
          {loading && (
            <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
          )}

          <Image
            style={StyleSheet.absoluteFill}
            source={{uri: `${URL}${image}`}}
            onLoad={this.handleLoad}
          />
        </View>

        <Description
          postId={postId}
          title={title}
          description={description}
          time={time}
          likesCount={likesCount}
          liked={liked}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});

export default Card;
