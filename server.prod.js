import path from 'path';
import express from 'express';

const app = express();
const port = process.env.PORT || 8082;

const setCacheControl = (res) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, no-cache');
};

app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: setCacheControl
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎 Open up http://localhost:${port}/ in your browser.`);
  }
});
