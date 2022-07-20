
import {Navbar, Nav, Container} from 'react-bootstrap'
import './Navigation.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

const Navigation = () => {
    return (  
         
            <Navbar className="color-nav" variant="light">
                <Container>
                    <Navbar.Brand>
                    <img
                        alt=""
                        src={images['logo.png']}
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                        />{' '}
                        
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='nav-link'>Teams & Drivers</Nav.Link>
                        <Nav.Link className='nav-link'>Latest News</Nav.Link>
                        <Nav.Link className='nav-link'>Calendar</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
    );
}
 
export default Navigation;