const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/views/${name}`));
    };
    next();
});

app.use(('/user/'), (req, res) => {
    res.status(403).show(`forbidden.html`);
});

app.get(['/', '/home'], (req, res) => {
    res.show('home.html');
});

app.get('/about', (req, res) => {
    res.show('about.html');
});

app.get('/info', (req, res) => {
    res.show('info.html');
});

app.use((req, res) => {
    res.status(404).show('notfound.html');
});

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});
