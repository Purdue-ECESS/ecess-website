import React from "react";
import {Typography} from "@material-ui/core";

// const API_KEY = ""

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
            }
        ];
        return (
            <div>
                {/*<Calendar apiKey={API_KEY} calendars={calendars} />*/}
                <iframe src={"https://calendar.google.com/calendar/embed?src=bg4e1frm2kqlieki1q1tr5j1kg%40group.calendar.google.com&ctz=America%2FChicago"}
                        style={{width: '100%', height: '100vh'}}/>
            </div>
        )
    }
}

export default function CalendarPage() {
    return (
        <>
            <div style={{backgroundColor: '#EEEEEE'}}>
                <Typography variant={"h5"} style={{padding: 20, textAlign: 'center'}}>Calendar</Typography>
            </div>
            <div style={{margin: '0 auto', maxWidth: 1080}}>
                <CalendarApp/>
            </div>
        </>
    )
}

