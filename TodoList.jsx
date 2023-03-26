import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </div>
  );
}

export default TodoList;