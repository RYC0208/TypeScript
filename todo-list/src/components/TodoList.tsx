import React from "react";
import { type Todo, ToggleTodo } from "../todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todoList: Todo[];
  onDeleteClick: (id: Todo["id"]) => void;
  onToggleClick: (toggleTodo: ToggleTodo) => void;
};

const TodoList = ({
  todoList,
  onDeleteClick,
  onToggleClick,
}: TodoListProps) => {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onDeleteClick={onDeleteClick}
          onToggleClick={onToggleClick}
        />
      ))}
    </ul>
  );
};

export default TodoList;
