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
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute/AdminPrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/stock-list">
            <StockList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/purchase">
            <Purchase />
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Pay />
          </PrivateRoute>
          <PrivateRoute path="/my-orders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <AdminPrivateRoute path="/manage-all-orders">
            <ManageAllOrders />
          </AdminPrivateRoute>
          <AdminPrivateRoute path="/add-a-product">
            <AddAProducts />
          </AdminPrivateRoute>
          <AdminPrivateRoute path="/manage-product">
            <ManageProducts />
          </AdminPrivateRoute>
          <Route path="/product-details">
            <ProductDetasils />
          </Route>
          <AdminPrivateRoute path="/make-admin">
            <ManageAdmin />
          </AdminPrivateRoute>
          <Route path="*">
            <NotFount/>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
