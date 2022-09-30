const express = require('express');
const app = express();

app.use(express.json());

app.get('/books', (req, res) => {
    return res.json([
        "Todas as suas (im)perfeições",
        "A Garota do Lago",
        "Sherlock Holmes: O Cão dos Baskerville",
        "Drácula",
        "Revolução dos Bichos",
        "HP Lovecraft: O Horror de Dunwich",
        "Edgar Allan Poe: O Gato Preto",
        "O Iluminado",
        "Uma mulher na escuridão",
    ]);
});

app.post('/books', (req, res) => {
    return res.json([
        "Todas as suas (im)perfeições",
        "A Garota do Lago",
        "Sherlock Holmes: O Cão dos Baskerville",
        "Drácula",
        "Revolução dos Bichos",
        "HP Lovecraft: O Horror de Dunwich",
        "Edgar Allan Poe: O Gato Preto",
        "O Iluminado",
        "Uma mulher na escuridão",
        "Hobbit",
    ]);
});

app.put('/books/:id', (req, res) => {
    return res.json([
        "Todas as suas (im)perfeições",
        "A Garota do Lago",
        "Sherlock Holmes: O Cão dos Baskerville",
        "Drácula",
        "Revolução dos Bichos",
        "HP Lovecraft: O Horror de Dunwich",
        "Edgar Allan Poe: O Gato Preto",
        "O Iluminado",
        "Harry Potter e a Pedra Filosofal",
        "Hobbit",
    ]);
});

app.delete('/books/:id', (req, res) => {
    return res.json([
        "Todas as suas (im)perfeições",
        "A Garota do Lago",
        "Sherlock Holmes: O Cão dos Baskerville",
        "Drácula",
        "Revolução dos Bichos",
        "HP Lovecraft: O Horror de Dunwich",
        "Edgar Allan Poe: O Gato Preto",
        "Uma mulher na escuridão",
        "Hobbit",
    ]);
});

app.listen(8080)