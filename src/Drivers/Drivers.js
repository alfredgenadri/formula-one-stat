import teams from './teams.json'
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Drivers.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

const Drivers = () => {

    return ( 
        <Container className="align-items-center">
            <Row xs={2} md={3} className="gy-4">
        {teams.map((team, idx) => (
            <Col>
            
            <Card style={{backgroundColor:team.teamcolor}}>
            <Card.Title><img src={images[team.teamimg]} className="team-logo"></img></Card.Title>
            <Card.Title style={{color:'white'}} className='text-center'>{team.team}</Card.Title>
                <Row>

                    <Col><a href={team.driver1name}><Card.Img src={images[team.driver1img]} /></a></Col>
                    <Col><a href={team.driver2name}><Card.Img src={images[team.driver2img]} /></a></Col>
                </Row>
            </Card>
            </Col>
        ))}
        </Row>

        </Container> 
    );
}
 
export default Drivers;