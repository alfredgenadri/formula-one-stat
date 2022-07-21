
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Button} from 'antd'
import './Navigation.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginModal from './LoginModal';

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
                        <Nav.Link><Link to="/drivers" className='nav-link'>Drivers & Teams</Link></Nav.Link>
                        <Nav.Link><Link to="/articles" className='nav-link'>Latest News</Link></Nav.Link>
                        <Nav.Link><Link to="/calendar" className='nav-link'>Calendar</Link></Nav.Link>
                        <Nav.Link><Link to="/game" className='nav-link'>Memory</Link></Nav.Link>
                        <Nav.Link><Link to="/faq" className='nav-link'>FAQ</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Button><Link to="/register">Register</Link></Button></Nav.Link>
                        <Nav.Link><LoginModal /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
    );
}
 
export default Navigation;