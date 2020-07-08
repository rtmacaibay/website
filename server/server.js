const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, '/../public/');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Up on ${port}`);
});