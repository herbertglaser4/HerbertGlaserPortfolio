const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
		res.sendFile('public/html/summary.html',{root:__dirname})
})

app.listen(1337, function() {
	console.log('Example app listening on port 1337!')
})
