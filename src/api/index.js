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

const request = (method, url, body) => {
  var payload = {
    method: method || 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: getHeaders()
  };
  if (body) {
    payload.body = JSON.stringify(body);
  }
  return new Promise((resolve, reject) => {
    fetch(url, payload)
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

const signup = (emailAddress, password, username) => {
  return request('POST', getEndpoint('signup'), {
    emailAddress,
    password,
    username
  });
};

const login = (emailAddress, password) => {
  return request('POST', getEndpoint('login'), {
    emailAddress,
    password
  });
};

const getAccounts = () => {
  return request('GET', getEndpoint('accounts'));
};

const getAccount = (id) => {
  return request('GET', getEndpoint(`accounts/${id}`));
};

const getLogs = (id) => {
  return request('GET', getEndpoint(`logs`));
};

const updateAccount = (id, values) => {
  return request('PUT', getEndpoint(`accounts/${id}`), values);
};

const deleteAccount = (id) => {
  return request('DELETE', getEndpoint(`accounts/${id}`));
};

const logout = (id) => {
  return request('POST', getEndpoint(`logout`));
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
