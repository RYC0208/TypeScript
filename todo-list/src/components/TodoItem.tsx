import React from "react";
import { type Todo, ToggleTodo } from "../todo";

type TodoItemProps = Todo & {
  onDeleteClick: (id: Todo["id"]) => void;
  onToggleClick: (toggleTodo: ToggleTodo) => void;
};

const TodoItem = ({
  id,
  text,
  completed,
  onDeleteClick,
  onToggleClick,
}: TodoItemProps) => {
  return (
    <li>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textDecoration: completed ? "line-through" : "none", // 완료된 할 일은 취소선 표시
          }}
        >
          {text}
        </div>
        <button onClick={() => onToggleClick({ id, completed })}>
          {completed ? `취소` : `완료`}
        </button>
        <button onClick={() => onDeleteClick(id)}>삭제하기</button>
      </div>
    </li>
  );
};

export default TodoItem;
