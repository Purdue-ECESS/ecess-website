import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "src/styles/bootstrap_navbar.sass";
import {Button, Typography} from "@mui/material";

// https://stackoverflow.com/questions/56685305/how-to-create-moving-text-from-right-to-left-using-react-spring
export function Headline({link, text}) {

    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(100%,0)" },
        to: { transform: "translate(-100%,0)" },
        config: { duration: 20000 },
        reset: false,
        reverse: key % 2 === 0,
        onRest: () => {
            setKey(key + 1);
        }
    });

    return (
        <Button
            onClick={() => {
                window.location.href = link;
            }}
            className={"headline"}
            key={key}>
            <animated.div style={scrolling}>
                <Typography style={{padding: 1}} variant={"subtitle2"}>
                    {text}
                </Typography>
            </animated.div>
        </Button>
    );
}