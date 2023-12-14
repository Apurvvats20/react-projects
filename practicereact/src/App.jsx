import { useState, useEffect } from "react";
import ToDoForm from "./Components/ToDoForm";
import ToDoItem from "./Components/ToDoItem";

function App() {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, settodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleFormSubmit = (newtodo) => {
    settodos([...todos, { ...newtodo, completed: false }]);
  };

  const handleDelete = (id) => {
    let updatedTodos = todos.filter((elem) => elem.id != id);
    settodos(updatedTodos);
  };

  const handleEdit = (id, editedToDo) => {
    settodos((prevtodos) =>
      prevtodos.map((elem) => {
        if (elem.id === id) {
          return { ...elem, todo: editedToDo };
        }
        return elem;
      })
    );
  };

  const handleCompletion = (id) => {
    settodos((prevtodos) =>
      prevtodos.map((elem) => {
        if (elem.id === id) {
          return { ...elem, completed: true };
        }
        return elem;
      })
    );
  };

  const clearCompletedTodos = () => {
    const UpdatedTodos = todos.filter((elem) => !elem.completed);
    settodos(UpdatedTodos);
  };
  const shuffleTodos = () => {
    const shuffledTodos = [...todos].sort((a, b) => b.id - a.id);
    settodos(shuffledTodos);
  };
  const returnalltodos = () => {
    console.log(todos);
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded p-6 mt-10">
        <h1 className="text-2xl font-semibold mb-6">Todo App</h1>
        <ToDoForm onFormSubmit={handleFormSubmit} />
        <div className="mt-4">
          <div className="flex justify-end">
            <button
              onClick={shuffleTodos}
              className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              style={{ marginRight: "22px" }}
            >
              🔄
            </button>
          </div>
          {todos.map((todo) => (
            <ToDoItem
              id={todo.id}
              key={todo.id}
              todo={todo.todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleCompletion={handleCompletion}
            />
          ))}
        </div>
        <button
          onClick={clearCompletedTodos}
          className="w-half bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          style={{ marginLeft: "21px" }}
        >
          Clear completed
        </button>
      </div>
    </>
  );
}

export default App;
