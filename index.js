const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

app.use('/pages', express.static(path.join(__dirname, 'pages')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/shaders', express.static(path.join(__dirname, 'shaders')));

app.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
