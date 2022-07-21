
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
                        <Link to="/formula-one-stat">
                    <img
                        alt=""
                        src={images['logo.png']}
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                        />{' '}
                    </Link>
                        
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/formula-one-stat/drivers" className='nav-link'>Drivers & Teams</Link></Nav.Link>
                        <Nav.Link><Link to="/formula-one-stat/articles" className='nav-link'>Latest News</Link></Nav.Link>
                        <Nav.Link><Link to="/formula-one-stat/calendar" className='nav-link'>Calendar</Link></Nav.Link>
                        <Nav.Link><Link to="/formula-one-stat/game" className='nav-link'>Memory</Link></Nav.Link>
                        <Nav.Link><Link to="/formula-one-stat/faq" className='nav-link'>FAQ</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Button><Link to="/formula-one-stat/register">Register</Link></Button></Nav.Link>
                        <Nav.Link><LoginModal /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
    );
}
 
export default Navigation;