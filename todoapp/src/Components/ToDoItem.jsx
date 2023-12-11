import React from "react";

function ToDoItem({ id, todo, handleDelete }) {
  const deleteTodo = () => {
    handleDelete(id);
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded p-6">
      <ul className="space-y-4">
        <li className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded">
          <span className="text-gray-700">{todo}</span>
          <button onClick={deleteTodo} className="text-red-500">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ToDoItem;
