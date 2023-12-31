import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoForm({ onFormSubmit }) {
  const [value, setValue] = useState("");
  const [selectedDate, setselectedDate] = useState("");
  const getInputValue = (e) => {
    setValue(e.target.value);
  };

  const getTaskValue = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      const newtodo = { id: Date.now(), todo: value, date: selectedDate };
      onFormSubmit(newtodo);
      setValue("");
      setselectedDate("");
    } else {
      alert("TEXT CANNOT BE EMPTY");
    }
  };

  const getSelectedDate = (e) => {
    setselectedDate(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6">
      <h2 className="text-2xl font-semibold mb-6">Add your tasks here</h2>

      <form action="#" method="post">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            ENTER YOU TASK HERE
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder=""
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={value}
            onChange={getInputValue}
          />
          <label
            htmlFor="dateInput"
            className="block text-sm font-medium text-gray-700"
          >
            Select a due Date:
          </label>
          <input
            type="date"
            id="dateInput"
            name="dateInput"
            value={selectedDate}
            onChange={getSelectedDate}
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          onClick={getTaskValue}
          className="w-half bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add task
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
