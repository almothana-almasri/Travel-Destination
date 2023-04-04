import './App.css';
import Home from './components/home/Home';
const toursData = require("./data/db.json");

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/city/:id" render={(props) => <TourDetail {...props} toursData={toursData} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;