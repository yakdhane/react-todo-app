import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { TiEdit } from 'react-icons/ti';

function TodoItem(props) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange() {
    props.handleChangeProps(props.todo.id);
  }

  function deleteTodo() {
    props.deleteTodoProps(props.todo.id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setUpdate(newName, props.todo.id);
    setNewName('');
    setEditing(false);
  }

  function handleEdit() {
    setEditing(true);
  }

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className="todo-item">
      <div onDoubleClick={handleEdit} style={viewMode}>
        <input
          type="checkbox"
          className="checkbox"
          checked={props.todo.completed}
          onChange={handleChange}
        />
        <button onClick={deleteTodo}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span
          style={{
            textDecoration: props.todo.completed ? 'line-through' : 'none',
          }}
        >
          {props.todo.title}
        </span>
        <button onClick={handleEdit}>
          <TiEdit style={{ color: 'green', fontSize: '20px' }} />
        </button>
      </div>
      <form onSubmit={handleSubmit} style={editMode}>
        <input
          type="text"
          className="input-text"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
        />
        <button className="save-btn" type="submit">
          Save
        </button>
      </form>
    </li>
  );
}

export default TodoItem;