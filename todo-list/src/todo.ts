import axios from "axios";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type ToggleTodo = Omit<Todo, "text">;

export async function getTodoList(): Promise<Todo[]> {
  try {
    const response = await axios.get<Todo[]>("http://localhost:4000/todos");
    return response.data;
  } catch (error) {
    console.error("Todo GET 요청 에러:", error);
    return [];
  }
}

getTodoList();
