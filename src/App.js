import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';
import Main from './Navigation/Main'
import Drivers from './Drivers/Drivers';
import Articles from './Articles/Articles';
import Article from './Articles/Article';
import Forums from './Forums/Discussion';
import Calendar from './Calendar/Calendar';
import Driver from './Drivers/Driver';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (

    <div>

<Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/article1" component={Article} />
      <Route path="/verstappen" component={Driver} />
    </div>
  </Router>

<Navigation></Navigation>
      <Main></Main>

      <hr  style={{
        color: '#000000',
        backgroundColor: '#000000',
        height: 10,
        borderColor : '#000000'
      }}/>

      <Drivers></Drivers>

      <hr  style={{
        color: '#000000',
        backgroundColor: '#000000',
        height: 10,
        borderColor : '#000000'
      }}/>

      <Articles></Articles>

      

    </div>
  );
}

export default App;
