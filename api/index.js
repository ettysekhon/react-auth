/* eslint no-console:0 */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const middleware = require('./middleware.js');
const app = express();
const port = process.env.PORT || 8080;

const isDomainWhiteLited = (origin, host) => {
  const whiteListDomains = ['localhost:3001', 'http://localhost:8082'];
  return whiteListDomains.indexOf(origin) || whiteListDomains.indexOf(host) !== -1
      ? origin || host
      : null;
};

const allowCrossDomain = (req, res, next) => {
  const domain = isDomainWhiteLited(req.headers.origin, req.headers.host);
  if (domain) {
    res.header('Access-Control-Allow-Origin', domain);
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'POST,PUT,DELETE,GET,OPTIONS');
    next();
  } else {
    res.sendStatus(401);
  }
};

app.use(allowCrossDomain);
app.use(bodyParser.json());

// cache nothing
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  next();
});

app.use(middleware.requestLogger);

app.use('/api', routes);

// route not found
app.use((req, res) => {
  console.log(`route not found for ${req.url}`);
  res.status(404).send('Sorry cant find that!');
});

// error logging middleware
app.use(middleware.errorLogger);

app.use((err, req, res) => {
  if (err) {
    res.status(500).send('Server error');
  }
  res.sendStatus(500);
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎 API is now running on PORT ${port}.`);
  }
});
