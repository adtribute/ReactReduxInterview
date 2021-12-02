import React, { useState } from 'react';
import styles from './Todo.module.css';


export function Todo() {
  const [currentItemText, setCurrentItemText] = useState('');

  const [items, setItems] = useState([]);

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
    setItems([...items, currentItemText]);
    clearCurrentInput();
  };

  const removeItem = () => {
    const numItems = items.length;
    setItems(items.filter((_, index) => index !== numItems - 1));
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
              Create Random TODO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
