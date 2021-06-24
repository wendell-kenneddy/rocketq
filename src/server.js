const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(routes);

app.listen(port, () => {
  console.log('App running at http://localhost:' + port)
});
