import {SocialMedia} from "src/components/widgets/social_media";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Button, Typography} from "@material-ui/core";
import {WelcomeImage} from "src/components/screens/welcome";
import Typewriter from "typewriter-effect";
import ECESSTheme from "src/components/theme/mui/theme";
import {DarkTypography} from "src/components/theme/mui/dark_typography";
import "src/styles/ecess_index.css"


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

export function ECESSHome() {
    const classes = useStyles(ECESSTheme);
    return (
        <div style={{maxWidth: 1080, margin: "0 auto"}}>
            <WelcomeImage
                picture={process.env.PUBLIC_URL + "/static/ecess_homescreen.jpg"}
                center={true}
                >
                <div
                    className={"wiggle ls ease-in-out infinite"}
                    >
                    <Typewriter
                        options={{
                            wrapperClassName: "type_writer",
                            cursorClassName: 'cursor_class',
                            strings: [
                                "<strong style='font-size: 20pt'>Welcome to ECESS</strong>",
                                "<strong style='font-size: 20pt'>ECE Student Society</strong>",
                                "<strong style='font-size: 20pt'>Purdue University</strong>",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 100, // SET TO USE A 1 SECOND DELAY
                            deleteSpeed: 50,
                        }}
                    />
                </div>
                <DarkTypography variant={"body2"}>
                    The purpose of the Electrical and Computer Engineering Student Society is to provide ECE
                    students with an educational and professional community aimed at preparing students for a
                    rigorous academic program, exploring educational and professional post-baccalaureate options
                    and making the most out of their Purdue Experience.
                </DarkTypography>
            </WelcomeImage>
            <div style={{margin: "0 auto", justifyContent: "center", alignContent: "center", padding: 20, textAlign: "center"}}>
                <Typography
                    >
                    ECESS is constantly looking for new applicants. If you are interested,
                    please fill out the interest form below or scan the QR code provided.
                    Committees are detailed in the Committees page of the Website. Thank you!
                </Typography>
                <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdJiB-CY9fsSLUF1b204HNTQDN59xNzK5JYUp2Z7KxtybsWGg/viewform" target="_blank" color={"primary"}>
                    {"Apply Here!"}
                </Button>
                <Button href="https://docs.google.com/presentation/d/1i4AwbaDw5L7QFtBHDrKgNnoDBB-9ouSqy-YSwgM5oHM/edit?usp=sharing" target="_blank" color={"primary"}>
                    {"Callout Slides!"}
                </Button>
            </div>

            <SocialMedia
                materialClass={classes}
                discord={{name: 'ECESS Discord ', link: 'https://discord.gg/g2frztsC8W'}}
                instagram={"purdue_ecess"}
                email={['ecess@purdue.edu']}
            />
        </div>)
}
