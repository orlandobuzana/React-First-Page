
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppResume from './app_resume';
import AppContact from './app_contact';


class AllRoutes extends Component{
    render(){
      return(
        <Switch> 
          <Route exact path="/resume" component={AppResume} />
          <Route exact path="/contact" component={AppContact} />
          
        </Switch>
      );
    }
  }
      export default AllRoutes;