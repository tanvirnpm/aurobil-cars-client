import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Purchase from "./Pages/Purchase/Purchase";
import NotFount from "./Pages/NotFount/NotFount";
import StockList from "./Pages/Shared/StockList/StockList";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/stock-list">
          <StockList />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/purchase">
          <Purchase />
        </Route>
        <Route path="*">
          <NotFount/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
