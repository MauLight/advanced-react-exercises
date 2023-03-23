import logo from './logo.svg';
import './App.css';
import { listPeople, topDesserts } from './objects';
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


  const desserts = [
    {
      title: 'Chocolate Cake',
      description: 'Chocolate cake is a cake flavored with melted chocolate',
      calories: 500,
    }
  ];

  const newDesserts = desserts.map((dessert) => {
    return {
      title: dessert.title.toUpperCase(),
      ...dessert,
      kCal: dessert.calories / 1000,
    };
  });

  console.log(newDesserts);




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
              <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
            ))
          }
        </tbody>
      </table>
      <div>
        <ul>
          {listPeople}
        </ul>
      </div>
    </div>
  );
}

export default App;
