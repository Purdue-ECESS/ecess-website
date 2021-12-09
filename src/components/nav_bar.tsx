import React, {useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import {Typography} from "@material-ui/core";
import "../styles/navbar.css";
import { useLocation } from 'react-router-dom';
import {NavDropdown} from "react-bootstrap";

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

export function NavBar() {
    const [navColour, updateNavbar] = useState(false);
    const [expand, updateExpanded] = useState(false);
    const location = useLocation().pathname;
    const history = useHistory();

    const getTitle = (x) => x.startsWith('/ecea') ? "Ambassadors" : (x.startsWith('/wece') ? 'Women in ECE': (x.startsWith("/spark") ? "Spark Challenge": undefined));
    const getRoot = (x) => x.startsWith('/ecea') ? "/ecea" : (x.startsWith('/wece') ? '/wece': (x.startsWith('/spark') ? "/spark": "/"));
    const getIndexContext = (x) => {
        if (x.startsWith('/ecea')) {
            return {
                favicon: process.env.PUBLIC_URL + "/static/ecea_logo.ico",
                picture: process.env.PUBLIC_URL + "/static/ecea_logo.jpg",
                content: "Website for Purdue ECE Ambassadors",
                title: 'ECE Ambassadors'
            }

        }
        else if (x.startsWith('/spark')) {
            return {
                favicon: process.env.PUBLIC_URL + "/static/spark_logo.ico",
                picture: process.env.PUBLIC_URL + "/static/spark_logo.jpg",
                content: "Welcome to the Spark Challenge Website",
                title: 'Spark Challenge',
                backgroundColor: "#fff"
            }
        }
        return {
            favicon: process.env.PUBLIC_URL + "/static/ecess_logo.ico",
            picture: process.env.PUBLIC_URL + "/static/ecess_logo.jpg",
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
        {link: '/committees', label: 'Committees', onClick:  setECESSPage},
        {link: '/calendar', label: 'Calendar', onClick:  setECESSPage},
        {link: '/ecea', label: 'Ambassadors', dropdown: AMBASSADOR_NAV_LINKS, onClick:  () => {
                setAmbassadorPage();
                setLinkIdx(-1);
            }
        },
        {link: '/spark', label: 'Spark Challenge', onClick: () => {
                setSparkPage();
                setLinkIdx(-1);
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

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    useEffect(() => {
        return history.listen(location => {
            const pathname = location.pathname;
            setTitle(getTitle(pathname));
            setNavLinks(undefined);
        })
    }, [history, navLinks])

    const active_style = {
        backgroundColor: "#CEB888",
        borderRadius: "15px 15px 15px 15px",
        fontWeight: "bold",
        padding: 5,
        color: "#000"
    };
    const not_active_style = {
        fontWeight: undefined,
        padding: 5
    }

    return (
        <Navbar
            expanded={expand}
            expand="md"
            className={navColour ? "sticky" : "navbar"}
            style={{padding: 0, margin: 0, backgroundColor: '#222222'}}
        >
            <Container>
                <Navbar.Brand>
                    <Nav.Link
                        style={{color: "#000"}}
                        className="hover-underline-animation"
                        as={Link}
                        to={"/"}
                    >
                        <div>
                            <img
                                width={120}
                                src={process.env.PUBLIC_URL + "/static/ecess_nav_bar_logo.png"}
                                alt="home pic"
                                className="img-fluid" />
                        </div>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    style={{
                        color: "#fff",
                        borderColor: "#fff",
                    }}

                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                    }}
                >
                    <div style={{backgroundColor: "white", height: 2, width: 20, margin: 5}}/>
                    <div style={{backgroundColor: "white", height: 2, width: 20, margin: 5}}/>
                    <div style={{backgroundColor: "white", height: 2, width: 20, margin: 5}}/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        {title ?
                            <Nav.Item>
                                <Nav.Link
                                    className="hover-underline-animation"
                                    as={Link}
                                    to={root}
                                    onClick={() => {
                                        setLinkIdx(-1);
                                        updateExpanded(false)
                                    }}
                                >
                                    <Typography style={
                                        linkIdx === -1 ? active_style: not_active_style} >
                                        {title}
                                    </Typography>
                                </Nav.Link>
                            </Nav.Item>: <></>
                        }
                        {navLinks && navLinks.map((i, idx) => (
                            <Nav.Item
                                key={i.link}
                                style={{
                                    transition: '1s ease-in'
                                }}
                            >
                                <Nav.Link
                                    className="hover-underline-animation"
                                    as={Link}
                                    to={i.link}
                                    onClick={() => {
                                        setLinkIdx(idx);
                                        i.onClick();
                                        updateExpanded(false);
                                    }}
                                >
                                    <Typography style={{...(linkIdx === idx ? active_style: not_active_style), "whiteSpace": "nowrap"}}>
                                        {i.label}
                                    </Typography>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

