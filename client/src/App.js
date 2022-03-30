import './App.css';
import Players from './Components/Players';
import { Coin } from './Components/Coin'

function App() {
  return (
    <div className="App">
      <h1>Coin Flip</h1>
      <div>
        <Coin />
      </div>
      {/* <div>
        <Coin />
      </div>
      <div>
      <Coin />
      </div> */}
      <Players />
    </div>
  );
}

export default App;
