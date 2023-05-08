import logo from './logo.svg';
import './App.css';
import Form1 from './views/Form1';
import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    console.log(newItem)

    if (!newItem) {
      alert("add an item dude!")
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      line: false
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    console.log(id);
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  function On(id) {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, line: !item.line };
      } else {
        return item;
      }
    });

    setItems(newItems);
  }

  return (
    <div className='App'>
      <h1>Todo list!</h1>

      <input
        type="text"
        placeholder="add an item..."
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map(item => {
          return (
            <li  className={item.line ? "cont2" : "cont"}  key={item.id}  >  {item.value}
              <input type="checkbox" onClick={() => On(item.id)} checked={item.line}  /> <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          )
        })}
      </ul>

     
    </div>
  );
}

export default App;
