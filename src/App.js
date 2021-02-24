import Counter from "./Components/addingStates/Counter"
import Shopping from "./Components/Hooks/Shopping"
import SearchableList from "./Components/LiftingStates/SearchableList"
import Game from "./Components/LSExercise/Game"
import MilesAhead from "./Components/StatesExercises/MilesAhead"
import Superdrug from "./Components/DataRequests/Superdrug"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* // <Counter/>
      // <MilesAhead/>
      // <SearchableList/> */}
      // // {/* <Game/> */}
     {/* <Shopping/> */}
      {/* <Router>
    //      <Nav/>
    //          <Switch>
    //          <Route exact path="/">
    //              <Home/>
    //          </Route>
    //          <Route path="/about">
    //              <About/>
    //          </Route>
    //          <Route path="/shop">
    //              <Shop/>
    //          </Route>
    //          </Switch>
    //      </Router>   
    // </div> */}
    <Superdrug/>
  </div>)
}

export default App;