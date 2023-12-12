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
    settodos([...todos, newtodo]);
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

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded p-6">
        <h1 className="text-2xl font-semibold mb-6">Todo App</h1>
        <ToDoForm onFormSubmit={handleFormSubmit} />
        <div className="mt-4">
          {todos.map((todo) => (
            <ToDoItem
              id={todo.id}
              key={todo.id}
              todo={todo.todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
