var express = require('express');
var apiMocker = require('connect-api-mocker');

var app = express();
const PORT = 8080;

app.use('/api/messages', apiMocker('api/messages'));
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT} !`);
});
