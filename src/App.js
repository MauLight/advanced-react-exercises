import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToDo } from './components/todo';
import { filterNerds, filterNerds2 } from './objects';

function App() {

  //Desserts exercise
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

  //ToDos exercise

  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18.00'
  }, {
    id: 'todo2',
    createdAt: '20.30'
  }]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  //Lists Exercise

  const ListFormat = ({ title, people }) => {
    return (
      <>
        <h6>{title}</h6>
        <ul>
          {
            people.map(dude => {
              return (
                <li className="listItem" key={dude.id}>
                  <img className="imgUrl me-2" src={dude.imageUrl} />
                  <div className="d-inline align-middle info">
                    <h4>
                      {dude.name} - {dude.profession}
                    </h4>
                    <p>{dude.accomplishments}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </>
    )
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
        <div>
          <ListFormat title="Chemists" people={filterNerds} />
        </div>
      </div>
      <div>
        <ListFormat title="Everyone else" people={filterNerds2} />
      </div>
    </div>
  );
}

export default App;
