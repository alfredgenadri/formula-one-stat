import React from "react";
import ReactDOM from "react-dom";
import Calendar from "rc-year-calendar";
import moment from "moment";
import { Tooltip } from "react-bootstrap";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';


const currentYear = new Date().getFullYear();
const date = new Date();
console.log(date);

const dataSource1 = [
    {
        id: 0,
        name: 'Canadian Grand Prix',
        location: 'Montreal, Quebec, Canada',
        description: "description",
        startDate: new Date(currentYear, 2, 28),
        endDate: new Date(currentYear, 2, 28),
        color: "#dc3545"
    },
    {
        id: 1,
        name: 'France Grand Prix',
        location: 'Paris, France',
        description: "description",
        startDate: new Date(currentYear, 2, 16),
        endDate: new Date(currentYear, 2, 16),
        color: "#ffc107"
    }
]

class MyCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      style: "background",
      dataSource: dataSource1,
      currentDay: new Date()
    };
  }

  customDayRenderer(element, date) {
    if (date === new Date()) {
      element.style.backgroundColor = "green";
    }

    if (
      moment(date).format("YYYYMMDD") ===
      moment(this.state.currentDay).format("YYYYMMDD")
    ) {
      element.style.backgroundColor = "green";
    }

    element.style.backgroundColor = "green";
    console.log(date);
  }

  handleDayEnter(e) {
    if (e.events.length > 0) {
      var content = "";

      for (var i in e.events) {
        content += e.events[i].name;
        content += " in "
        content += e.events[i].location
      }

      if (this.tooltip != null) {
        this.tooltip.destroy();
        this.tooltip = null;
      }

      this.tooltip = tippy(e.element, {
        placement: "right",
        content: content,
        animateFill: false,
        animation: "shift-away",
        arrow: true
      });
      this.tooltip.show();
    }
  }

  onDayClick = (d, e) => {
    const lastDate = this.state.currentDay;
    console.log(lastDate);
    const date = d.date;
    console.log(date);
    this.setState({
      currentDay: date
    });
  };

  render() {
    return (
      <div className="pt-4">
        <h1 className='pt-3' style={{textAlign: "center", color: "rgb(225, 6, 0)"}}>Race Calendar</h1>
        <hr style={{width: "30%", margin: "0 auto", border: "none", height: "1px", backgroundColor: "#333"}}></hr>
        <div className="pb-4"></div>
        <Calendar
          dataSource={this.state.dataSource}
          style={{ style: "custom" }}
          onDayEnter={(e) => this.handleDayEnter(e)}
          onDayClick={this.onDayClick}
          CustomDayRenderer={(element) => this.state.customDayRenderer(element)}
        />
      </div>
    );
  }
}

export default MyCalendar;