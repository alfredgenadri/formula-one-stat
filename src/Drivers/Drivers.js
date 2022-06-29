import teams from './teams.json'
import { Container, Row, Col, Card } from 'react-bootstrap';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

const Drivers = () => {

    return (  
        <Row xs={2} md={3} className="g-4">
        {teams.map((team, idx) => (
            <Col>
            <Card>
                <Row>
                    <Col><Card.Img src={images['hamilton.png']} /></Col>
                    <Col><Card.Img src={images['hamilton.png']} /></Col>
                </Row>
                <Card.Body>
                <Card.Title>{team.team}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    );
}
 
export default Drivers;