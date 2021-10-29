import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>      
        <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          {/* <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/service/:id">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute path="/">
            <Appointment></Appointment>
          </PrivateRoute> */}
          <Route path="/aboutus">
            <AboutUs/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
