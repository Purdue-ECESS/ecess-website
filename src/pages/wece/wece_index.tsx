import {WelcomeImage} from "../../components/screens/welcome";
import {SocialMedia} from "../../components/widgets/social_media";
import {makeStyles} from "@material-ui/styles";
import React, {useEffect, useState} from "react";
import ECESSTheme from "../../components/theme/mui/theme";
import {DarkTypography} from "../../components/theme/mui/dark_typography";
import {ecessApiCall} from "../../utils/api";

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
    const [background, setBackground] = useState(undefined);
    const classes = useStyles(ECESSTheme);
    useEffect(() => {
        if (background === undefined) {
            ecessApiCall("bucket", undefined, {image: "generic-purdue-banner.jpg"}).then((response: any) => {
                setBackground(response.image);
            })
        }
    })
    return (
        <div style={{maxWidth: 1080, margin: "0 auto"}}>
            <WelcomeImage
                center={true}
                picture={background}
            >
                <DarkTypography variant={'subtitle1'}>
                    About Us
                </DarkTypography>
                <DarkTypography variant={'subtitle2'}>
                    Purdue Women in Electrical and Computer Engineering was founded in 2016 and is dedicated to
                    connecting women within the field of technology.
                </DarkTypography>
            </WelcomeImage>
            <SocialMedia
                materialClass={classes}
                instagram={"purduewece"}
                email={["unger12@purdue.edu", "posth@purdue.edu"]}
                />
        </div>
    )

}