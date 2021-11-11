import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Purchase from "./Pages/Purchase/Purchase";
import NotFount from "./Pages/NotFount/NotFount";
import Pay from "./Pages/Dashboard/Pay/Pay";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Review from "./Pages/Dashboard/Review/Review";
import ManageAllOrders from "./Pages/Dashboard/Admin/ManageAllOrders/ManageAllOrders";
import AddAProducts from "./Pages/Dashboard/Admin/AddAProducts/AddAProducts";
import ManageProducts from "./Pages/Dashboard/Admin/ManageProducts/ManageProducts";
import ManageAdmin from "./Pages/Dashboard/Admin/ManageAdmin/ManageAdmin";
import StockList from "./Pages/StockList/StockList";
import ProductDetasils from "./Pages/ProductDetasils/ProductDetasils";
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
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/my-orders">
          <MyOrders />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/manage-all-orders">
          <ManageAllOrders />
        </Route>
        <Route path="/add-a-product">
          <AddAProducts />
        </Route>
        <Route path="/manage-product">
          <ManageProducts />
        </Route>
        <Route path="/product-details">
          <ProductDetasils />
        </Route>
        <Route path="/make-admin">
          <ManageAdmin />
        </Route>
        <Route path="*">
          <NotFount/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
