import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoCard from './components/TodoCard/TodoCard';
import useUpdateArray from './hooks/useUpdateArray';

function App() { 

  const [array, newArray, edit, deleteArray, onChangeHandler] = useUpdateArray();

  return (
    <div className="App">
      <TodoInput onChangeHandler={onChangeHandler} newArray={newArray}/>     
      {array.map((item,index) => {
       return <TodoCard todo={item.input} key={item.id} id={item.id} delete={deleteArray} index={index} onChange={onChangeHandler} edit={edit}/>
      } )}
    </div>
  );
}

export default App;
