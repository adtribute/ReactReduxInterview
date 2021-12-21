const BASE_URL = 'http://localhost:8000';

export const getTodos = async (attempt = 0) => {
  if (attempt > 3) throw Error('Retries exceeded');
  const getTodosUrl = `${BASE_URL}/get-todos`;
  const res = await fetch(getTodosUrl);
  if (res.ok) return res.json();
  return getTodos(attempt + 1);
};

export const addTodo = async (todo, attempt = 0) => {
  if (attempt > 3) throw Error('Retries exceeded');
  const addTodoUrl = `${BASE_URL}/add-todo`;
  const requestBody = JSON.stringify({ todo });
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(addTodoUrl, { body: requestBody, headers, method: 'post' });
  if (res.ok) return res.json();
  return addTodo(todo, attempt + 1);
};

export const getRandomTodo = async (attempt = 0) => {
  if (attempt > 3) throw Error('Retries exceeded');
  const getRandomTodoUrl = `${BASE_URL}/get-random-todo`;
  const res = await fetch(getRandomTodoUrl);
  if (res.ok) return res.json();
  return getRandomTodo(attempt + 1);
};

export const removeTodo = async (attempt = 0) => {
  if (attempt > 3) throw Error('Retries exceeded');
  const removeTodoUrl = `${BASE_URL}/remove-todo`;
  const res = await fetch(removeTodoUrl);
  if (res.ok) return res.json();
  return removeTodo(attempt + 1);
};
