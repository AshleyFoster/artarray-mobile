import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import FooterNavigation from './Navigation/Footer';
import Posts from './post';
import { logoutUser } from '../../actions';
import { fetchPosts, createPost } from '../../actions/posts';


class Feed extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: 'ArtArray',
      headerLeft: (
        <TouchableOpacity
        style={{marginLeft: 20}}
        onPress={() => navigation.navigate('CreatePost')}
        >
        <Text>Add</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
        style={{marginRight: 20}}
        onPress={() => navigation.navigate('Logout')}
        >
        <Text>Logout</Text>
        </TouchableOpacity>
      ),
    };
  };

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  state = {
    errors: false,
  }

  render() {
    const { error } = this.state;
    const { posts } = this.props;

    return (
      <View style={{flex: 1}}>
        <Posts
          posts={posts}
          error={error}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.values(state.posts.data),
});

export default connect(mapStateToProps)(Feed);
