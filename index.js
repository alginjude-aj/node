const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./router/user');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRouter)


app.listen(5000, () => {
  console.log('Server listening on port 5000!');
});
