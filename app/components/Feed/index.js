import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import FooterNavigation from './Navigation/Footer';
import Form from './post/Form';
import Posts from './post';
import { logoutUser } from '../../actions';
import { fetchPosts, createPost } from '../../actions/posts';


class Feed extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ArtArray',
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
        onPress={() => console.log('Logout')}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    )
  })

  state = {
    errors: false,
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { error } = this.state;
    const { posts } = this.props;

    return (
      <Text>yo</Text>
    )
  }
}

const mapStateToProps = state => ({
  posts: Object.values(state.posts.data),
});

export default connect(mapStateToProps)(Feed);
