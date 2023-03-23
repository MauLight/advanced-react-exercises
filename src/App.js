import './App.css';
import { useState } from 'react';
import { ToDo } from './components/todo';
import { filterNerds, filterNerds2, HaikuMap, Recipes, RecipiesList} from './objects';

function App() {

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
                <li className="listItem mb-2" key={dude.id}>
                  <img className="imgUrl me-2" src={dude.imageUrl} alt="" />
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
          <ListFormat key="0" title="Chemists" people={filterNerds} />
        </div>
      </div>
      <div>
        <ListFormat key="1" title="Everyone else" people={filterNerds2} />
      </div>
      <div>
        <Recipes />
      </div>
      <div>
        <RecipiesList />
      </div>
      <div>
        <HaikuMap />
      </div>
    </div>
  );
}

export default App;
