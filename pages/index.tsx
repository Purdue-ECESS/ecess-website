import React from "react";
import Layout from "../components/layout";
import Head from 'next/head'
import Typography from "@material-ui/core/Typography";
import {Card, CardContent, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

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
                width: "100%", overflow: 'hidden', maxHeight: 450}}>
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

export default function IndexPage(props: Props) {
    const classes = useStyles();
    return (
        <Layout>
            <>
                <Head>
                    <title>ECEA: Home</title>
                </Head>
                <WelcomeImage />
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Follow Us
                        </Typography>
                        <Divider light style={{marginTop: 5, marginBottom: 5}}/>
                        <div style={{display: "flex"}}>
                            <div style={{minWidth: 250, flex: 1}}>
                                <Typography className={classes.pos} color="textSecondary" gutterBottom>
                                    DISCORD
                                </Typography>
                            </div>
                            <div style={{minWidth: 250, flex: 1}}>
                                <Typography className={classes.pos} color="textSecondary" gutterBottom>
                                    INSTAGRAM
                                </Typography>
                                <a href={'https://www.instagram.com/purdue_ecea/'}>
                                    @purdue_ecea
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </>
        </Layout>
    )
}