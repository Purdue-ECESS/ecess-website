import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';
import {Card, CardContent, Typography} from "@material-ui/core";
import CalendarEvent from "../components/CalendarEvent";

function getCalendarEvents(): Promise<any> {
    const API_KEY: string = process.env.GOOGLE_CALENDAR_API_KEY || '';
    const CALENDAR_ID = 'bg4e1frm2kqlieki1q1tr5j1kg@group.calendar.google.com';
    const gapi = window["gapi"] || undefined;
    return new Promise((resolve) => {
        gapi.load("client:auth2", async () => {
            await gapi.client.init({
                apiKey: API_KEY
            })
            try {
                const response = await gapi.client.request({
                    'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
                })
                const object = JSON.parse(response.body);
                resolve(object);
            }
            catch (e) {
                console.log(e);
                resolve([]);
            }
        });
    })
}

export default function CalendarPage() {
    const [value, setValue] = useState(new Date());
    const [events, setEvents] = useState(undefined);

    useEffect(() => {
        if (events === undefined) {
            getCalendarEvents().then(response => {
                if (response) {
                    const newEvents = [];
                    for (let i = 0; i < response.items.length; i++) {
                        const item = response.items[i];
                        console.log(item.start);
                        newEvents.push({
                            id: item.id,
                            start: item.start,
                            title: item.summary,
                            end: item.end
                        })
                    }
                    setEvents(newEvents);
                }
            });
        }

    })


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
                                console.log(param);
                                // do api call with param
                                setEvents([]);
                                setValue(param);
                            }}
                            value={value}
                        />
                    </CardContent>
                </Card>
                <div style={{flex: 1, marginTop: 10, maxWidth: "100%"}}>
                    {
                        events ? events.map(item => (
                            <CalendarEvent
                                key={item.id}
                                item={item}
                            />
                        )) : <></>
                    }
                </div>
            </div>
        </>
    )
}

