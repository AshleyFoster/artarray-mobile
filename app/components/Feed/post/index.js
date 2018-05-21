import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

import Card from './Card';

class Posts extends React.Component {
  render() {
    const { posts, error } = this.props

    return (
      <ScrollView>
        {error && <Text>Error loading your array</Text>}
        { posts && posts.map((post, id) =>
          <Card
            key={id}
            postId={post.id}
            authorEmail={post.user.email}
            authorName={post.user.fullname}
            title={post.title}
            description={post.description}
            image={post.image_url}
            time={post.created_at}
            likesCount={post.likes_count}
            liked={post.liked_by_user}
          />
        )}
      </ScrollView>
    );
  }
}

export default Posts;
