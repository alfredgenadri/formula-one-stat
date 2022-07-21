import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class DriverStats extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
            backgroundColor: "rgb(225, 6, 0)",
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Season Progression 2022 - Driver Points",
                padding: 0,
                fontColor: "white"
			},
			axisY: {
				includeZero: true,
                labelFontColor: "white"

			},
            axisX: {
                labelFontColor: "white"

			},
			data: [{
                lineColor: "white",
				type: "line", //change type to bar, line, area, pie, etc
				indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelPlacement: "outside",
                indexLabelFontColor: "white",
				dataPoints: [
					{ x: 1, y: 0 , indexLabel: "Bahrain", color: "black"},
					{ x: 2, y: 25, indexLabel: "Saudi Arabia", color: "black"},
					{ x: 3, y: 25, indexLabel: "Australia", color: "black"},
					{ x: 4, y: 59, indexLabel: "Emilia Romagna", color: "black"},
					{ x: 5, y: 85, indexLabel: "Miami", color: "black"},
					{ x: 6, y: 110, indexLabel: "Spain", color: "black"},
					{ x: 7, y: 125, indexLabel: "Monaco", color: "black"},
					{ x: 8, y: 150, indexLabel: "Azerbaijan", color: "black"},
					{ x: 9, y: 175, indexLabel: "Canada", color: "black"},
					{ x: 10, y: 181, indexLabel: "Great Britain", color: "black"},
					{ x: 11, y: 208, indexLabel: "Austria", color: "black"}
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DriverStats;