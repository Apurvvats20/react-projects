import { useState } from "react";
import ToDoForm from "./Components/ToDoForm";
import ToDoItem from "./Components/ToDoItem";

function App() {
  const [todos, settodos] = useState([]);
  const handleFormSubmit = (newtodo) => {
    settodos([...todos, newtodo]);
  };

  const handleDelete = (id) => {
    let updatedTodos = todos.filter((elem) => elem.id != id);
    settodos(updatedTodos);
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
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
