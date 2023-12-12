import React, { useState } from "react";

function ToDoItem({ id, todo, handleDelete, handleEdit }) {
  const deleteTodo = () => {
    handleDelete(id);
  };
  const [isEditing, setisEditing] = useState(false);
  const [editedToDo, seteditedToDo] = useState(todo);

  const toggleEdit = (e) => {
    console.log("clicked");
    e.preventDefault();
    setisEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    seteditedToDo(e.target.value);
  };

  const saveEdit = () => {
    handleEdit(id, editedToDo);
    setisEditing(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6">
      <ul className="space-y-4">
        <li className="flex items-center bg-gray-200 pl-2 py-2 rounded">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedToDo}
                onChange={handleInputChange}
                className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <button onClick={saveEdit} className="ml-2 text-green-500">
                Save
              </button>
            </>
          ) : (
            <>
              <span className="flex-grow text-gray-700">{todo}</span>
              <div className="flex">
                <button onClick={deleteTodo} className="text-red-500">
                  Delete
                </button>
                <button
                  onClick={toggleEdit}
                  className="ml-2 mr-1 text-blue-500"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ToDoItem;
