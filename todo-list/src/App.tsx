import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { getTodoList, type Todo, ToggleTodo } from "./todo";
import axios from "axios";

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList();
      setTodoList(data);
    };

    fetchData();
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = async () => {
    if (text === "") return alert("내용을 추가해주세요");

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    try {
      const response = await axios.post<Todo>(
        "http://localhost:4000/todos",
        newTodo
      );
      setTodoList((prev) => [...prev, response.data]);
      setText("");
    } catch (error) {
      console.error("Todo 등록 에러:", error);
    }
  };

  const handleDeleteTodo = async (id: Todo["id"]) => {
    try {
      await axios.delete(`http://localhost:4000/todos/${id}`);
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log("Todo 삭제 에러:", error);
    }
  };

  const handleUpdateTodo = async ({ id, completed }: ToggleTodo) => {
    try {
      console.log("눌림");
      await axios.patch(`http://localhost:4000/todos/${id}`, {
        completed: !completed,
      });
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        )
      );
    } catch (error) {
      console.log("Todo 수정 에러:", error);
    }
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <input type="text" onChange={handleTextChange} />
      <button onClick={handleAddTodo}>추가하기</button>
      <TodoList
        todoList={todoList}
        onDeleteClick={handleDeleteTodo}
        onToggleClick={handleUpdateTodo}
      />
    </>
  );
};

export default App;
