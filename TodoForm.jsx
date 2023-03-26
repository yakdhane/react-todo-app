import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodoProps(input);
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={input}
        name="text"
        onChange={handleChange}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default TodoForm;