import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';
import {Card, CardContent, Typography} from "@material-ui/core";

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
            </div>
        )
    }
}

export default function CalendarPage() {
    const [value, setValue] = useState(new Date());
    return (
        <>
            <div style={{backgroundColor: '#CEB888'}}>
                <Typography variant={"h5"} style={{padding: 20, textAlign: 'center'}}>Calendar</Typography>
            </div>
            <div style={{
                display: "flex",
                flexWrap: 'wrap',
                maxWidth: 1080,
                margin: '0 auto',
                padding: 10 ,
                justifyContent: "center",
                overflowX: "scroll"
            }}>
                <Card
                    style={{maxWidth: '100%', margin: 10, minWidth: 300}}
                >
                    <CardContent>
                        <Calendar
                            className={"ecea-calendar"}
                            onChange={(param) => {
                                // do api call with param
                                setValue(param);
                            }}
                            value={value}
                        />
                    </CardContent>
                </Card>
                <div style={{flex: 1, marginTop: 10, maxWidth: "100%"}}>
                    <Card style={{minWidth: 300}}>
                        <CardContent>
                            <div style={{overflowX: "scroll"}}>
                                { value.toString() }
                                <Typography>This is where we can put a calendar event</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/*<CalendarApp/>*/}
            </div>
        </>
    )
}

const styles = {
    calendar: {
        border: undefined
    }
}

