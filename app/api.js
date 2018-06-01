import { API_URL } from './rootUrl';

const post = (url, data, currentUser) => {
  return apiRequest("POST", url, currentUser, data)
}

const get = (url, currentUser) => {
  return apiRequest("GET", url, currentUser)
}

const destroy = (url, currentUser) => {
  return apiRequest("DELETE", url, currentUser)
}

export default {
  post,
  get,
  destroy,
}

const apiRequest = (method, url, currentUser, data) => {
  const params = {
    method,
    headers: {
      'Accept': 'application/json',
      'X-User-Email': currentUser.email,
      'X-User-Token': currentUser.authentication_token,
      'Content-Type': 'application/json',
    },
  }

  if (data) {
    params.body = JSON.stringify(data)
  }

  return fetch(`${API_URL}${url}`, params)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(response.json())
      }
    });
}
