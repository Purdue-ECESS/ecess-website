import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import AMBASSADORS from "../data/data_people";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";

interface Props {
    key: any,
    window?: () => Window;
}

function AmbassadorView(props) {
    const {person} = props;
    return (
        <Card style={{background: '#E0EEEA', display: 'inline-block', margin: 40, maxWidth: 300}}>
            <CardContent>
                <div style={{display: 'flex'}}>
                    <div style={{maxHeight: 200, maxWidth: 150, overflow: 'hidden'}}>
                        <img src={'/ecea' + person.picture} alt={'student profile'} height={200}/>
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
                            <Typography variant={"body1"}>
                                {person.quote}
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


export default function AboutPage(props: Props) {
    return (
        <Layout maxWidth={undefined}>
            <>
                <Head>
                    <title>ECEA: About</title>
                </Head>

                <div style={{textAlign: 'center'}}>
                    {AMBASSADORS.map((item, i) => {
                        return (
                            <AmbassadorView key={i} person={item}/>
                        )
                    })}

                </div>
            </>
        </Layout>
    )
}

