import {Card, CardContent, Chip, Typography} from "@material-ui/core";
import React from "react";
import moment from "moment";
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                    {
                        item.location &&
                        <div style={{display: "flex", flex: "wrap"}}>
                            <LocationOnIcon style={{width: 15}}/>
                            <Typography style={{marginTop: "auto", marginBottom: "auto", fontSize: 10}}>{item.location}</Typography>
                        </div>
                    }
                    <Typography>{startDate.format('h:mm A')} - {endDate.format('h:mm A')}</Typography>
                    {
                        item.content &&
                        <Typography style={{marginTop: 1, marginBottom: 1, fontSize: 12}} variant={"body1"} dangerouslySetInnerHTML={{__html: item.content}}/>
                    }
                </div>
            </CardContent>
        </Card>
    )
}
