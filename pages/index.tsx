import React from "react";
import Layout from "../components/layout";
import Head from 'next/head'
import Typography from "@material-ui/core/Typography";
import {Card, CardContent, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Nav} from "react-bootstrap";

interface Props {
    key: any,
    window?: () => Window;
}

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

function WelcomeImage(props) {
    return (
        <div style={{display: 'block',}}>
            <div style={{
                borderRadius: "0px 0px 25px 25px",
                width: "100%", overflow: 'hidden', maxHeight: 450, minHeight: 50}}>
                <img
                    style={{
                        position: 'relative', width: "100%", minWidth: "500px", marginTop: "-10%"}}
                    src={"/ecea/static/src/4d5b0e835542d04b1615a6cec95aa1f8.jpg"}
                    alt={"ECE Ambassadors"} />
            </div>

            <div style={{
                position: 'relative',
                marginTop: "-50px",
                width: "100%",
                textAlign: 'center', zIndex: 100}}>
                <div
                    style={{display: 'inline-block',
                        borderRadius: '25px',
                        padding: 5,
                        backgroundColor: 'gold', maxWidth: 550, margin: '0 auto'}}>
                    <Typography variant={'subtitle1'}>
                        Mission Statement
                    </Typography>
                    <Typography variant={'subtitle2'}>
                        Our purpose is to represent the Electrical and Computer Engineering Department of Purdue University to prospective students, alumni, donors, and the public.
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
                    <Typography className={materialClass.pos} color="textSecondary" gutterBottom>
                        DISCORD
                    </Typography>
                    <a href={'https://discord.gg/FaeMRny4F6'}>
                        ECE Ambassadors
                    </a>
                </div>
                <div style={{minWidth: 250, flex: 1, margin: 5}}>
                    <Typography className={materialClass.pos} color="textSecondary" gutterBottom>
                        INSTAGRAM
                    </Typography>
                    <a href={'https://www.instagram.com/purdue_ecea/'}>
                        @purdue_ecea
                    </a>
                </div>
            </div>
        </div>
    );
}

function Updates(props) {
    const {materialClass, content} = props;
    if (!content || content.length == 0) {
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
            <div style={{display: 'flex', marginLeft: -5, marginRight: -5, flexWrap: 'wrap'}}>
                {content.map((item, i) => {
                    return (
                        <Card key={i} className={materialClass.root} style={{display: 'inline-block', margin: 5,
                            maxWidth: 250}}>
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {item.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )

}

const PURDUE_UPDATES = [
    // {title: 'Testing 1 2 3', content: 'This is content'},
]


export default function IndexPage(props: Props) {
    const classes = useStyles();
    return (
        <Layout>
            <>
                <Head>
                    <title>ECEA: Home</title>
                </Head>
                <WelcomeImage />
                <SocialMedia materialClass={classes}/>
                <Updates materialClass={classes} content={PURDUE_UPDATES}/>
            </>
        </Layout>
    )
}