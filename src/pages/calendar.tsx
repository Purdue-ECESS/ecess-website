import React, {useEffect, useState} from "react";
import {Card, CardContent, Typography, CircularProgress} from "@material-ui/core";
import CalendarEvent from "../components/CalendarEvent";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';

function getCalendarEvents(date: Date | undefined = undefined) : Promise<any>{
    let url = "https://ecea-api-source-code.herokuapp.com/calendar/ambassadors/main"
    if (date instanceof Date) {
        url += "?day=" + date.toISOString();
    }
    return new Promise((resolve, reject) => {
        fetch(url,
            {
                method: 'GET'
            })
            .then(res => res.json())
            .then(response => {
                resolve(response);
            })
            .catch(e => {
                console.log(e);
                reject([]);
            });
    });
}

export default function CalendarPage() {
    const [value, setValue] = useState(new Date());
    const [todayEvents, setTodayEvents] = useState(undefined);
    const [laterEvents, setLaterEvents] = useState(undefined);

    useEffect(() => {
        if (todayEvents === undefined) {
            getCalendarEvents(value).then(response => {
                setTodayEvents(response);
            });
        }
        if (laterEvents === undefined) {
            getCalendarEvents().then(response => {
                setLaterEvents(response);
            });
        }
    })


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
                <Calendar
                    className={"ecea-calendar"}
                    onChange={(param) => {
                        setValue(param);
                        setTodayEvents(undefined);
                    }}
                    value={value}
                />
                <div style={{flex: 1, marginTop: 10, maxWidth: "100%"}}>
                    {
                        todayEvents ? (
                            todayEvents.length > 0 ?
                                todayEvents.map(item => (
                                    <CalendarEvent
                                        key={item.id}
                                        item={item}
                                    />
                                )):
                                <Typography variant={"body1"} style={{margin: "5", textAlign: "center"}}>
                                    No events on this date
                                </Typography>
                        ) : <div style={{display: 'flex', justifyContent: 'center'}}>
                            <CircularProgress />
                        </div>
                    }
                    <Typography variant={"h6"} style={{padding: "10", textAlign: 'center'}}>Other Upcoming Events</Typography>
                    {
                        laterEvents ? laterEvents.map(item => (
                            <CalendarEvent
                                key={item.id}
                                item={item}
                            />
                        )): <></>
                    }
                </div>
            </div>
        </>
    )
}

