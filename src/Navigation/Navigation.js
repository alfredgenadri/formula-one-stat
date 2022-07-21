
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Button} from 'antd'
import './Navigation.css'
import {  Link } from "react-router-dom";
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
                        <Link to="/">
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
                        <Link to="/drivers" className='nav-link'>Drivers & Teams</Link>
                        <Link to="/articles" className='nav-link'>Latest News</Link>
                        <Link to="/calendar" className='nav-link'>Calendar</Link>
                        <Link to="/game" className='nav-link'>Memory</Link>
                        <Link to="/faq" className='nav-link'>FAQ</Link>
                    </Nav>
                    <Nav>
                        <Button><Link to="/register">Register</Link></Button>
                        <Nav.Link to="/"><LoginModal /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
    );
}
 
export default Navigation;