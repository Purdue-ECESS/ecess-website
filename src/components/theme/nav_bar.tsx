import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import {Button, Typography} from "@material-ui/core";
import "src/styles/bootstrap_navbar.sass";
import { useLocation } from 'react-router-dom';

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
                backgroundColor: ['/spark','/spark/schedule'].includes(temp) ? "#fff": undefined
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
    const ECESS_NAV_LINKS = [
        {link: '/board', label: 'Board', onClick:  setECESSPage},
        {link: '/calendar', label: 'Calendar', onClick:  setECESSPage},
        {link: '/ecea', label: 'Ambassadors', dropdown: AMBASSADOR_NAV_LINKS, onClick:  () => {
                setAmbassadorPage();
                setLinkIdx(-1);
            }
        },
        {link: '/spark', label: 'Spark Challenge', onClick: () => {
                setSparkPage();
            }
        },
        {link: '/wece', label: 'WECE', dropdown: WECE_NAV_LINKS, onClick: () => {
                setWECEPage();
                setLinkIdx(-1);
            }
        },
    ]
    const SPARK_NAV_LINKS = [
        {link: '/spark/schedule', label: 'Schedule', onClick: setSparkPage},
        {link: '/spark/results', label: 'Results', onClick: setSparkPage},
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
        <div className={"nav_bar"}>
            <div className={"content"}>
                <div className={"title-div"}>
                    <div style={{margin: "0 5px"}}>
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
                    </div>

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
                    {
                        navLinks && navLinks.map((i, idx) => (
                            <div
                                key={i.link}
                                style={{margin: "0 5px" , padding: 0, overflow: "hidden"}}>
                                <div className="hover-underline-animation">
                                    <Link
                                        className={"link"}
                                        to={i.link}
                                        onClick={() => {
                                            setLinkIdx(idx);
                                            i.onClick();
                                            updateExpanded(false);
                                        }}>
                                        <Typography
                                            className={(linkIdx === idx ? "active-link": "inactive-link")}>
                                            {i.label}
                                        </Typography>
                                    </Link>
                                    {
                                        i.dropdown &&
                                        <div className={"menu-dropdown"}>
                                            {i.dropdown.map((i_sub, i_sub_idx) => (
                                                <div key={i_sub.link}>
                                                    <Link
                                                        className={"link"}
                                                        to={i_sub.link}
                                                        onClick={() => {
                                                            setLinkIdx(i_sub_idx);
                                                            i.onClick();
                                                            updateExpanded(false);
                                                        }}>
                                                        <Typography>{i_sub.label}</Typography>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </div>
                            </div>
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
                        <div
                            style={{
                                display: "grid",
                                alignContent: "center",
                                justifyContent: "center",
                                height: "100%",
                            }}>
                            <div style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "100%",
                                backgroundImage: `url(https://avatars.dicebear.com/api/identicon/${user.email}.svg)`,
                            }}/>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
}

