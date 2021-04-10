import "./App.css";
import Home from "./components/Home/Home.js";
import BankDetails from "./components/BankDetails/BankDetails"
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/bank-search-app/">
          <Home />
        </Route>
        <Route path="/bank-search-app/:ifsc">
          <BankDetails />
        </Route>
      </Switch>
    </div>
  )
}
export default App;