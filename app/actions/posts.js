import API from '../api'

export const fetchPosts = () => {
  return (dispatch, getState) => {
    const currentUser = getState().currentUser

    dispatch({
      type: 'LOAD_SPINNER'
    });

    API.get('posts', currentUser).then(posts => {
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: posts
      });
    })
  }
};

export const createPost = (title, description, imageData, currentUser) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });

    const image = imageData.data
    const file_name = imageData.fileName

    API.post('posts', currentUser, {post: {title, description, image, file_name}})
      .then(post => {
        dispatch({
          type: 'POST_CREATE_SUCCESS',
          payload: data
        });
      })
  }
};

export const likePost = (postId, currentUser) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });

    API.post(`posts/${postId}/like`, currentUser).then(posts => {
      dispatch({
        type: 'POST_LIKE_SUCCESS',
        payload: postId
      });
    })
  }
};

export const unlikePost = (postId, currentUser) => {
  return (dispatch) => {

    dispatch({
      type: 'LOAD_SPINNER'
    });

    API.destroy(`posts/${postId}/like`, currentUser).then(posts => {
      dispatch({
        type: 'POST_UNLIKE_SUCCESS',
        payload: postId
      });
    })
  }
};
