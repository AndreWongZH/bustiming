const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

require('./routes/BusstopSearch')(app);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


let port = process.env.PORT;
if (port == null || port == '') {
    port = 5000
}
app.listen(port, () => console.log('Backend Started'))