import { Button } from 'react-bootstrap';
import logo from './imgs/logo.png'
import './Main.css'

const Main = () => {
    return (  
        <div className='background-image'>
            <img
                alt=""
                src={logo}
                width="200"
                height="100"
                className="hook"
                />
            <h1 className='grab'>THE OFFICIAL FORMULA ONE STAT TRACKER</h1>
            <Button className='button-sign-up action-button' size="lg">Sign Up Now</Button>
            <Button className='button-download-app action-button' size="lg">Download our Mobile App</Button>
      </div>
    );
}
 
export default Main;