const defaultState = {
  data: [],
  errors: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_SPINNER':
      return { ...state };
    case 'FETCH_FAILED':
      return { ...state };
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload.posts, errors: false };
    case 'POST_CREATE_FAILED':
      return { ...state };
    case 'POST_CREATE_SUCCESS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
