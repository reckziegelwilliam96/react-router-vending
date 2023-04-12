import VendingMachine from './VendingMachine'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Sardines from "./Sardines";
import Soda from "./Soda";
import Chips from "./Chips";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <VendingMachine />
      </Route>
      <Route path="/soda" exact>
        <Soda />
      </Route>
      <Route path="/chips" exact>
        <Chips />
      </Route>
      <Route path="/sardines" exact>
        <Sardines />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
