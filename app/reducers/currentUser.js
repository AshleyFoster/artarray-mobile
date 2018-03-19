export default (state = { errors: false }, action) => {
  switch (action.type) {
    case 'LOAD_SPINNER':
      return { ...state };
    case 'LOGIN_SUCCESS':
      return { ...state, ...action.payload, errors: false };
    case 'LOGOUT':
      return { ...state };
    default:
      return state;
  }
};
