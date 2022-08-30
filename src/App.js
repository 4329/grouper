import logo from './logo.svg';
import NumberStatus from './NumberStatus.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <NumberStatus/>
      </header>
    </div>
  );
}

export default App;
