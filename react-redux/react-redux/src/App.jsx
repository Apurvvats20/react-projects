import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="m-3">
        <div className="bg-pink-500 m-2 p-2 text-center text-blue-200 rounded">
          REACT REDUX
        </div>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
