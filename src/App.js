import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoCard from './components/TodoCard/TodoCard';

function App() {
  return (
    <div className="App">
      <TodoInput />     
      <TodoCard />  
      <TodoCard />  
      <TodoCard /> 
      <TodoCard />  
    </div>
  );
}

export default App;
