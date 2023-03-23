import logo from './logo.svg';
import './App.css';
import { topDesserts } from './objects';
import { useState } from 'react';
import { ToDo } from './components/todo';

function App() {

  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18.00'
  }, {
    id: 'todo2',
    createdAt: '20.30'
  }]);

  console.log(todos[0].createdAt);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  return (
    <div className="App">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {
            todos.map((todo, index) => (
              <ToDo id={todo.id} createdAt={todo.createdAt} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
