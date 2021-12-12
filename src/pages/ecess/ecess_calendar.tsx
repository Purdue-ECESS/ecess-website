import React, {useEffect, useState} from "react";
import {Typography, CircularProgress, Button, withStyles} from "@material-ui/core";
import CalendarEvent from "../../components/widgets/calendar_event";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/calendar.css';

function getCalendarEvents(date: Date | undefined = undefined) : Promise<any>{
    let url = "https://ecess-api.matthewwen.com/calendar/ambassadors/main"
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

const PurdueButton = withStyles({root: {backgroundColor: "#CEB888", color: "#000000"}})(Button);

export default function ECESSCalendarPage() {
    const date = new Date();
    date.setHours(0,0,0,0);
    const [value, setValue] = useState(date);
    const [todayEvents, setTodayEvents] = useState(undefined);
    const [laterEvents, setLaterEvents] = useState(undefined);

    useEffect(() => {
        if (todayEvents === undefined) {
            getCalendarEvents(value).then(response => {
                setTodayEvents(response);
            });
        }
        else if (laterEvents === undefined) {
            getCalendarEvents().then(response => {
                setLaterEvents(response);
            });
        }
    })



    return (
        <>
            <div style={{backgroundColor: '#222'}}>
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
                <div>
                    <div style={{display: 'flex', margin: 5}}>
                        <div style={{flex: 1}}/>
                        <PurdueButton color={"primary"} onClick={() => {
                            const date = new Date();
                            date.setHours(0, 0, 0, 0);
                            setValue(date);
                            setTodayEvents(undefined);
                        }}>Today</PurdueButton>

                    </div>
                    <Calendar
                        className={"ecea-calendar"}
                        onChange={(param) => {
                            setValue(param);
                            setTodayEvents(undefined);
                        }}
                        value={value}
                    />

                </div>
                <div style={{flex: 1, marginTop: 10, maxWidth: "100%", minWidth: 250}}>
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
                        laterEvents  ? (
                            laterEvents.length > 0 ?
                            laterEvents.map(item => (
                            <CalendarEvent
                                key={item.id}
                                item={item}
                            /> )): <Typography style={{textAlign: 'center'}}>No other events the reset of the semester</Typography>
                            ): <div style={{display: 'flex', justifyContent: 'center'}}>
                                <CircularProgress />
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

