import URL from './rootUrl';

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });

    return fetch(URL + 'sign_in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        }
      })
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: data
          });
        });
      } else {
        dispatch({
          type: 'LOGIN_FAILED'
        })

        return Promise.reject('error')
      };
    }).catch(e => {
      console.warn(e)
      return Promise.reject(e)
    })
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    fetch(URL + 'sign_out', {
      method: 'DELETE'
    }).then((response) => {
      dispatch({
        type: 'LOGOUT'
      });
    });
  }
};

export const setCurrentUser = (data) => {
  return (dispatch) => {
    return request('/users').then((data) => {
      dispatch({ type: LOAD_USER, payload: data.user });
    });
  }
};

export const signupUser = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });

    return fetch(URL + 'signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          'email': email,
          'password': password,
        }
      })
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch({
            type: 'SIGNUP_SUCCESS',
            payload: data
          });
        });
      } else {
        dispatch({
          type: 'SIGNUP_FAILED'
        })

        return Promise.reject('error')
      };
    }).catch(e => {
      console.warn(e)
      return Promise.reject(e)
    });
  };
};
