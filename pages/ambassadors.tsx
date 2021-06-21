import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import AMBASSADORS from "../data/data_people";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";

import {useState, useEffect} from 'react';

interface Props {
    key: any,
    window?: () => Window;
}

function AmbassadorView(props) {
    const {person, width} = props;
    const setWidth = width ? width : 350;
    return (
        <Card style={{background: '#E0EEEA', display: 'inline-block', margin: 5}}>
            <CardContent style={{width: setWidth, overflow: 'hidden'}}>
                <div style={{display: 'flex'}}>
                    <div style={{maxHeight: 200, maxWidth: 150, overflow: 'hidden'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img src={'/ecea' + person.picture} alt={'student profile'} height={200}/>
                        </div>
                    </div>
                    <div style={{flex: 1, marginLeft: 10}}>
                        <Typography variant={'h6'}>
                            {person.name}
                        </Typography>
                        {person.major ?
                            <Typography variant={"subtitle2"}>
                                {person.major}
                            </Typography> : <></>
                        }
                        {person.graduation ?
                            <Typography variant={"subtitle2"}>
                                {person.graduation}
                            </Typography> : <></>
                        }
                        {person.quote ?
                            <Typography variant={"body2"} style={{fontStyle: 'italic', marginTop: 10}}>
                                <q>
                                    {person.quote}
                                </q>
                            </Typography> : <></>
                        }
                    </div>
                </div>
            </CardContent>
            <CardActions>
                {person.links.map((link, j) => {
                    return (
                        <Button
                            href={link.link}
                            size="small"
                            key={j + person.name + 'link'}>{link.name}
                        </Button>
                    );
                })}
            </CardActions>
        </Card>
    );
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                const width = window.innerWidth;
                setWindowSize({
                    width: getAmbassadorWidth(width > 1080 ? 1080 : width)
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}

function getAmbassadorWidth(screenWidth) {
    const minWidth = 350;
    let numPeople = Math.floor(screenWidth / minWidth);
    let ambassadorWidth = screenWidth;
    if (numPeople > 1) {
        ambassadorWidth /= numPeople;
    } else {
        numPeople = 2.8;
    }
    return Math.floor(ambassadorWidth) - Math.floor(10 * numPeople);
}

export default function AboutPage(props: Props) {
    const size = useWindowSize();
    AMBASSADORS.sort((a, b) => {
        if (a.name == "Sara Hui") {
            return -1;
        } else if (b.name == "Sara Hui") {
            return 1;
        }
        return a.name.localeCompare(b.name);
    });
    return (
        <Layout maxWidth={1080}>
            <>
                <Head>
                    <title>ECEA: About</title>
                </Head>

                {
                    size.width ?
                        <div>
                            <Typography variant={"h5"} style={{marginLeft: 5}}>Ambassadors</Typography>
                            <div style={{margin: '0 auto', fontSize: 0}}>
                                {AMBASSADORS.map((item, i) => {
                                    return (
                                        <AmbassadorView key={i} person={item} width={size.width}/>
                                    )
                                })}
                            </div>
                        </div>
                        : <></>
                }
            </>
        </Layout>
    )
}



