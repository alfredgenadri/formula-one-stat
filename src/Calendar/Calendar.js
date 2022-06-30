import React, {useRef, useState} from "react";
import Calendar from 'rc-year-calendar';
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

const currentYear = "2022";
const eventArray = [
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


const EventCalendar = () => {
    const handleDayHover = (e) => {
        if (e.events.length > 0) {
            console.log(e.element.firstChild, e.element)
            return (
                <OverlayTrigger
                    show={true}
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Tooltip on <strong>top</strong>.
                        </Tooltip>
                    }
                >
                    {e.element.firstChild}
                </OverlayTrigger>
            )
        }
    }

    return (
        <React.Fragment>
            <Calendar
                dataSource={eventArray}
                minDate={new Date("01-01-2019")}
                onDayEnter={e => handleDayHover(e)}
            />
        </React.Fragment>
    );
}

export default EventCalendar;