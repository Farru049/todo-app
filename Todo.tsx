import React from 'react';

interface TodoProps {
  todo: Todo;  
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
