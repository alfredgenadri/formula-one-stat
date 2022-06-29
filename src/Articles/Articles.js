import { Tab, Col, Row, ListGroup, Image } from "react-bootstrap";
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

const Articles = () => {
    return (  
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#article1">
        <Row>
            <Col sm={6}>
            <ListGroup>
                <ListGroup.Item action href="#article1">
                    <Row>
                        <Col>
                            <Image src={images['article1.jpg']} thumbnail></Image>
                        </Col>
                        <Col>
                            <h4>Mercedes: Zero complacency over F1 2022 100% finishing record</h4>
                            <p>Mercedes insists it is not getting complacent about its finishing record in Formula 1 this year, despite rivals Red Bull and Ferrari having big reliability headaches.</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action href="#article2">
                    <Row>
                        <Col>
                            <Image src={images['article2.jpg']} thumbnail></Image>
                        </Col>
                        <Col>
                            <h4>Latifi: "Puzzling" my Williams F1 car can’t match what Albon is doing</h4>
                            <p>Nicholas Latifi finds it “puzzling” that he does not feel capable of matching team-mate Alex Albon’s level of performance with the Williams Formula 1 car at the moment.</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action href="#article3">
                    <Row>
                        <Col>
                            <Image src={images['article3.jpg']} thumbnail></Image>
                        </Col>
                        <Col>
                            <h4>Liberty: Nice GP not designed to pressure Monaco F1 race</h4>
                            <p>Liberty Media CEO Greg Maffei insists that talk of moving the French Grand Prix to the city of Nice is not a way of putting pressure on Monaco for a future spot on the Formula 1 calendar.</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action href="#article4">
                    <Row>
                        <Col>
                            <Image src={images['article4.jpg']} thumbnail></Image>
                        </Col>
                        <Col>
                            <h4>Aston Martin set for further F1 car upgrade at Silverstone</h4>
                            <p>Aston Martin is set to bring another Formula 1 car update to Silverstone next weekend as it looks to build on the progress made with its Barcelona package.</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action href="#article5">
                    <Row>
                        <Col>
                            <Image src={images['article5.jpg']} thumbnail></Image>
                        </Col>
                        <Col>
                            <h4>Gasly formally confirmed at AlphaTauri F1 for 2023 season</h4>
                            <p>Pierre Gasly will remain with AlphaTauri for the 2023 season after the Formula 1 team officially confirmed him as part of its line-up for next year.</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col sm={6}>
                <Tab.Content>
                    <Tab.Pane eventKey="#article1">
                    https://www.motorsport.com/f1/news/
                    </Tab.Pane>
                    <Tab.Pane eventKey="#article2">
                    </Tab.Pane>
                    <Tab.Pane eventKey="#article3">
                    </Tab.Pane>
                    <Tab.Pane eventKey="#article4">
                    </Tab.Pane>
                    <Tab.Pane eventKey="#article5">
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    );
}
 
export default Articles;