/* eslint-disable no-undef */
import React from "react";

import "../../App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { fetchCalEvents } from "../../apis/server";

const localizer = momentLocalizer(moment);
class CalViewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      eventsList: [
        {
          title: "",
          start: "",
          end: "",
        },
      ],
    };
  }
  componentDidMount() {
    let calData = [];
    fetchCalEvents()
      .then((data) => {
        data.forEach((element) => {
          let calDataObj = {
            title: String,
            start: String,
            end: String,
          };
          calDataObj.title = element.title;
          calDataObj.start = element.start_date.replace(/-/g, "/");
          calDataObj.end = element.end_date.replace(/-/g, "/");
          calData.push(calDataObj);
        });

        this.setState({ eventsList: calData });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Calendar</h2>
        {this.state.eventsList && this.state.eventsList.length > 0 ? (
          <Calendar
            localizer={localizer}
            events={this.state.eventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        ) : null}
      </div>
    );
  }
}

export default CalViewComponent;
