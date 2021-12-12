import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/AdminDashboard/Dashboard/Dashboard';
import UserDashboard from './components/UserDashboard/UserDashboard/UserDashboard';
import { createContext } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import { useState } from 'react';


export const UserContext = createContext();


function App() {
 
  const [loggedInUser, setLoggedInUser] = useState({})
  const [selectedService, setSelectedService] = useState(null);
 


  return (
    <UserContext.Provider value ={{serviceInfo: [selectedService, setSelectedService], 
                                  userInfo :[loggedInUser, setLoggedInUser], 
                                 
                                  }}>
      <Router>
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/userDashboard">
            <UserDashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
      
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
