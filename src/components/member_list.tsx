import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import {useState, useEffect} from 'react';

function MemberCard(props) {
    const {person, component} = props;
    if (person === undefined) {
        return (
            <div style={{flex: 1}} />
        )
    }
    return (
        <Card style={{margin: 5, flex: 1}}>
            <CardContent>
                <div style={{display: 'flex'}}>
                    <div style={{maxHeight: 200, maxWidth: 150, overflow: 'hidden'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img src={"https://raw.githubusercontent.com/Purdue-ECESS/ecess-website-source-code/main/public" + person.picture} alt={'student profile'} height={200}/>
                        </div>
                    </div>
                    <div style={{flex: 1, marginLeft: 10, overflowX: 'auto'}}>
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
                        {
                            component ?
                                component(person): <></>
                        }
                    </div>
                </div>
            </CardContent>
            {
                person.links || person.email ?
                    <CardActions>

                        {person.email ?
                            <Button
                                href={"mailto:" + person.email}
                                size={"small"}
                            >
                                Email
                            </Button>: <></>
                        }

                        {(person.links || []).map((link, j) => {
                            return (
                                <Button
                                    href={link.link}
                                    size="small"
                                    key={j + person.name + 'link'}>{link.name}
                                </Button>
                            );
                        })}
                    </CardActions>: <></>
            }
        </Card>
    );
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        pplPerRow: undefined
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                const width = window.innerWidth;
                setWindowSize({
                    pplPerRow: getNumPplPerRow(width > 1080 ? 1080 : width)
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}

function getNumPplPerRow(screenWidth) {
    const minWidth = 350;
    let numPeople = Math.floor(screenWidth / minWidth);
    if (numPeople > 1) {
        numPeople = 2;
    }
    return numPeople;
}

function splitRowPerPerson(people: Array<any>, pplPerRow, component) {
    let items = [];
    for (let i = 0; i < people.length; i += pplPerRow) {
        let item = [];
        for (let j = 0; j < pplPerRow; j++) {
            item.push(people[i + j]);
        }
        items.push(item);
    }
    return (
        <>
            {items.map((item, i) =>
                (
                    <div style={{display: 'flex'}} key={i + "-" + items.length}>
                        {
                            item.map((person, j) => (
                                <MemberCard key={`person-${i}-${j}`} person={person} component={component}/>
                            ))
                        }
                    </div>
                )
            )};
        </>
    )
}

export function MemberList(props: {members: any, component: any}) {
    const {members, component} = props;
    const size = useWindowSize();
    return (
        <>
            <div style={{maxWidth: 1080, margin: '0 auto'}}>
                {
                    size.pplPerRow ?
                        <div>
                            <div style={{margin: '0 auto', fontSize: 0}}>
                                {
                                    splitRowPerPerson(members, size.pplPerRow, component)
                                }
                            </div>
                        </div>
                        : <></>
                }
            </div>
        </>
    )
}
