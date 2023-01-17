const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/viewer-react/build'));

// app.get('/', (req, res) => {
//     res.sendFile('index.html');
// });
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'viewer-react/build/index.html'));
});

app.listen(app.get('port'), () => {
    console.log("stock-index-server listening on port " + app.get('port'));
});