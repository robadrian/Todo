import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoCard from "./components/TodoCard/TodoCard";
import useListUpdate from "./hooks/useListUpdate";

function App() {
  const [todosList, addToList, editItem, isEditing, deleteItem] =
    useListUpdate();

  return (
    <div className="App">
      <TodoInput addToList={addToList} />
      {todosList.map((todo) => (
        <TodoCard
          key={Math.random() * 100000}
          id={todo.id}
          todo={todo.input}
          edit={editItem}
          delete={deleteItem}
          date={todo.date}
          editing={todo.isEditing}
          isEditing={isEditing}
        />
      ))}
    </div>
  );
}

export default App;
