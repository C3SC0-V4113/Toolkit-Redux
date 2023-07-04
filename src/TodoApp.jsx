// import { useGetTodosQuery } from "./store/apis";

import { useState } from "react";
import { useGetTodoQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo = {}, isLoading } = useGetTodoQuery(todoId);
  console.log(todo);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTKQuery</h1>
      <hr />
      <h4>isLoading: {isLoading ? "TRUE" : "FALSE"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "[DONE]" : "[PENDING]"}</strong>{" "}
            {todo.title}
          </li>
        ))}
      </ul> */}

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
