const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ type: '*/*' }));

const randomTodos = ['Make breakfast', 'Write some code', 'Apply to MaetroQA'];
const localTodos = [];

function shouldFail() {
    if (Math.random() <= 0.2) {
        return true;
    }
    return false;
}

app.all('/*', function(_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT");
    next();
  });

app.get('/get-random-todo', (_, res) => {
    if (shouldFail()) {
        res.sendStatus(503);
        return;
    }
    const randomIndex = Math.floor(Math.random() * randomTodos.length);
    const todo = randomTodos[randomIndex];
    res.json({
        todo,
    });
});

app.post('/add-todo', (req, res) => {
    if (shouldFail()) {
        res.sendStatus(503);
        return;
    }

    const item = req.body.todo;
    localTodos.push(item);
    res.json({
        todos: localTodos,
    });
});

app.get('/get-todos', (_, res) => {
    if (shouldFail()) {
        res.sendStatus(503);
        return;
    }

    res.json({
        todos: localTodos,
    });
});

app.get('/remove-todo', (_, res) => {
    if (shouldFail()) {
        res.sendStatus(503);
        return;
    }
    localTodos.pop();
    res.json({
        todos: localTodos,
    });
});

app.get('/*', (_, res) => {
    res.sendStatus(404);
});

app.listen(8000, () => {
    console.log('Listening on port 8000');
});