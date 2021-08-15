import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyA0rfqzRgQfY8Hut8BT1ZBuLXkQHm9jZu0";

class CalendarApp extends React.Component {
    render() {
        let calendars = [
            {
                calendarId: "bg4e1frm2kqlieki1q1tr5j1kg@group.calendar.google.com",
                color: "#B241D1"
            },
            {
                calendarId: "1t1ggg1uamf194kmrgftse1nk8@group.calendar.google.com",
                color: "#CEB888"
            },
            {
                calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com"
            }
        ];
        let styles = {
            //you can use object styles
            calendar: {
                borderWidth: "3px" //make outer edge of calendar thicker
            },

            //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
            today: css`
            /* highlight today by making the text red and giving it a red border */
            color: red;
            border: 1px solid red;
          `
        };
        return (
            <div>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
                {/*<iframe src={"https://calendar.google.com/calendar/embed?src=bg4e1frm2kqlieki1q1tr5j1kg%40group.calendar.google.com&ctz=America%2FChicago"}*/}
                {/*        style={{width: '100%', height: '100vh'}}/>*/}
            </div>
        )
    }
}

export default function CalendarPage() {
    return (
        <div style={{margin: '0 auto', maxWidth: 1080, textAlign: 'center'}}>
            <CalendarApp/>
        </div>
    )
}

