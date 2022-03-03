import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import NotFound from "./components/NotFound/NotFound";
import Registration from "./components/Registration/Registration";
import AuthProvider from "./contexts/AuthProvider";
import Services from "./components/Services/Services";
import Service from "./components/Service/Service";
import AddService from "./components/AddService/AddService";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Booking from "./components/Booking/Booking";
import MyBooked from "./components/MyBooked/MyBooked";
import ManageBooked from "./components/ManageBooked/ManageBooked";
import "./App.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/service/:id">
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <PrivateRoute path="/addservice">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/mybooked">
              <MyBooked />
            </PrivateRoute>
            <PrivateRoute path="/managebooked">
              <ManageBooked />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
