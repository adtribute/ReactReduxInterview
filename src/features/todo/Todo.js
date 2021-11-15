import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  remove,
  selectItems,
} from './todoSlice';
import styles from './Todo.module.css';


export function Todo() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const [currentItemText, setCurrentItemText] = useState('');

  const createRandomTodo = () => {
    setCurrentItemText('');
    const randomActions = ['Make', 'Create', 'Process'];
    const randomAmount = ['Two', 'Seven', 'So Many'];
    const randomThings = ['Bagels', 'Pies', 'Paintings'];
    const randomIndex = Math.floor(Math.random() * 3);
    setCurrentItemText(currentItemText + randomActions[randomIndex] + ' ');
    setCurrentItemText(currentItemText + randomAmount[randomIndex] + ' ');
    setCurrentItemText(currentItemText + randomThings[randomIndex]);
  }

  const clearCurrentInput = () => {
    setCurrentItemText('');
  }

  const onChangeItemText = (value) => {
    setCurrentItemText(value);
  };

  const addItem = () => {
    dispatch(add(currentItemText));
    clearCurrentInput();
  };

  const removeItem = () => {
    dispatch(remove());
    clearCurrentInput();
  };

  return (
    <div>
      <div className={styles.row}>
        <div>
          <input onChange={e => onChangeItemText(e.target.value)} value={currentItemText}>
          </input>
        </div>
        <div>
          <ul>
            {items.map((item) => <p key={`${Math.random()}-${item}`}>{item}</p>)}
          </ul>
        </div>
        <div className={styles.buttonRow}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => addItem()}
            >
              Add
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => removeItem()}
            >
              Remove
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => createRandomTodo()}
            >
              Add Random TODO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
