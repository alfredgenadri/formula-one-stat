import { Button, Container, Row, Col } from 'react-bootstrap';
import logo from './imgs/logo.png'
import app from './f1app.jpeg'
import store from './app-store-google-play.png'
import './Main.css'
import { Outlet } from 'react-router';

const Main = () => {
    return (  
        <div>
            <div className='background-image-main'>
                <img
                    src={logo}
                    width="200"
                    height="100"
                    className="hook"
                    />
                <h1 className='grab'>THE OFFICIAL FORMULA ONE STAT TRACKER</h1>
                <Button className='button-sign-up action-button' size="lg">Sign Up Now</Button>
                <Button className='button-download-app action-button' size="lg">Download our Mobile App</Button>
            </div>
            <Container className='background-color container'>
                <Row>
                    <Col className='pt-2'>
                        <img    
                            src={app}
                        />
                    </Col>
                    <Col className='pt-5'>
                        <img    
                            src={store}
                        />
                        <h3 style={{color: "white"}}>Never Miss Any Updates!</h3>
                    </Col>
                </Row>
            </Container>
            <Outlet />
        </div>
    );
}
 
export default Main;