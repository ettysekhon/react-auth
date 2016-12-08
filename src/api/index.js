import fetch from 'isomorphic-fetch';
import { loadState } from '../utils/localStorage';

const getEndpoint = (path) => {
  const test = true;
  const host = test === true
    ? 'http://localhost:8080/api/'
    : 'http://eric.kicks-ass.org/web-api/';
  return `${host}${path}`;
};

const getHeaders = () => {
  const persistedState = loadState();
  const token = persistedState && persistedState.app && persistedState.app.token;
  const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `Bearer ${token}`
  });
  console.log('headers', headers);
  return headers;
};

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const getJson = (response) => {
  return response.text().then((text) => {
    if (text === '' || text === 'OK' || typeof text === 'undefined') {
      return {};
    }
    return JSON.parse(text);
  });
};

const getPayload = (json) => {
  return typeof json.payload === 'undefined'
    ? json
    : json.payload;
};

/* eslint-disable no-unused-vars */
const get = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: getHeaders()
    })
    .then(status)
    .then(getJson)
    .then(getPayload)
    .then((payload) => {
      resolve(payload);
    })
    .catch((err) => {
      console.log('API error', err);
      reject(err);
    });
  });
};
/* eslint-enable no-unused-vars */

const post = (url, body) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: getHeaders(),
      body: JSON.stringify(body)
    })
    .then(status)
    .then(getJson)
    .then(getPayload)
    .then((payload) => {
      resolve(payload);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

const signup = (emailAddress, username, password) => {
  return post(getEndpoint('signup'), {
    emailAddress,
    username,
    password
  });
};

const login = (username, password) => {
  return post(getEndpoint('login'), {
    username,
    password
  });
};

const getAccounts = () => {
  return get(getEndpoint('accounts'));
};

const getAccount = (id) => {
  return get(getEndpoint(`accounts/${id}`));
};

const getLogs = (id) => {
  return get(getEndpoint(`logs`));
};

const updateAccount = (id) => {
  return get(getEndpoint(`accounts/${id}`));
};

const deleteAccount = (id) => {
  return get(getEndpoint(`accounts/${id}`));
};

const logout = (id) => {
  return get(getEndpoint(`accounts/${id}`));
};

export default {
  getLogs,
  getAccounts,
  getAccount,
  updateAccount,
  deleteAccount,
  login,
  logout,
  signup
};
