import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom'
import "src/styles/bootstrap_navbar.sass";
import {Button, Typography} from "@mui/material";
import {LoginNavButton} from "./login_button";
// import {Headline} from "../utils/headline";

const getLinkIdxByPathName = (location, navLinks) => {
    for (let i = 0; navLinks && i < navLinks.length; i++) {
        if (navLinks[i].link === location) {
            return i;
        }
    }
    return -1;
}

const updateIndex = (item) => {
    const body = document.getElementById("body");
    const favicon = document.getElementById("favicon");
    const picture = document.getElementById("picture");
    const description = document.getElementById("description");
    const descriptionDescription = document.getElementById("description-description");
    const title = document.getElementById("title");
    const header = document.getElementById("header");

    favicon.setAttribute("href", item.favicon);
    picture.setAttribute("href", item.picture);
    description.setAttribute("content", item.content);
    descriptionDescription.setAttribute("content", item.content);
    title.setAttribute("content", item.title);
    header.innerHTML = item.title;
    body.style.backgroundColor = item.backgroundColor || "#333";
}

export function NavBar({user}) {
    const [expand, updateExpanded] = useState(false);
    const location = useLocation().pathname;
    const history = useHistory();

    const getTitle = (x) => x.startsWith('/ecea') ? "Ambassadors" : (x.startsWith('/wece') ? 'Women in ECE': (x.startsWith("/spark") ? "Spark Challenge": undefined));
    const getRoot = (x) => x.startsWith('/ecea') ? "/ecea" : (x.startsWith('/wece') ? '/wece': (x.startsWith('/spark') ? "/spark": "/"));
    const getIndexContext = (x) => {
        if (x.startsWith('/ecea')) {
            return {
                favicon: process.env.PUBLIC_URL + "/static/logo/ecess/ecea_logo.ico",
                picture: process.env.PUBLIC_URL + "/static/logo/ecess/ecea_logo.jpg",
                content: "Website for Purdue ECE Ambassadors",
                title: 'ECE Ambassadors'
            }

        }
        else if (x.startsWith('/spark')) {
            let temp = x;
            if (x.endsWith('/')) {
                temp = x.substring(0, x.length - 1);
            }
            return {
                favicon: process.env.PUBLIC_URL + "/static/logo/ecess/spark_logo.ico",
                picture: process.env.PUBLIC_URL + "/static/logo/ecess/spark_logo.jpg",
                content: "Welcome to the Spark Challenge Website",
                title: 'Spark Challenge',
                backgroundColor: ['/spark','/spark/schedule'].includes(temp) ? "#333": undefined
            }
        }
        return {
            favicon: process.env.PUBLIC_URL + "/static/logo/ecess/ecess_logo.ico",
            picture: process.env.PUBLIC_URL + "/static/logo/ecess/ecess_logo.jpg",
            content: "Website for Purdue ECE Student Society",
            title: 'Purdue ECESS'
        }
    }
    updateIndex(getIndexContext(location));
    const [root, setRoot] = useState(getRoot(location));

    const [title, setTitle] = useState(getTitle(location));
    const setECESSPage = () => {
        setRoot('/');
        setTitle(undefined);
        setNavLinks(ECESS_NAV_LINKS);
    }
    const setAmbassadorPage = () => {
        setRoot('/ecea');
        setTitle('Ambassadors');
        setNavLinks(AMBASSADOR_NAV_LINKS);
    }
    const setWECEPage = () => {
        setRoot('/wece');
        setTitle("Women in ECE");
        setNavLinks(WECE_NAV_LINKS);
    }
    const setSparkPage = () => {
        setRoot('/spark')
        setTitle("Spark Challenge")
        setNavLinks(SPARK_NAV_LINKS)
    }
    const AMBASSADOR_NAV_LINKS =  [
        {link: '/ecea/fun', label: 'Fun', onClick:  setAmbassadorPage},
        // {link: '/ecea/ece', label: 'ECE', onClick:  setAmbassadorPage},
        {link: '/ecea/members', label: 'Members', onClick:  setAmbassadorPage},
    ];
    const WECE_NAV_LINKS = [
        {link: '/wece/members', label: 'Members', onClick: setWECEPage}
    ]
    const SPARK_NAV_LINKS = [
        {link: '/spark/members', label: 'Members', onClick: setSparkPage},
        {link: '/spark/fa2021', label: 'Fall 2021', onClick: setSparkPage},
    ]
    const ECESS_NAV_LINKS = [
        {link: '/board', label: 'Board', onClick:  setECESSPage},
        {link: '/calendar', label: 'Calendar', onClick:  setECESSPage},
        {link: '/ecea', label: 'Ambassadors', dropdown: AMBASSADOR_NAV_LINKS, onClick:  () => {
                setAmbassadorPage();
                setLinkIdx(-1);
            }
        },
        {link: '/spark', label: 'Spark Challenge', dropdown: SPARK_NAV_LINKS, onClick: () => {
                setSparkPage();
            }
        },
        {link: '/wece', label: 'WECE', dropdown: WECE_NAV_LINKS, onClick: () => {
                setWECEPage();
                setLinkIdx(-1);
            }
        },
    ]

    let getNavLinks = (x) => x.startsWith('/ecea') ? AMBASSADOR_NAV_LINKS :
        (x.startsWith('/wece') ? WECE_NAV_LINKS:
            (x.startsWith('/spark') ? SPARK_NAV_LINKS:
                ECESS_NAV_LINKS));

    const [navLinks, setNavLinks] = useState(undefined);
    const [linkIdx, setLinkIdx] = useState(-1);
    if (navLinks === undefined) {
        const newNavLinks = getNavLinks(location);
        setNavLinks(newNavLinks);
        setLinkIdx(getLinkIdxByPathName(location, newNavLinks));
    }

    useEffect(() => {
        return history.listen(location => {
            const pathname = location.pathname;
            setTitle(getTitle(pathname));
            setNavLinks(undefined);
        })
    }, [history, navLinks])

    return (
        <div
            className={"nav_bar_parent"}>
            <div
                className={"nav_bar"}>
                <div className={"content"}>
                    <div className={"title-div"}>
                        <Link
                            className={"link"}
                            to={"/"}>
                            <div className="hover-underline-animation inactive-link">
                                <img
                                    width={120}
                                    src={process.env.PUBLIC_URL + "/static/logo/ecess/ecess_nav_bar_logo.png"}
                                    alt="home pic"
                                />
                            </div>
                        </Link>

                        <div className={"hamburger-menu"}>
                            <div className={"space"}/>
                            <div className={"parent-menu-block"}>
                                <div
                                    className={"menu-block"}
                                    onClick={() => {
                                        updateExpanded(!expand);
                                    }}>
                                    <div className={"menu-line"}/>
                                    <div className={"menu-line"}/>
                                    <div className={"menu-line"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={expand ? "links-expanded": "links-not-expanded"}>
                        {title &&
                            <Link
                                className={"link"}
                                to={root}
                                onClick={() => {
                                    setLinkIdx(-1);
                                    updateExpanded(false)
                                }}>
                                <div className={"hover-underline-animation"}>
                                    <Typography
                                        className={(linkIdx === -1 ? "active-link": "inactive-link")}>
                                        {title}
                                    </Typography>
                                </div>
                            </Link>
                        }
                        {navLinks && navLinks.map((i, idx) => (
                            <Link
                                key={i.link}
                                className={"link"}
                                to={i.link}
                                onClick={() => {
                                    setLinkIdx(idx);
                                    i.onClick();
                                    updateExpanded(false);
                                }}>
                                <div
                                    className="hover-underline-animation">
                                    <Typography
                                        className={(linkIdx === idx ? "active-link": "inactive-link")}>
                                        {i.label}
                                    </Typography>
                                </div>
                            </Link>
                        ))}
                        <div style={{flex: 1}} />
                        {
                            user === null &&
                            <div style={{padding: 5}}>
                                <Button
                                    component={Link}
                                    variant={"contained"}
                                    style={{textDecoration: 'none', backgroundColor: "#CEB888"}}
                                    to={"/login"}
                                >
                                    Login
                                </Button>
                            </div>
                        }
                        {
                            user &&
                            <LoginNavButton
                                user={user}
                                onClick={() => {
                                    updateExpanded(false);
                                }}
                            />
                        }
                    </div>
                </div>
            </div>
            {/*<Headline*/}
            {/*    link={"https://forms.gle/WrUJL2oAxqkuauZr8"}*/}
            {/*    text={"Micron tech talk on March 1st, 2022 - RSVP by Clicking Here"}/>*/}
        </div>
    );
}

