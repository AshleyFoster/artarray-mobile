export default (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_SPINNER':
      return { ...state };
    case 'SIGNUP_FAILED':
      return { ...state };
    case 'SIGNUP_SUCCESS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
