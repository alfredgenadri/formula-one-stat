import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation/Navigation';
import Main from './Navigation/Main'
import Drivers from './Drivers/Drivers';
import Articles from './Articles/Articles';
import Forums from './Forums/Discussion';
import Driver from './Drivers/Driver';
import teams from './Drivers/teams.json'

import { HashRouter as Router, Route, Routes} from "react-router-dom";
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
      
      <Router>
              
        <Navigation />
        <Routes>
          
          <Route exact path="/" element={<Main/>}></Route>

          <Route path={"/drivers/:driver" + driver_names()} element={<Driver />}>
          </Route>

          <Route path="/drivers" element={<Drivers/>}>
          </Route>

          <Route path="/articles" element={<Articles/>}>
          </Route>

          <Route path="/register" element={<RegisterForm/>}>
          </Route>

          <Route path="/calendar" element={<MyCalendar/>}>
          </Route>

          <Route path="/faq" element={<FAQ/>}>
          </Route>

          <Route path="/game" element={<Game/>}>
          </Route>

        </Routes>
      </Router>
      

    </div>
  );
}
