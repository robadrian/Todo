import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoCard from './components/TodoCard/TodoCard';
import useListUpdate from './hooks/useListUpdate';

function App() { 

  const [todosList, addToList, editItem, deleteItem] = useListUpdate();

  return (
    <div className="App">
      <TodoInput addToList={addToList} />
      {todosList.map(todo => <TodoCard key={(Math.random()*1000).toFixed} id={todo.id} todo={todo.input} edit={editItem} delete={deleteItem}/>)}
    </div>
  );
}

export default App;
