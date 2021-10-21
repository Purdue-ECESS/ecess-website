import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {CardContent, Chip, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import { Container, Row, Col } from 'react-grid-system';
import {Discord, Instagram, Gmail} from "@icons-pack/react-simple-icons";
import {Author} from "../components/author";
import {getPictureUrl} from "../data/data_people";
import {hashCode, intToRGB} from "../utils";
import dateformat from "dateformat";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function WelcomeImage() {
    return (
        <div style={{display: 'block',}}>
            <div style={{
                borderRadius: "0px 0px 25px 25px",
                width: "100%", overflow: 'hidden', maxHeight: 450, minHeight: 50}}>
                <img
                    style={{
                        position: 'relative', width: "100%", minWidth: "500px", marginTop: "-10%"}}
                    src={process.env.PUBLIC_URL + "/static/src/4-16-2021-headshots/4d5b0e835542d04b1615a6cec95aa1f8.jpg"}
                    alt={"ECE Ambassadors"} />
            </div>

            <div style={{
                position: 'relative',
                marginTop: "-50px",
                width: "90%",
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center', zIndex: 100}}>
                <div
                    style={{display: 'inline-block',
                        borderRadius: '25px',
                        padding: 5,
                        backgroundColor: '#CEB888', maxWidth: 550, margin: '0 auto'}}>
                    <Typography variant={'subtitle1'}>
                        Mission Statement
                    </Typography>
                    <Typography variant={'subtitle2'}>
                        ECE Ambassadors mission is to spread knowledge about Purdue’s ECE program to prospective and current students alike.
                    </Typography>
                </div>
            </div>
        </div>
    );
}

function SocialMedia(props) {
    const {materialClass} = props;
    return (
        <div style={{margin: 10}}>
            <Typography variant="h5" component="h2">
                Follow Us
            </Typography>
            <Divider light style={{marginTop: 5, marginBottom: 5}}/>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{minWidth: 250, flex: 1, margin: 5}}>
                    <div style={{display: "flex"}}>
                        <Discord size={18} style={{margin: 3}}/>
                        <Typography className={materialClass.pos} color="textSecondary" gutterBottom>
                            DISCORD
                        </Typography>
                    </div>
                    <a href={'https://discord.gg/fmwxACFB2T'}>
                        ECE Ambassadors
                    </a>
                </div>
                <div style={{minWidth: 250, flex: 1, margin: 5}}>
                    <div style={{display: "flex"}}>
                        <Instagram size={18} style={{margin: 3}}/>
                        <Typography className={materialClass.pos} color="textSecondary" gutterBottom>
                            INSTAGRAM
                        </Typography>
                    </div>
                    <a href={'https://www.instagram.com/purdue_ecea/'}>
                        @purdue_ecea
                    </a>
                </div>
                <div style={{minWidth: 250, flex: 1, margin: 5}}>
                    <div style={{display: "flex"}}>
                        <Gmail size={18} style={{margin: 3}}/>
                        <Typography className={materialClass.pos} color="textSecondary" gutterBottom>
                            EMAIL
                        </Typography>
                    </div>
                    <a href={'mailto:eceambassadors@gmail.com'}>
                        eceambassadors@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}

function Updates(props) {
    const {materialClass, content} = props;
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
        <div style={{margin: 10}}>
            <Typography variant="h5" component="h2">
                Updates
            </Typography>
            <Divider light style={{marginTop: 5, marginBottom: 5}}/>
            <Container style={{width: "100%"}}>
                <Row>
                    {content.map((item, i) => {
                        let now = new Date(item.date);
                        const date = dateformat(now, 'dddd, mmmm dS, yyyy h:MM TT');
                        console.log(item.label);
                        return (
                            <Col sm={4} key={i} style={{minWidth: 250}}>
                                <CardContent>
                                    {
                                        item.label ?
                                            <Chip style={{backgroundColor: `#${intToRGB(hashCode(item.label))}`, marginBottom: 5}} label={item.label}/>: <></>
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

export default function IndexPage() {
    const classes = useStyles();
    const [updates, setUpdates] = useState(undefined);
    useEffect(() => {
        if (updates === undefined) {
            fetch("https://ecea-api-source-code.herokuapp.com/bot/announcements",
                {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(response => {
                    setUpdates(response);
                })
                .catch(e => {
                    setUpdates([]);
                    console.log(e);
                });
        }
    }, [updates])
    return (
        <>
            <div style={{maxWidth: 1080, margin: '0 auto'}}>
                <>
                    <WelcomeImage />
                    <SocialMedia materialClass={classes}/>
                    <Updates materialClass={classes} content={updates}/>
                </>
            </div>
        </>
    )
}