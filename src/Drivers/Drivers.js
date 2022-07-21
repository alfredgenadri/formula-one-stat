import teams from './teams.json'
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Drivers.css'
import { Link} from "react-router-dom";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

const Drivers = () => {

    return ( 
        <div>
            <h1 className='pt-3' style={{textAlign: "center", color: "rgb(225, 6, 0)"}}>Drivers & Teams</h1>
            <hr style={{width: "30%", margin: "0 auto", border: "none", height: "1px", backgroundColor: "#333"}}></hr>
        <Container className="align-items-center">
            <Row xs={2} md={3} className="gy-4 pt-4">
        {teams.map((team, idx) => (
            <Col key={idx}>
            
            <Card style={{backgroundColor:team.team_color}}>
            <Card.Title><img alt="constructor-logo" src={images[team.team_img]} className="team-logo"></img></Card.Title>
            <Card.Title style={{color:'white'}} className='text-center'>{team.team}</Card.Title>
                <Row key={team.team}>
                    <Col key={team.driver1_name}><Link to={"/drivers/" + team.driver1_name}><Card.Img alt="driver-1-picture" src={images[team.driver1_img]} /></Link></Col>
                    <Col key={team.driver2_name}><Link to={"/drivers/" + team.driver2_name}><Card.Img alt="driver-2-picture" src={images[team.driver2_img]} /></Link></Col>
                </Row>
            </Card>
            </Col>
        ))}
        </Row>

        </Container> 
        </div>
    );
}
 
export default Drivers;