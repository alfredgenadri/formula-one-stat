import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation/Navigation';
import Main from './Navigation/Main'
import Drivers from './Drivers/Drivers';
import Articles from './Articles/Articles';
import Article from './Articles/Article';
import Forums from './Forums/Discussion';
import Calendar from './Calendar/Calendar';
import Driver from './Drivers/Driver';
import teams from './Drivers/teams.json'

import SignUp from './Navigation/SignUp';
import Login from './Navigation/Login';

import { BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import LoginSignUpModal from './Navigation/LoginSignUpModal';

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
      <Navigation />

      <Router>
        <Switch>
          
          <Route exact path="/" >
              <Main />
          </Route>

          <Route path={"/drivers/:driver" + driver_names()}>
            <Driver />
          </Route>

          <Route path="/drivers">
              <Drivers />
          </Route>

          <Route path="/articles">
              <Articles />
          </Route>

          <Route path="/login">
              <LoginSignUpModal></LoginSignUpModal>
          </Route>

          <Route path="/signup">
              
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}
