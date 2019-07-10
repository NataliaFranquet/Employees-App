import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ListView from './components/employees/ListView';
import ProfileView from './components/employees/ProfileView';
import Navbar from './components/common/Navbar';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={ListView} />
          <Route exact path='/:id' component={ProfileView} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
