import { Tab, Col, Row, ListGroup, Image , Container} from "react-bootstrap";
import './Articles.css'
import { Link, Router} from 'react-router-dom';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

const Articles = () => {
    return (  

        <Container className="p-0">
            <Row className="border justify-content-center mb-4">
                <Col className="py-2 col-5">
                    <div className="article-preview">
                        <a href="/article1"><h4>Mercedes: Zero complacency over F1 2022 100% finishing record</h4></a>
                        <p>Mercedes insists it is not getting complacent about its finishing record in Formula 1 this year, despite rivals Red Bull and Ferrari having big reliability headaches.</p>
                    </div>
                </Col>
                <Col className="py-2 col-4">
                    <Image src={images['article1.jpg']} thumbnail className="article-img"></Image>
                </Col>
            </Row>
            <Row className="border justify-content-center mb-4">
                <Col className="py-2 col-5">
                    <div className="article-preview">
                        <h4>Latifi: "Puzzling" my Williams F1 car can’t match what Albon is doing</h4>
                        <p>Nicholas Latifi finds it “puzzling” that he does not feel capable of matching team-mate Alex Albon’s level of performance with the Williams Formula 1 car at the moment.</p>
                    </div>
                </Col>
                <Col className="py-2 col-4">
                    <Image src={images['article2.jpg']} thumbnail className="article-img"></Image>
                </Col>
            </Row>
            <Row className="border justify-content-center mb-4">
                <Col className="py-2 col-5">
                    <div className="article-preview">
                        <h4>Liberty: Nice GP not designed to pressure Monaco F1 race</h4>
                        <p>Liberty Media CEO Greg Maffei insists that talk of moving the French Grand Prix to the city of Nice is not a way of putting pressure on Monaco for a future spot on the Formula 1 calendar.</p>
                    </div>
                </Col>
                <Col className="py-2 col-4">
                    <Image src={images['article3.jpg']} thumbnail className="article-img"></Image>
                </Col>
            </Row>
            <Row className="border justify-content-center mb-4">
                <Col className="py-2 col-5">
                    <div className="article-preview">
                        <h4>Aston Martin set for further F1 car upgrade at Silverstone</h4>
                        <p>Aston Martin is set to bring another Formula 1 car update to Silverstone next weekend as it looks to build on the progress made with its Barcelona package.</p>
                    </div>
                </Col>
                <Col className="py-2 col-4">
                    <Image src={images['article4.jpg']} thumbnail className="article-img"></Image>
                </Col>
            </Row>
            <Row className="border justify-content-center mb-4">
                <Col className="py-2 col-5">
                    <div className="article-preview">
                        <h4>Gasly formally confirmed at AlphaTauri F1 for 2023 season</h4>
                        <p>Pierre Gasly will remain with AlphaTauri for the 2023 season after the Formula 1 team officially confirmed him as part of its line-up for next year.</p>
                    </div>
                </Col>
                <Col className="py-2 col-4">
                    <Image src={images['article5.jpg']} thumbnail className="article-img"></Image>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Articles;