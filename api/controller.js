const config = require('./config');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');

let users = [{
  id: uuid.v4(),
  emailAddress: 'eric@blackfriday.com',
  username: 'eric',
  password: 'blackfriday'
}];

const accounts = [{
  id: '10126442'
}, {
  id: '18877428'
}, {
  id: '10137727'
}, {
  id: '10133883'
}];

const findUser = (username, password) => {
  return (usr) => {
    return usr.username === username && usr.password === password;
  };
};

const findAccount = (id) => {
  return (usr) => {
    return usr.id === id;
  };
};

const user = {
  login (username, password, cb) {
    const result = users.find(findUser(username, password));
    cb(null, result);
  },
  signup (emailAddress, username, password, cb) {
    const usr = {
      id: uuid.v4(),
      emailAddress,
      username,
      password
    };
    users = users.concat([usr]);
    cb(null, usr);
  }
};

exports.login = (req, res, next) => {
  // TODO: check if user is already signed in!
  const password = req.body.password;
  const username = req.body.username;
  console.log('password', password);
  console.log('username', username);
  if (!password || !username) {
    return res.sendStatus(400);
  }

  user.login(username, password, (err, usr) => {
    if (err) {
      next(new Error('invalid user credentials', err));
      return;
    }
    if (usr) {
      // set token
      const token = jwt.sign(usr, config.secret, {
        expiresIn: config.tokenExpiry
      });
      res.json({
        payload: {
          token
        }
      });
    } else {
      res.sendStatus(401);
    }
  });
  return null;
};

exports.logout = (req, res, next) => {
  res.sendStatus(200);
};

exports.signup = (req, res, next) => {
  const emailAddress = req.body.emailAddress;
  const username = req.body.username;
  const password = req.body.password;
  if (!emailAddress || !username || !password) {
    res.sendStatus(400);
  } else {
    user.signup(emailAddress, username, password, (err, usr) => {
      if (err) {
        return next(new Error('invalid user credentials', err));
      }
      if (usr) {
        // set cookie token
        const token = jwt.sign(usr, config.secret, {
          expiresIn: config.tokenExpiry
        });
        res.json({
          payload: {
            token
          }
        });
      } else {
        return res.sendStatus(401);
      }
    });
  }
};

exports.getAccounts = (req, res) => {
  return res.json({
    payload: {
      accounts
    }
  });
};

exports.getAccount = (req, res, next) => {
  const accountId = req.params.id;
  const account = accounts.find(findAccount(accountId));
  if (account) {
    res.json({
      payload: {
        account
      }
    });
  } else {
    return res.sendStatus(404);
  }
};

exports.putAccount = (req, res, next) => {
  res.sendStatus(200);
};

exports.deleteAccount = (req, res, next) => {
  res.sendStatus(200);
};

exports.getLogs = (req, res, next) => {
  return res.json({
    payload: {
      logs: [{
        id: '10126442',
        user: 'abc'
      }, {
        id: '18877428',
        user: 'def'
      }, {
        id: '10137727',
        user: 'ghi'
      }, {
        id: '10133883',
        user: 'jkl'
      }]
    }
  });
};
