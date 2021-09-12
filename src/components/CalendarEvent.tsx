import {Card, CardContent, Typography} from "@material-ui/core";
import React from "react";

export default function CalendarEvent(props) {
    const {item} = props;
    const startDate = new Date(item.start.dateTime);
    console.log(startDate);
    return (
        <Card style={{minWidth: 300}}>
            <CardContent>
                <div style={{overflowX: "scroll"}}>
                    <Typography>Matthew Wen Was Here</Typography>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.start.dateTime}</Typography>
                    <Typography>{item.end.dateTime}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}
