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

app.get('/get-random-todo', (_, res) => {
    const randomIndex = Math.floor(Math.random() * randomTodos.length);
    const todo = randomTodos[randomIndex];
    res.json({
        todo,
    });
});

app.post('/add-todo', (req, res) => {
    if (shouldFail()) {
        res.sendStatus(503);
    }

    const item = req.body.todo;
    const randomTimeoutAmount = Math.random() * 5000;
    setTimeout(() => {
        localTodos.push(item);
        res.sendStatus(200);
    }, randomTimeoutAmount);
});

app.get('/get-todos', (_, res) => {
    if (shouldFail()) {
        res.sendStatus(503);
    }

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
