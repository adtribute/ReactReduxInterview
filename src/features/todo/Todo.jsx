import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Todo.module.css';
import { Greeting } from '../greeting/Greeting.jsx';
import {
  addTodoAction,
  removeTodoAction,
  getTodosAction,
} from './todoSlice';
import { selectItems, selectState } from '../../common/selectors';
import { getRandomTodo as fetchRandomTodo } from './todoAPI';

export function Todo() {
  const [currentItemText, setCurrentItemText] = useState('');

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const clearCurrentInput = () => {
    setCurrentItemText('');
  }

  const onChangeItemText = (value) => {
    setCurrentItemText(value);
  };

  const addItem = () => {
    dispatch(addTodoAction(currentItemText));
    clearCurrentInput();
  };

  const removeItem = () => {
    dispatch(removeTodoAction());
  };

  const getRandomTodo = async () => {
    const { todo } = await fetchRandomTodo();
    setCurrentItemText(todo);
  }

  return (
    <div>
      <Greeting/>
      <div className={styles.row}>
        <div>
          <input className={styles.todoInput} onChange={e => onChangeItemText(e.target.value)} placeholder="Enter TODO" value={currentItemText}>
          </input>
        </div>
        <div className={styles.buttonRow}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => addItem()}
            >
              Add TODO
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => removeItem()}
            >
              Remove Last TODO
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => getRandomTodo()}
            >
              Create Random TODO
            </button>
          </div>
        </div>
        <div className={styles.todoListContainer}>
          <ul>
            {items.map((item) => (
              <div className={styles.todoListItem}>
                <p className={styles.todoListItemText} key={`${Math.random()}-${item}`}>{item}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
