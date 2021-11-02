import React, {useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import {Typography} from "@material-ui/core";
import "../styles/navbar.css";
import { useLocation } from 'react-router-dom';

const getLinkIdxByPathName = (location, navLinks) => {
    for (let i = 0; navLinks && i < navLinks.length; i++) {
        if (navLinks[i].link === location) {
            return i;
        }
    }
    return -1;
}

export function NavBar() {
    const [navColour, updateNavbar] = useState(false);
    const [expand, updateExpanded] = useState(false);
    const location = useLocation().pathname;
    const history = useHistory();

    const getTitle = (x) => x.startsWith('/ecea') ? "Ambassadors" : (x.startsWith('/wece') ? 'Women in ECE': (x.startsWith('/spark') ? "Spark Challenge": undefined));
    const getRoot = (x) => x.startsWith('/ecea') ? "/ecea" : (x.startsWith('/wece') ? '/wece': (x.startsWith('/spark') ? "/spark": "/"));
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
    const AMBASSADOR_NAV_LINKS =  [
        {link: '/ecea/fun', label: 'Fun', onClick:  setAmbassadorPage},
        {link: '/ecea/ece', label: 'ECE', onClick:  setAmbassadorPage},
        {link: '/ecea/members', label: 'Members', onClick:  setAmbassadorPage},
    ];
    const ECESS_NAV_LINKS = [
        {link: '/board', label: 'Board', onClick:  setECESSPage},
        {link: '/committees', label: 'Committees', onClick:  setECESSPage},
        {link: '/calendar', label: 'Calendar', onClick:  setECESSPage},
        {link: '/wece', label: 'WECE', onClick: () => {
                setWECEPage();
                setLinkIdx(-1);
            }
        },
        {link: '/ecea', label: 'Ambassadors', onClick:  () => {
                setAmbassadorPage();
                setLinkIdx(-1);
            }
        },
        {
            link: '/spark', label: 'Spark Challenge', onClick: () => {
                setRoot('/spark');
                setTitle('Spark Challenge');
                setNavLinks([]);
            }
        }
    ]
    const WECE_NAV_LINKS = [
        {link: '/wece/members', label: 'Members', onClick: setWECEPage}
    ]

    let getNavLinks = (x) => x.startsWith('/ecea') ? AMBASSADOR_NAV_LINKS :
        (x.startsWith('/wece') ? WECE_NAV_LINKS:
            (x.startsWith('/spark') ? [] : ECESS_NAV_LINKS));

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

    return (
        <Navbar
            expanded={expand}
            expand="md"
            className={navColour ? "sticky" : "navbar"}
            style={{padding: 0, margin: 0, backgroundColor: '#CEB888'}}
        >
            <Container>
                <Navbar.Brand>
                    <Nav.Link
                        style={{color: "#000"}}
                        as={Link}
                        to={"/"}
                    >
                        <div style={{backgroundColor: "black"}}>
                            <img
                                width={120}
                                src={process.env.PUBLIC_URL + "/static/ecess_logo.png"}
                                alt="home pic"
                                className="img-fluid" />
                        </div>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                    }}
                >
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
                                    <Typography style={{fontWeight: (linkIdx === -1 ? "bold": undefined)}}>
                                        {title}
                                    </Typography>
                                </Nav.Link>
                            </Nav.Item>: <></>
                        }

                        {navLinks ? navLinks.map((i, idx) => (
                            <Nav.Item key={i.link}>
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
                                    <Typography style={{fontWeight: (linkIdx === idx ? "bold": undefined)}}>
                                        {i.label}
                                    </Typography>
                                </Nav.Link>
                            </Nav.Item>
                        )): <></>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

