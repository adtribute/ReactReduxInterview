const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ type: '*/*' }));

const randomTodos = ['Make breakfast', 'Write some code', 'Apply to MaetroQA'];
const localTodos = [];

app.get('/get-random-todo', (_, res) => {
    const randomIndex = Math.floor(Math.random() * randomTodos.length);
    const todo = randomTodos[randomIndex];
    res.json({
        todo,
    });
});

app.post('/add-todo', (req, res) => {
    const item = req.body.todo;
    localTodos.push(item);
    res.sendStatus(200);
});

app.get('/get-todos', (_, res) => {
    res.json({
        todos: localTodos,
    });
});

app.get('/*', (_, res) => {
    res.sendStatus(404);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
