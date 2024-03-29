import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
// const _ = require('lodash');
// const fs = require('fs');
// const baseTemplate = fs.readFileSync('./index.html');
// const template = _.template(baseTemplate);

const app = express();
const port = process.env.PORT || 3001;

const setCacheControl = (res) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, no-cache');
};

app.use(favicon(`${__dirname}/favicon.ico`));

app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: setCacheControl
}));

app.get('*', (req, res) => {
  console.log('url', req.url);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎 Open up http://localhost:${port}/ in your browser.`);
  }
});
