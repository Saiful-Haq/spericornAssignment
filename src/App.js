import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';
import Registration from './screens/Registration';

import PrivateRoute from './components/PrivateRoute';

import {UserProvider} from './Context/UserContext'
import { useEffect } from 'react';

function App() {

  // useEffect(()=>{
  //   const data={email:'',
  //       password:'',
  //       username:'',
  //       phone:''
  //   }
  //      // e.preventDefault();
  //   //console.log(e);
  //       fetch("https://devgroceryapi.spericorn.com/api/auth/register",
  //       {
  //           method: "POST",
  //           body: data
  //       })
  //       .then(function(res){ console.log( res); })

  // },[])
  return (
    <UserProvider>
    <Router>

      <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute path='/Home' component={Home} exact />
          <Route path='/Registration' component={Registration} exact />
      </Switch>
   
  </Router>
  </UserProvider>
  );
}

export default App;
