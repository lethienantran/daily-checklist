import React from "react";

export default function ToDo({ todo, toggleToDo }) {
  function handleToDoClick() {
    toggleToDo(todo.id);
  }
  return (
    <div className="pb-2 text-[#783937FF] text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl item-center font-kalam rounded-3xl">
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleToDoClick}
          className="w-2 h-2  md:w-4 md:h-4 mx-2"
        />
        {todo.name}
      </label>
    </div>
  );
}
