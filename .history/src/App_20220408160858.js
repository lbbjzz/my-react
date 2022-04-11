import logo from './logo.svg';
import './App.css';

function App() {

  constructor(){
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='button'>
        <span onClick={()=>{console.log("onclick")}}>Click Me</span>
      </button>
      </header>
    </div>
  );
}

export default App;
