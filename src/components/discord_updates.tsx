import Typography from "@material-ui/core/Typography";
import {CardContent, Chip, Divider} from "@material-ui/core";
import {Col, Container, Row} from "react-grid-system";
import {hashCode, intToRGB} from "../utils";
import {Author} from "./author";
import {getPictureUrl} from "../data/data_people";
import React from "react";
import dateformat from "dateformat";

export function Updates(props) {
    const {content} = props;
    if (content === undefined) {
        return (
            <></>
        )
    }
    if (content.length === 0) {
        return (
            <div style={{margin: 10}}>
                <Typography variant="h5" component="h2">
                    Updates
                </Typography>
                <Divider light style={{marginTop: 5, marginBottom: 5}}/>
                <Typography variant="body1" style={{margin: '0 auto', padding: 20, textAlign: 'center'}}>
                    No New Updates
                </Typography>
            </div>
        )
    }

    return (
        <div style={{margin: 10}} className={'dark'}>
            <Typography variant="h5" component="h2">
                Updates
            </Typography>
            <Divider light style={{marginTop: 5, marginBottom: 5}}/>
            <Container style={{width: "100%"}}>
                <Row>
                    {content.map((item, i) => {
                        let now = new Date(item.date);
                        const date = dateformat(now, 'dddd, mmmm dS, yyyy h:MM TT');
                        return (
                            <Col sm={4} key={i} style={{minWidth: 250}}>
                                <CardContent>
                                    {
                                        item.label ?
                                            <Chip
                                                style={{
                                                    backgroundColor: `#${intToRGB(hashCode(item.label))}`,
                                                    marginBottom: 5
                                                }}
                                                label={item.label}/>: <></>
                                    }
                                    <div style={{margin: "5px 0"}}>
                                        <Author name={item.author} picture={getPictureUrl(item.author)}/>
                                    </div>
                                    <Typography variant={"body2"}>{date}</Typography>
                                    <Typography variant="h6" component="h2" style={{marginTop: 10}}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant={"body2"}>
                                        <div dangerouslySetInnerHTML={{__html: item.content}}/>
                                    </Typography>
                                </CardContent>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <div style={{display: 'flex', marginLeft: -5, marginRight: -5, flexWrap: 'wrap'}}>
            </div>
        </div>
    )
}