import _ from 'lodash'

const defaultState = {
  data: {},
  errors: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_SPINNER':
      return { ...state };
    case 'FETCH_FAILED':
      return { ...state };
    case 'FETCH_SUCCESS':
      const posts = _.keyBy(action.payload.posts, "id")
      return { ...state, data: posts, errors: false };
    case 'POST_CREATE_FAILED':
      return { ...state };
    case 'POST_CREATE_SUCCESS':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload
        }
      };
    case 'POST_LIKE_FAILED':
      return { ...state };
    case 'POST_LIKE_SUCCESS':
      const originalPost = state.data[action.payload]

      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            ...originalPost,
            likes_count: originalPost.likes_count + 1,
            liked_by_user: true
          }
        }
      }
    case 'POST_UNLIKE_FAILED':
      return { ...state };
    case 'POST_UNLIKE_SUCCESS':
      const x = state.data[action.payload]

      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            ...x,
            likes_count: x.likes_count - 1,
            liked_by_user: false
          }
        }
      }
    default:
      return state;
  }
};
