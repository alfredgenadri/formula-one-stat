import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';
import Main from './Navigation/Main'
import Drivers from './Drivers/Drivers';
import Articles from './Articles/Articles';
import Forums from './Forums/Discussion';

function App() {
  return (
    <div>
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
