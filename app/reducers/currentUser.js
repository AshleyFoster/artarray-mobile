const defaultState = {}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_SPINNER':
      return { ...state };
    case 'LOGIN_SUCCESS':
      return {
        ...action.payload,
      };
    case 'LOGOUT':
      return { ...state };
    default:
      return state;
  }
};
