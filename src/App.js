import './App.css';
import { useContext, useState } from 'react';
import { ToDo } from './components/todo';
import { filterNerds, filterNerds2, HaikuMap, Recipes, RecipiesList } from './objects';
import { FormField } from './components/inputs';
import { FeedBackForm } from './components/feedback';
import { USerContext } from './components/UserContext';



const App = () => {

  //ToDos exercise

  const user = useContext(USerContext);

  const [logUser, setLogUser] = useState({
    name: "Mau Light",
    email: "maulisseluz@gmail.com",
    dob: "01/01/2000",
  })

  console.log(logUser.name);

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
        <h1>{logUser.name}</h1>
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
    <USerContext.Provider value={logUser} >
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
        <div>
          <FormField />
        </div>
        <div>
          <FeedBackForm />
          <p>Created by {logUser.name}</p>
        </div>
      </div>
    </USerContext.Provider>

  );
};

export default App;
