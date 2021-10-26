import {Card, CardContent, Chip, Typography} from "@material-ui/core";
import React from "react";
import moment from "moment";


export default function CalendarEvent(props) {
    const {item} = props;
    const startDate = moment(item.start.dateTime);
    const endDate = moment(item.end.dateTime);
    return (
        <Card style={{minWidth: 300, margin: 5}}>
            <CardContent>
                <div style={{overflowX: "scroll"}}>
                    <Chip style={{backgroundColor: '#ffa0a0'}} label={startDate.format('MMM Do')}/>
                    <Typography variant={"h6"}>{item.title}</Typography>
                    <Typography>{startDate.format('h:mm A')} - {endDate.format('h:mm A')}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}
