import URL from './rootUrl';
import RNFS from 'react-native-fs';

export const fetchPosts = () => {
  return (dispatch, getState) => {
    const currentUser = getState().currentUser

    dispatch({
      type: 'LOAD_SPINNER'
    });

    return fetch(URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token,
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: data
          });

          return {data};
        });
      } else {
        dispatch({
          type: 'FETCH_FAILED'
        })

        return Promise.reject('error')
      };
    }).catch(e => {
      console.warn(e)
      return Promise.reject(e)
    })
  };
};

export const createPost = (title, description, imageData) => {
  return (dispatch, getState) => {
    const currentUser = getState().currentUser

    dispatch({
      type: 'LOAD_SPINNER'
    });

    return fetch(URL + 'posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          image: imageData.data,
        }
      })
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch({
            type: 'POST_CREATE_SUCCESS',
            payload: data
          });
        });
      } else {
        dispatch({
          type: 'POST_CREATE_FAILED'
        })

        return Promise.reject('error')
      };
    }).catch(e => {
      return Promise.reject(e)
    })
  };
};
