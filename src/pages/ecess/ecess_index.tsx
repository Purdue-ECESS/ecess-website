import {SocialMedia} from "../../components/social_media";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Button} from "@material-ui/core";


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

export function ECESSHome() {
    const classes = useStyles();
    return (
        <div style={{maxWidth: 1080, margin: "0 auto"}}>
            <Container>
                <Card style={{backgroundColor: "black"}}>
                    <Card.Body>
                        <img src={process.env.PUBLIC_URL + "/static/ecess_logo.png"} alt="home pic" className="img-fluid" />
                        {/*<div style = {{textAlign: "center", position: "absolute"}}>*/}
                        {/*    <Typewriter*/}
                        {/*        options={{*/}
                        {/*            strings: [*/}
                        {/*                "<h5 style='color: #CEB888'>Welcome to ECESS</h5>",*/}
                        {/*                "<h5 style='color: #CEB888'>ECE Student Society</h5>",*/}
                        {/*                "<h5 style='color: #CEB888'>Purdue University</h5>",*/}
                        {/*            ],*/}
                        {/*            autoStart: true,*/}
                        {/*            loop: true,*/}
                        {/*            delay: 100, // SET TO USE A 1 SECOND DELAY*/}
                        {/*            deleteSpeed: 50,*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </Card.Body>
                </Card>
                <Row>
                </Row>
            </Container>
            <Card>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "center" }}>
                        ECESS is constantly looking for new applicants. If you are interested,
                        please fill out the interest form below or scan the QR code provided.
                        Committees are detailed in the Committees page of the Website. Thank you!
                    </p>
                </blockquote>
                <div style={{margin: "0 auto", justifyContent: "center", alignContent: "center", padding: 20}}>
                    <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdJiB-CY9fsSLUF1b204HNTQDN59xNzK5JYUp2Z7KxtybsWGg/viewform" target="_blank" color={"primary"}>
                        {"Apply Here!"}
                    </Button>
                    <Button href="https://docs.google.com/presentation/d/1i4AwbaDw5L7QFtBHDrKgNnoDBB-9ouSqy-YSwgM5oHM/edit?usp=sharing" target="_blank" color={"primary"}>
                        {"Callout Slides!"}
                    </Button>
                </div>
            </Card>
            <SocialMedia
                materialClass={classes}
                discord={{name: 'ECESS Discord ', link: 'https://discord.gg/g2frztsC8W'}}
                instagram={"purdue_ecess"}
                email={['ecess@purdue.edu']}
            />
        </div>)
}
