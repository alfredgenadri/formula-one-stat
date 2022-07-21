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
                    alt="ferrari-f1-car"
                    src={logo}
                    width="200"
                    height="100"
                    className="hook"
                    />
                <h1 className='grab'>THE OFFICIAL FORMULA ONE STAT TRACKER</h1>
                <Button aria-label="Download App" className='button-download-app action-button' size="lg">Download our Mobile App</Button>
            </div>
            <Container className='background-color container'>
                <Row>
                    <Col className='pt-2'>
                        <img  
                            alt="mobile-phones"  
                            src={app}
                        />
                    </Col>
                    <Col className='pt-5'>
                        <a onClick={() => window.open("https://www.apple.com/ca/app-store/", '_blank')}>
                        <img 
                            alt="apple-store-google-play"
                            src={store}
                        />
                        </a>
                        <h3 style={{color: "white", fontFamily: "'Lexend', sans-serif", transform: "translate(10%,40%)"}} className="pt-4">Never Miss Any Updates!</h3>
                    </Col>
                </Row>
            </Container>
            <Outlet />
        </div>
    );
}
 
export default Main;