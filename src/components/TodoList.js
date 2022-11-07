import React from "react";
import ToDo from "./ToDo";

export default function TodoList({ toDoList, toggleToDo }) {
  return toDoList.map((todo) => {
    return <ToDo key={todo.id} toggleToDo={toggleToDo} todo={todo} />;
  });
}
