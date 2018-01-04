import config from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

const app = express();

app.set('view engine', 'ejs');
app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));


app.get('/', (req, res) => {
  serverRender()
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch((err) => console.log(err));

});

app.use('/api', apiRouter);
app.use(express.static('public'));

app.listen(config.port, config.host, () => {
  console.log(`App is running on ${config.port}`);
});
