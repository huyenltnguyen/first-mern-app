import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

app.get('/', (req, res) => {
  res.render('index', {
    content: '...',
  });
});

app.use('/api', apiRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
