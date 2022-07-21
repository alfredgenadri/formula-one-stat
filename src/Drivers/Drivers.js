import teams from './teams.json'
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Drivers.css'
import { Link } from "react-router-dom";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

const Drivers = () => {

    return ( 
        <Container className="align-items-center">
            <Row xs={2} md={3} className="gy-4 pt-4">
        {teams.map((team, idx) => (
            <Col>
            
            <Card style={{backgroundColor:team.team_color}}>
            <Card.Title><img src={images[team.team_img]} className="team-logo"></img></Card.Title>
            <Card.Title style={{color:'white'}} className='text-center'>{team.team}</Card.Title>
                <Row>
                    <Col><Link to={"/drivers/" + team.driver1_name}><Card.Img src={images[team.driver1_img]} /></Link></Col>
                    <Col><Link to={"/drivers/" + team.driver2_name}><Card.Img src={images[team.driver2_img]} /></Link></Col>
                </Row>
            </Card>
            </Col>
        ))}
        </Row>

        </Container> 
    );
}
 
export default Drivers;