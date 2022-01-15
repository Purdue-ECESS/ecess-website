import React, {useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import {WelcomeImage} from "src/components/screens/welcome";
import {Updates} from "src/components/widgets/discord_updates";
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


export default function ECEAIndexPage() {
    const classes = useStyles(ECESSTheme);
    const [updates, setUpdates] = useState(undefined);
    const [background, setBackground] = useState(undefined);
    useEffect(() => {
        if (updates === undefined) {
            ecessApiCall({path: "bot/announcements/ambassadors"}).then((response) => {
                setUpdates(response);
            });
        }
        if (background === undefined) {
            ecessApiCall({
                path: "img", 
                parameters: {path: "events/4-16-2021-headshots/4d5b0e835542d04b1615a6cec95aa1f8.jpg"}
            }).then((response: any) => {
                setBackground(response.image);
            });
        }
    }, [background, updates])
    return (
        <>
            <div style={{maxWidth: 1080, margin: '0 auto'}}>
                <>
                    <WelcomeImage
                        center={true}
                        picture={background}
                    >
                        <DarkTypography variant={'subtitle1'}>
                            Mission Statement
                        </DarkTypography>
                        <DarkTypography variant={'subtitle2'}>
                            ECE Ambassadors mission is to spread knowledge about Purdue’s ECE program to prospective
                            and current students alike.
                        </DarkTypography>
                    </WelcomeImage>
                    <Updates materialClass={classes} content={updates}/>
                </>
            </div>
        </>
    )
}