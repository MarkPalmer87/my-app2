import './App.css'; 
import React, {useState} from 'react'; 
import ShoeForm from './shoeForm';
import ShoeList from './shoeList';

function App() {
  const [state, setState] = useState([]);  // whatever is passed here is the initial value of counter

  // Function to clear the input field
  function clearInput() {
    setState([]);
  }

  function addShoe(shoe) {
    setState([
      ...state, 
      shoe
    ])
  }

  return (
    <div className="App"> 
      <h1>Let's get some shoes!</h1>
      <ShoeForm addShoe={addShoe} />
      <button onClick={clearInput}>Clear</button>
      <ShoeList shoes={state} />
    </div>
  );
}

export default App; 
