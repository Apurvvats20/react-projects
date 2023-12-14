import React, { useState } from "react";

function ToDoItem({ id, todo, handleDelete, handleEdit, handleCompletion }) {
  const deleteTodo = () => {
    handleDelete(id);
  };
  const [isEditing, setisEditing] = useState(false);
  const [editedToDo, seteditedToDo] = useState(todo);
  const [completed, setCompleted] = useState(false);
  const [strikeThroughClass, setstrikeThroughClass] = useState("");
  const [showModal, setShowModal] = useState("hidden");

  const toggleEdit = (e) => {
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

  const markAsComplete = (e) => {
    setCompleted(!completed);
    if (!completed) {
      setstrikeThroughClass("line-through");
      handleCompletion(id);
    } else {
      setstrikeThroughClass("");
    }
  };
  const showModalFunction = () => {
    showModal === "hidden" ? setShowModal("") : setShowModal("hidden");
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
              <input
                type="checkbox"
                className="mr-1"
                checked={completed}
                onChange={markAsComplete}
                disabled={completed}
              ></input>
              <span className={`flex-grow text-gray-700 ${strikeThroughClass}`}>
                {todo}
              </span>
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
                <button
                  className="m-2 rounded-full bg-white p-2"
                  style={{ borderRadius: "50%" }}
                  onClick={showModalFunction}
                >
                  +
                </button>
                <div
                  className={`todosTags ${showModal}`}
                  style={{
                    position: "absolute",
                    marginTop: "55px",
                    left: "66%",
                    padding: "5px 20px",
                    borderRadius: "10px",
                    background: "skyblue",
                    color: "white",
                  }}
                >
                  <button
                    className="P1 tagsItem"
                    style={{
                      background: "lightgrey",
                      padding: "2px 20px",
                      borderRadius: "10px",
                      marginBottom: "5px",
                      marginRight: "5px",
                    }}
                  >
                    P1
                  </button>
                  <button
                    className="P2 tagsItem"
                    style={{
                      background: "lightgrey",
                      padding: "2px 20px",
                      borderRadius: "10px",
                      marginBottom: "5px",
                      marginRight: "5px",
                    }}
                  >
                    P2
                  </button>
                  <button
                    className="P3 tagsItem"
                    style={{
                      background: "lightgrey",
                      padding: "2px 20px",
                      borderRadius: "10px",
                      marginBottom: "5px",
                      marginRight: "5px",
                    }}
                  >
                    P3
                  </button>
                </div>
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ToDoItem;
