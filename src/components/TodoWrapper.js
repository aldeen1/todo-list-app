import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForms";

export const TodoWrapper = ({ boardId }) => {
  const [todos, setTodos] = useState({});

  const addTodo = (todo) => {
    setTodos({
      ...todos,
      [boardId]: [
        ...(todos[boardId] || []),
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ],
    });
  };

  const deleteTodo = (id) => {
    setTodos({
      ...todos,
      [boardId]: todos[boardId].filter((todo) => todo.id !== id),
    });
  };

  const toggleComplete = (id) => {
    setTodos({
      ...todos,
      [boardId]: todos[boardId].map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  const editTodo = (id) => {
    setTodos({
      ...todos,
      [boardId]: todos[boardId].map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      ),
    });
  };

  const editTask = (task, id) => {
    setTodos({
      ...todos,
      [boardId]: todos[boardId].map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      ),
    });
  };

  const boardTodos = todos[boardId] || [];

  if (boardTodos.length === 0) {
    return (
      <div className="TodoWrapper">
        <TodoForm addTodo={addTodo} />
      </div>
    );
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {boardTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};