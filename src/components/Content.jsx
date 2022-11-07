import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
const { v4: uuidv4 } = require("uuid");
const LOCAL_STORAGE_KEY = "toDoLocalStorage.thingToDo";
const Content = () => {
  const [thingToDo, setTodo] = useState([]);
  const toDoNameRef = useRef();

  useEffect(() => {
    const toDoStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (toDoStorage) {
      // setTodo(toDoStorage);
      setTodo((prevToDos) => [...prevToDos, ...toDoStorage]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(thingToDo));
  }, [thingToDo]);

  function handleAdd(e) {
    const name = toDoNameRef.current.value;
    if (name === "") return;
    setTodo((prevToDos) => {
      return [...prevToDos, { id: uuidv4(), name: name, complete: false }];
    });
    toDoNameRef.current.value = null;
  }

  function handleClear() {
    const newToDos = thingToDo.filter((todo) => !todo.complete);
    setTodo(newToDos);
  }
  function handleClearAll() {
    const newToDos = thingToDo.filter(
      (todo) => !todo.complete && todo.complete
    );
    setTodo(newToDos);
  }

  function toggleToDo(id) {
    const newToDoList = [...thingToDo];
    const toDo = newToDoList.find((todo) => todo.id === id);
    toDo.complete = !toDo.complete;
    setTodo(newToDoList);
  }

  return (
    <div className="w-full sm:h-[calc(100%-1.75rem) md:h-[calc(100%-2.8rem)] lg:h-[calc(100%-3.25rem)] mt-2">
      <form className="w-full h-8 md:h-10 lg:h-30 items-center lg:text-2xl md:text-xl sm:text-lg xs:text-base text-sm">
        <input
          placeholder="Enter here..."
          className=" pl-2 border-4 shadow-md shadow-gray-800 border-black mx-2 h-8 md:h-10 lg:h-30 mb-5 w-1/2"
          ref={toDoNameRef}
          type="text"
        />
        {/* <div className="w-full sm:h-3 md:h-6 lg:h-8">
          <input
            className="border-2 border-red-400 mx-2"
            ref={toDoNameRef}
            type="text"
          />
        </div>
        <div className="w-full sm:h-4 md:h-4 lg:h-4"></div>
        <button
          className="text-white mx-2 border-2 border-red-400 mt"
          onClick={handleAdd}
        >
          Add To Do
        </button>
        <button
          className="text-white mx-2 border-2 border-red-400 "
          onClick={handleClear}
        >
          Clear
        </button>
      </div> */}
      </form>
      <div className="w-full h-14 sm:h-16 md:h-20 py-1.5 md:py-4">
        <button
          className="text-[white] shadow-md shadow-gray-800 font-kalam text-center md:py-1  mx-1 md:mx-2 border-4 text-sm sm:text-base  md:text-xl lg:text-2xl rounded border-[#783937FF] bg-[#783937FF] hover:bg-[black] hover:border-[black] hover:text-[#FC766AFF] duration-300 px-0.5 xs:px-2 sm:px-6"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="text-[white] shadow-md shadow-gray-800 font-kalam text-center md:py-1  mx-1 md:mx-2 border-4 text-sm sm:text-base  md:text-xl lg:text-2xl rounded border-[#783937FF] bg-[#783937FF] hover:bg-[black] hover:border-[black] hover:text-[#FC766AFF] duration-300 px-0.5 xs:px-2 sm:px-5"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="text-[white] shadow-md shadow-gray-800 font-kalam text-center md:py-1  mx-1 md:mx-2 border-4 text-sm sm:text-base  md:text-xl lg:text-2xl rounded border-[#783937FF] bg-[#783937FF] hover:bg-[black] hover:border-[black] hover:text-[#FC766AFF] duration-300 px-0.5 xs:px-2 sm:px-5"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      <div className="text-black text-center font-oswalds font-bold text-base md:text-xl lg:text-2xl ">
        You have: {thingToDo.filter((todo) => !todo.complete).length} task to do{" "}
      </div>
      <div className=" w-2/3 shadow-md shadow-[black] rounded-2xl mx-auto  sm:w-56 md:w-72 lg:w-96 h-[calc(9rem+0.6rem)] text-left text-black font-oswalds font-bold text-base md:text-xl lg:text-2xl py-3 sm:h-80 mb-4 lg:mb-6 overflow-y-scroll scrollbar-hide mt-4">
        <TodoList toDoList={thingToDo} toggleToDo={toggleToDo} />
        {/* <div className="overflow-y-scroll">
          <TodoList toDoList={thingToDo} toggleToDo={toggleToDo} />
        </div> */}
      </div>
    </div>
  );
};

export default Content;
