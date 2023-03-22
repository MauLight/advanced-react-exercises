import logo from './logo.svg';
import './App.css';
import { topDesserts } from './objects';

function App() {

  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return (
      <li className="listItem">{itemText}</li>
    );
  
  });

  return (
    <div className="App">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;
