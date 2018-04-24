import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavigationBar from './Navigation';
import FooterNavigation from './Navigation/Footer';
import Form from './post/Form';
import Posts from './post';
import { fetchPosts, createPost } from '../../actions/posts';

const ADD_POST_PAGE = 'Add Post'

class Feed extends React.Component {
  state = {
    actionPage: undefined,
    errors: false,
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts()).catch(() => {
      this.setState({ errors: true })
    });
  }

  get isAddPostPage() {
    this.state.actionPage === ADD_POST_PAGE
  }

  setActionPageToAddPost = () => {
    this.setState({ actionPage: ADD_POST_PAGE })
  }

  setActionPageToFetchPosts = () => {
    this.setState({ actionPage: undefined })
  }

  onSubmit = ({ title, description, imageData }) => {
    this.props.dispatch(createPost(title, description, imageData)).catch(() => {
      console.log('Error Creating Post')
    });
  }

  render() {
    const { actionPage, error } = this.state;
    const { posts } = this.props;

    if (actionPage === undefined) {
      return (
        <View style={{flex: 1}}>
          <NavigationBar
            createPost={this.setActionPageToAddPost}
          />

          <Posts
            posts={posts}
            error={error}
          />

          <FooterNavigation />
        </View>
      );
    } else {
      return (
        <View style={{flex: 1}}>
          <Form
            actionPage={this.state.actionPage}
            onSubmit={this.onSubmit}
          />

          <FooterNavigation
            fetchPosts={this.setActionPageToFetchPosts}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  posts: state.posts.data,
});

export default connect(mapStateToProps)(Feed);
