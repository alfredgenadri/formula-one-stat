
import { useParams } from "react-router-dom";
import stats from "./stats.json"
import "./Driver.css"
import {Container, Row, Col, Image} from 'react-bootstrap'
import points from './points.jpeg'

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

    console.log(driver_stats.Image);

    return (  
        
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <img
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
                        src={images[driver_stats["Team Image"]]}
                        className="pt-5 logo"
                        />

                    <img
                        src={images[driver_stats["Country Image"]]}
                        className=" pt-5 pb-3 logo"
                        />

                    </Col>
                </Row>
        </Container>

        <Container className="bg-color text-white">
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
                <Col>
                    <img src={points} height={1000} width={1000}></img>
                </Col>
            </Row>
        </Container>

    </div>
    


    );
}
 
