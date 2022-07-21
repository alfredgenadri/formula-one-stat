import { Tab, Col, Row, ListGroup, Image , Container, Button} from "react-bootstrap";
import './Articles.css'
import { Link, Router} from 'react-router-dom';
import Drawer, {DrawerContainer, MainContentContainer} from 'react-swipeable-drawer'
import Discussion from "../Forums/Discussion";


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

const DrawerContent = () => {
    return <div style={{ background: "#fff", height: "100%" }}><Discussion/></div>;
  };

const Articles = () => {
    return (  
        <div>
            <h1 className='pt-3' style={{textAlign: "center", color: "rgb(225, 6, 0)"}}>Latest News</h1>
            <hr style={{width: "30%", margin: "0 auto", border: "none", height: "1px", backgroundColor: "#333"}}></hr>
        

        <Container className="pt-4">
            <Row className="p-3">
                <Col md="6">
                    <span className="inline">
                        <img alt="article-1-mercedes-cars" src={images['article1.jpg']} className="article-img"></img>
                        <div className="block ps-2">
                            <h4 className="pt-2">Mercedes: Zero complacency over F1 2022 100% finishing record</h4>
                            <p>Mercedes insists it is not getting complacent about its finishing record in Formula 1 this year, despite rivals Red Bull and Ferrari having big reliability headaches.</p>
                            <span className="pt-3 inline inner">
                                <Button aria-label="Redirect to Article 1" onClick={() => window.open("https://www.motorsport.com/f1/news/mercedes-zero-complacency-finishing-record/10327978/", '_blank')} variant="light" className="ms-3 me-3 button-red">Read More</Button>
                                <Drawer position="right" size={40}>
                                    {({
                                    position,
                                    size,
                                    swiping,
                                    translation,
                                    mainContentScroll,
                                    toggleDrawer,
                                    handleTouchStart,
                                    handleTouchMove,
                                    handleTouchEnd
                                    }) => (
                                    <div>
                                        <DrawerContainer
                                        position={position}
                                        size={size}
                                        swiping={swiping}
                                        translation={translation}
                                        toggleDrawer={toggleDrawer}
                                        handleTouchStart={handleTouchStart}
                                        handleTouchMove={handleTouchMove}
                                        handleTouchEnd={handleTouchEnd}
                                        drawerContent={<DrawerContent />}
                                        />
                                            <MainContentContainer
                                            translation={translation}
                                            mainContentScroll={mainContentScroll}
                                            >
                                                <Button onClick={toggleDrawer} variant="light" className="button-red">Comment</Button>
                                            </MainContentContainer>
                                        </div>
                                    )}
                                </Drawer>
                            </span>
                        </div>
                    </span>
            
                </Col>
                <Col md="6">
                    <span className="inline">
                        <img alt="article-2-williams-cars" src={images['article2.jpg']} className="article-img"></img>
                        <div className="block ps-2">
                            <h4 className="pt-2">Latifi: "Puzzling" my Williams F1 car can’t match Albon's</h4>
                            <p>Nicholas Latifi finds it “puzzling” that he does not feel capable of matching team-mate Alex Albon’s level of performance with the Williams Formula 1 car at the moment.</p>
                            <span className="pt-3 inline inner">
                                <Button aria-label="Redirect to Article 2" onClick={() => window.open("https://www.motorsport.com/f1/news/latifi-puzzling-my-williams-f1-car-cant-match-what-albon-is-doing/10327981/", '_blank')} variant="light" className="ms-3 me-3 button-red">Read More</Button>
                                <Drawer position="left" size={40}>
                                    {({
                                    position,
                                    size,
                                    swiping,
                                    translation,
                                    mainContentScroll,
                                    toggleDrawer,
                                    handleTouchStart,
                                    handleTouchMove,
                                    handleTouchEnd
                                    }) => (
                                    <div>
                                        <DrawerContainer
                                        position={position}
                                        size={size}
                                        swiping={swiping}
                                        translation={translation}
                                        toggleDrawer={toggleDrawer}
                                        handleTouchStart={handleTouchStart}
                                        handleTouchMove={handleTouchMove}
                                        handleTouchEnd={handleTouchEnd}
                                        drawerContent={<DrawerContent />}
                                        />
                                            <MainContentContainer
                                            translation={translation}
                                            mainContentScroll={mainContentScroll}
                                            >
                                                <Button onClick={toggleDrawer} variant="light" className="button-red">Comment</Button>
                                            </MainContentContainer>
                                        </div>
                                    )}
                                </Drawer>
                            </span>
                        </div>
                    </span>
            
                </Col>
            </Row>
            <Row className="p-3">
                <Col md="6">
                    <span className="inline">
                        <img alt="article-3-monaco-race-track" src={images['article3.jpg']} className="article-img"></img>
                        <div className="block ps-2">
                            <h4 className="pt-2">Liberty: Nice GP not designed to pressure Monaco F1 race</h4>
                            <p>Liberty Media CEO Greg Maffei insists that talk of moving the French Grand Prix to the city of Nice is not a way of putting pressure on Monaco for a future spot on the Formula 1 calendar.</p>
                            <span className="pt-3 inline inner">
                                <Button aria-label="Redirect to Article 3" onClick={() => window.open("https://www.motorsport.com/f1/news/liberty-nice-gp-talk-not-designed-to-pressure-monaco/10327509/", '_blank')} variant="light" className="ms-3 me-3 button-red">Read More</Button>
                                <Drawer position="right" size={40}>
                                    {({
                                    position,
                                    size,
                                    swiping,
                                    translation,
                                    mainContentScroll,
                                    toggleDrawer,
                                    handleTouchStart,
                                    handleTouchMove,
                                    handleTouchEnd
                                    }) => (
                                    <div>
                                        <DrawerContainer
                                        position={position}
                                        size={size}
                                        swiping={swiping}
                                        translation={translation}
                                        toggleDrawer={toggleDrawer}
                                        handleTouchStart={handleTouchStart}
                                        handleTouchMove={handleTouchMove}
                                        handleTouchEnd={handleTouchEnd}
                                        drawerContent={<DrawerContent />}
                                        />
                                            <MainContentContainer
                                            translation={translation}
                                            mainContentScroll={mainContentScroll}
                                            >
                                                <Button onClick={toggleDrawer} variant="light" className="button-red">Comment</Button>
                                            </MainContentContainer>
                                        </div>
                                    )}
                                </Drawer>
                            </span>
                        </div>
                    </span>
            
                </Col>
                <Col md="6">
                    <span className="inline">
                        <img alt="article-4-aston-martin-car" src={images['article4.jpg']} className="article-img"></img>
                        <div className="block ps-2">
                            <h4 className="pt-2">Aston Martin set for further F1 car upgrade at Silverstone</h4>
                            <p>Aston Martin is set to bring another Formula 1 car update to Silverstone next weekend as it looks to build on the progress made with its Barcelona package.</p>
                            <span className="pt-3 inline inner">
                                <Button aria-label="Redirect to Article 4" onClick={() => window.open("https://www.motorsport.com/f1/news/aston-martin-set-for-further-f1-car-upgrade-at-silverstone/10327398/", '_blank')} variant="light" className="ms-3 me-3 button-red">Read More</Button>
                                <Drawer position="left" size={40}>
                                    {({
                                    position,
                                    size,
                                    swiping,
                                    translation,
                                    mainContentScroll,
                                    toggleDrawer,
                                    handleTouchStart,
                                    handleTouchMove,
                                    handleTouchEnd
                                    }) => (
                                    <div>
                                        <DrawerContainer
                                        position={position}
                                        size={size}
                                        swiping={swiping}
                                        translation={translation}
                                        toggleDrawer={toggleDrawer}
                                        handleTouchStart={handleTouchStart}
                                        handleTouchMove={handleTouchMove}
                                        handleTouchEnd={handleTouchEnd}
                                        drawerContent={<DrawerContent />}
                                        />
                                            <MainContentContainer
                                            translation={translation}
                                            mainContentScroll={mainContentScroll}
                                            >
                                                <Button onClick={toggleDrawer} variant="light" className="button-red">Comment</Button>
                                            </MainContentContainer>
                                        </div>
                                    )}
                                </Drawer>
                            </span>
                        </div>
                    </span>
            
                </Col>
            </Row>
            
        </Container>
        </div>




    );
}
 
export default Articles;