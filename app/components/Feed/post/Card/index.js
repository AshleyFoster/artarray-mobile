import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
} from 'react-native';

import AuthorRow from './AuthorRow';
import Description from './Description';

class Card extends React.Component {
  state = {
    loading: true,
  }

  handleLoad = () => {
    this.setState({ loading: false });
  }

  render() {
    const {
      authorEmail,
      authorName,
      title,
      description,
      image,
      time
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
            source={{uri: 'http://192.168.1.67:3000/' + image + '.jpeg'}}
            onLoad={this.handleLoad}
          />
        </View>

        <Description title={title} description={description} time={time} />
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
