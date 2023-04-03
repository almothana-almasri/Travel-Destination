import './App.css';
import Home from './components/home/Home';
const toursData = require("./data/db.json");

function App() {
  return (
    <div className="App">
      <Home toursData={toursData} />
    </div>
  );
}

export default App;