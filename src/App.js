import logo from './images/spacex_logo.png';
import line from './images/line.png';
import recovered from './images/recovered.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <img src={line} alt="line" />
      <section className="App-info">
        <div className="column1">
          <h3>Mission</h3>
          <h1>Starlink-12 (v1.0)</h1>
          <h3>Rocket</h3>
          <h2>Falcon</h2>
          <img src={recovered} alt="recovered" />
          <button>Learn more</button>
        </div>
        <div className="column2">
          <h3>Launch date</h3>
          <h2>24 Jan 2021</h2>
          <h3>Launch site</h3>
          <h2>KSC LC 39A</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
