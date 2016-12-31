const config = require('./config');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const deleteArrItem = (arr, index) => arr.slice(0, index).concat(arr.slice(index + 1));

let users = [{
  id: uuid.v4(),
  emailAddress: 'eric.bernhard@dixonscarphone.com',
  password: 'ericapp2017',
  displayName: 'Eric',
  isAdmin: true
}];

let accounts = [{
  id: uuid.v4(),
  emailAddress: 'account.1n@gmail.com',
  password: '1234',
  isEnabled: true,
  loginFailure: 0,
  created: new Date(),
  device: {
    brand: 'Apple',
    deviceCountry: 'GB',
    deviceId: 'iPhone8,1',
    deviceLocale: 'en-GB',
    deviceName: 'Vicki iPhone',
    getSystemVersion: '9.1',
    manufacturer: 'Apple',
    model: 'iPhone 6s',
    systemName: 'iPhone OS',
    timezone: 'Europe/London',
    uniqueId: '20EE620E-2578-4402-947C-5C0145D7DEB8',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13B143'
  }
}, {
  id: uuid.v4(),
  emailAddress: 'account.2@gmail.com',
  password: '2345',
  isEnabled: false,
  loginFailure: 0,
  created: new Date(),
  device: {
    brand: 'Apple',
    deviceCountry: 'GB',
    deviceId: 'iPhone8,1',
    deviceLocale: 'en-GB',
    deviceName: 'Vicki iPhone',
    getSystemVersion: '9.1',
    manufacturer: 'Apple',
    model: 'iPhone 6s',
    systemName: 'iPhone OS',
    timezone: 'Europe/London',
    uniqueId: '20EE620E-2578-4402-947C-5C0145D7DEB8',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13B143'
  }
}, {
  id: uuid.v4(),
  emailAddress: 'account.3@gmail.com',
  password: '3456',
  isEnabled: false,
  loginFailure: 0,
  created: new Date(),
  device: {
    brand: 'Apple',
    deviceCountry: 'GB',
    deviceId: 'iPhone8,1',
    deviceLocale: 'en-GB',
    deviceName: 'Vicki iPhone',
    getSystemVersion: '9.1',
    manufacturer: 'Apple',
    model: 'iPhone 6s',
    systemName: 'iPhone OS',
    timezone: 'Europe/London',
    uniqueId: '20EE620E-2578-4402-947C-5C0145D7DEB8',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13B143'
  }
}, {
  id: uuid.v4(),
  emailAddress: 'account.4@gmail.com',
  password: '4567',
  isEnabled: false,
  loginFailure: 0,
  created: new Date(),
  device: {
    brand: 'Apple',
    deviceCountry: 'GB',
    deviceId: 'iPhone8,1',
    deviceLocale: 'en-GB',
    deviceName: 'Vicki iPhone',
    getSystemVersion: '9.1',
    manufacturer: 'Apple',
    model: 'iPhone 6s',
    systemName: 'iPhone OS',
    timezone: 'Europe/London',
    uniqueId: '20EE620E-2578-4402-947C-5C0145D7DEB8',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13B143'
  }
}];

const findUser = (emailAddress, password) => {
  return (usr) => {
    return usr.emailAddress === emailAddress && usr.password === password;
  };
};

const findAccount = (id) => {
  return (account) => {
    return account.id === id;
  };
};

const user = {
  login (emailAddress, password, cb) {
    const result = users.find(findUser(emailAddress, password));
    cb(null, result);
  },
  signup (emailAddress, password, username, cb) {
    const usr = {
      id: uuid.v4(),
      emailAddress,
      password,
      username
    };
    users = users.concat([usr]);
    cb(null, usr);
  }
};

exports.login = (req, res, next) => {
  // TODO: check if user is already signed in!
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  if (!emailAddress || !password) {
    return res.sendStatus(400);
  }
  user.login(emailAddress, password, (err, usr) => {
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
  const password = req.body.password;
  const username = req.body.username;
  if (!emailAddress || !password || !username) {
    res.sendStatus(400);
  } else {
    user.signup(emailAddress, password, username, (err, usr) => {
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
  const accountId = req.params.id;
  const account = accounts.find(findAccount(accountId));
  if (!account) {
    return res.sendStatus(404);
  }
  const updatedAccount = Object.assign({}, account, {
    emailAddress: req.body.emailAddress || '',
    password: req.body.password || '',
    isEnabled: req.body.isEnabled || false
  });

  // update accounts
  accounts = accounts.map((acc) => acc.id === accountId ? updatedAccount : acc);

  res.json({
    payload: {
      account: updatedAccount
    }
  });
};

exports.deleteAccount = (req, res, next) => {
  const accountId = req.params.id;
  const index = accounts.findIndex((i) => {
    console.log('i.id', i.id);
    console.log('accountId', accountId);
    console.log('match', i.id === accountId);
    return i.id === accountId;
  });
  console.log('index', index);
  if (index === -1) {
    return res.sendStatus(401);
  }
  accounts = deleteArrItem(accounts, index);
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
