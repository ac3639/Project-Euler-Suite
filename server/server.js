const express = require('express');
const app = express(); // takes the place
const path = require('path');

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res, next) => {
  // send is an express method equivalent to node's write method
  // res.sendFile((path.join(__dirname, '../SpecRunner.html')));
});

app.post('/index', (req, res, next) => {
  res.send((path.join(__dirname, '../SpecRunner.html')));
})


app.use((req, res, next) => {
  res.end('oops');
});

const port = 8080;
app.listen(port, () => {
  console.log(`listening on ${port}`)
});
