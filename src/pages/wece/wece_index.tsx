import {WelcomeImage} from "../../components/welcome";
import {SocialMedia} from "../../components/social_media";
import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

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

export function WECEHome(props: any) {
    const classes = useStyles();
    return (
        <div style={{maxWidth: 1080, margin: "0 auto"}}>
            <WelcomeImage
                picture={process.env.PUBLIC_URL + "/static/generic-purdue-banner.jpg"}
            >
                <Typography variant={'subtitle1'}>
                    About Us
                </Typography>
                <Typography variant={'subtitle2'}>
                    Purdue Women in Electrical and Computer Engineering was founded in 2016 and is dedicated to
                    connecting women within the field of technology.
                </Typography>
            </WelcomeImage>
            <SocialMedia
                materialClass={classes}
                instagram={"purduewece"}
                email={["unger12@purdue.edu", "posth@purdue.edu"]}
                />
        </div>
    )

}