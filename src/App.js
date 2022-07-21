import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation/Navigation';
import Main from './Navigation/Main'
import Drivers from './Drivers/Drivers';
import Articles from './Articles/Articles';
import Forums from './Forums/Discussion';
import Driver from './Drivers/Driver';
import teams from './Drivers/teams.json'

import { BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import LoginModal from './Navigation/LoginModal';

import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import MyCalendar from './Calendar/Calendar';
import RegisterForm from './Navigation/RegisterForm';
import FAQ from './Forums/FAQ';
import Game from './Game/Game';

function driver_names() {
  var drivers = "(";
  for (var i = 0; i < teams.length; i++) {
    drivers += teams[i].driver1_name + "|" + teams[i].driver2_name + "|";
  }
  return drivers.slice(0, -1) + ")";
}

export default function App() {

  return (

    <div>
      
      <Router forceRefresh={true}>
        <Navigation />
        <Switch>
          
          <Route exact path="/formula-one-stat/" >
              <Main />
          </Route>

          <Route path={"/formula-one-stat/drivers/:driver" + driver_names()}>
            <Driver />
          </Route>

          <Route path="/formula-one-stat/drivers" exact={true}>
              <Drivers />
          </Route>

          <Route path="/formula-one-stat/articles">
              <Articles />
          </Route>

          <Route path="/formula-one-stat/register">
              <RegisterForm />
          </Route>

          <Route path="/formula-one-stat/calendar">
            <MyCalendar />
          </Route>

          <Route path="/formula-one-stat/faq">
            <FAQ />
          </Route>

          <Route path="/formula-one-stat/game">
            <Game />
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}
