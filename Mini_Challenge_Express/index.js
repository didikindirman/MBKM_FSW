const express = require('express');
const app = express();
const PORT = 9000;

// parsing request body
app.use(express.json());

// ENDPOINT GET
app.get('/api/products', (req, res) => {
    res.json({ message: 'GET SUCCESS'});
});

// ENDPOINT GET BY ID
app.get('/api/products/:id', (req, res) => {
    res.json({ message: 'GET BY ID SUCCESS'});
});

// ENDPOINT POST
app.post('/api/products', (req, res) => {
    res.json({ message: 'POST SUCCESS',
    body: req.body});
});

// ENDPOINT PUT
app.put('/api/products/:id', (req, res) => {
    res.json({ message: 'PUT SUCCESS',
    body: req.body});
});

// ENDPOINT DELETE
app.delete('/api/products/:id', (req, res) => {
    res.json({ message: 'DELETE SUCCESS'});
});

app.listen(PORT, () => console.log(`Server aktif di : ${PORT}`));