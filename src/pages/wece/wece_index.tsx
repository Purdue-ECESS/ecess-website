import {WelcomeImage} from "src/components/screens/welcome";
import {SocialMedia} from "src/components/widgets/social_media";
import {makeStyles} from "@material-ui/styles";
import React, {useEffect, useState} from "react";
import ECESSTheme from "src/components/theme/mui/theme";
import {DarkTypography} from "src/components/theme/mui/dark_typography";
import {ecessApiCall} from "src/utils/api";

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
            ecessApiCall("img", undefined,
                {path: "generic-purdue-banner.jpg", minSize: 1080})
                .then((response: any) => {
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
        </div>
    )

}