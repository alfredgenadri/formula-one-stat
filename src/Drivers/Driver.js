
import { useParams } from "react-router-dom";
import stats from "./stats.json"
import "./Driver.css"
import {Container, Row, Col, Image} from 'react-bootstrap'
import points from './points.jpeg'
import DriverStats from "./DriverStats";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

function match(d) {

    for (var i = 0; i < stats.length; i++) {
        if (stats[i]["Reference"] == d) {
            return stats[i];
        }
    }
    return null;
}

function showTable(items) {
    const tableRows = [];
    for (let i = 0; i < items.length; i = i + 2) {
      tableRows.push(
        <tr key={items[i] + "-" + items[i + 1] + "-" + i}>
          <td style={{ border: "1px solid black " }}>{items[i]}</td>
          <td style={{ border: "1px solid black " }}>
            {items[i + 1]}
          </td>
        </tr>
      );
    }
    return tableRows;
  }

export default function Driver(){

    let {driver} = useParams();
    let driver_stats = match(driver);


    return (  
        
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <img
                            alt="driver-suit-picture"
                            src={images[driver_stats.Image]}
                            className="pt-5 driver-image pb-3"
                        />
                    </Col>
                    <Col >
                        <div className="pt-5">
                            <div className="driver-number">{driver_stats.Number}</div>
                            <div className="driver-name m-0">{driver_stats.Driver}</div>
                        </div>
                    </Col>
                    <Col>
                    <img
                        alt="driver-constructor-logo"
                        src={images[driver_stats["Team Image"]]}
                        className="pt-5 logo"
                        />

                    <img
                        alt="driver-country-flag"
                        src={images[driver_stats["Country Image"]]}
                        className=" pt-5 pb-3 logo"
                        />

                    </Col>
                </Row>
        </Container>

        {/* <Container className="bg-color text-white">
            <Row>
                <Col className="pt-3" align="center">
                    <table style={{ border: "1px solid black " }}>
                        <tbody>
                        <th style={{ border: "1px solid black " }}>column1</th>
                        <th style={{ border: "1px solid black " }}>column2</th>
                        </tbody>
                        <tbody>{showTable(new Array("Team", driver_stats["Team"], "Country", 
                            driver_stats["Country"], "Place of Birth", driver_stats["Place of Birth"], 
                            "Date of Birth", driver_stats["Date of Birth"], "Price (mil)", driver_stats["Price"]))}</tbody>
                    </table>
                </Col>
                <Col className="pt-3" align="center">
                    <table style={{ border: "1px solid black " }}>
                        <tbody>
                        <th style={{ border: "1px solid black " }}>column1</th>
                        <th style={{ border: "1px solid black " }}>column2</th>
                        </tbody>
                        <tbody>{showTable(new Array("Podiums", driver_stats["Podiums"], "Points", 
                            driver_stats["Points"], "DNFs", driver_stats["DNFs"], 
                            "Overtakes", driver_stats["Overtakes"],
                            "Grand Prix Entries", driver_stats["Grands Prix Entered"], "World Championships", 
                            driver_stats["World Championships"]))}</tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container> */}

        
        {/* <Container className="">
        <Row>
            <Col md={3} className="ms-3 bg-color">
                <Row className="pt-3 justify-content-center">
                    <Col className="key ps-3" md={4}>
                        Qualifying
                    </Col>
                    <Col className="value" md={4}>
                        {driver_stats["Qualifying Streak"]}
                    </Col>
                </Row>
                <Row className="pt-2">
                    <Col className="key ps-3" md={4}>
                        Race
                    </Col>
                    <Col className="value" md={4}>
                        {driver_stats["Racing Streak"]}
                    </Col>
                </Row>
                <Row className="pt-2">
                    <Col className="key ps-3" md={4}>
                        Price (mil)
                    </Col>
                    <Col className="value" md={4}>
                        ${driver_stats["Price"]}
                    </Col>
                </Row>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
        </Row>
        <Row>
            <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
            <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        </Row>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
        </Row>
        </Container> */}

        <Container>
            <Row className="p-5 justify-content-md-center white" >
                <Col md={4} className="bg-color">
                    <Row className="pt-3 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Qualifying Streak
                        </Col>
                        <Col className="value ps-5" md={4}>
                            {driver_stats["Qualifying Streak"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Racing Streak
                        </Col>
                        <Col className="value ps-5" md={4}>
                            {driver_stats["Racing Streak"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Highest Race Finish
                        </Col>
                        <Col className="value ps-5" md={4}>
                            {driver_stats["Highest Race Finish"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            World Championships
                        </Col>
                        <Col className="value ps-5" md={4}>
                            {driver_stats["World Championships"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 pb-3 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Global Podiums
                        </Col>
                        <Col className="value ps-5" md={4}>
                            {driver_stats["Podiums"]}
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className="bg-color">
                    <Row className="pt-3 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Overtakes
                        </Col>
                        <Col className="value" md={4}>
                            {driver_stats["Overtakes"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            DNFs
                        </Col>
                        <Col className="value" md={4}>
                            {driver_stats["DNFs"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Beat Teammate Rate
                        </Col>
                        <Col className="value" md={4}>
                            {Math.floor(driver_stats["Beat Teammate Rate"] * 100)}%
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Top 5 Scorer
                        </Col>
                        <Col className="value" md={4}>
                            {Math.floor(driver_stats["Top 5 Scorer"] * 100)}%
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Grand Prix Entries
                        </Col>
                        <Col className="value" md={4}>
                            {driver_stats["Grands Prix Entered"]}
                        </Col>
                    </Row>
                </Col>
                <Col md={1}></Col>
                <Col className="bg-color" md={3}>
                <Row className="pt-3 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            DOB
                        </Col>
                        <Col className="value" md={4}>
                            {driver_stats["Date of Birth"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            POB
                        </Col>
                        <Col className="value" md={4}>
                            {driver_stats["Place of Birth"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Global Wins
                        </Col>
                        <Col className="value" md={4}>
                            {driver_stats["Wins"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Global Points
                        </Col>
                        <Col className="value" md={4}>
                            {driver_stats["Points"]}
                        </Col>
                    </Row>
                    <Row className="pt-2 justify-content-center align-items-center">
                        <Col className="key ps-3" md={4}>
                            Price (mil)
                        </Col>
                        <Col className="value" md={4}>
                            ${driver_stats["Price"]}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="ps-5 pe-5 justify-content-md-center">
                
                <Col md={12}>
                    <DriverStats />
                </Col>
                
            </Row>
        </Container>

    </div>
    


    );
}
 
