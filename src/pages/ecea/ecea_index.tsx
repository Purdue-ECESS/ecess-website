import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {SocialMedia} from "../../components/social_media";
import {WelcomeImage} from "../../components/welcome";
import {Updates} from "../../components/discord_updates";
import Typography from "@material-ui/core/Typography";

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
    const classes = useStyles();
    const [updates, setUpdates] = useState(undefined);
    useEffect(() => {
        if (updates === undefined) {
            fetch("https://ecess-api.matthewwen.com/bot/announcements",
                {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(response => {
                    setUpdates(response);
                })
                .catch(e => {
                    setUpdates([]);
                    console.log(e);
                });
        }
    }, [updates])
    return (
        <>
            <div style={{maxWidth: 1080, margin: '0 auto'}}>
                <>
                    <WelcomeImage
                        picture={process.env.PUBLIC_URL + "/static/src/4-16-2021-headshots/4d5b0e835542d04b1615a6cec95aa1f8.jpg"}
                    >
                        <Typography variant={'subtitle1'}>
                            Mission Statement
                        </Typography>
                        <Typography variant={'subtitle2'}>
                            ECE Ambassadors mission is to spread knowledge about Purdue’s ECE program to prospective
                            and current students alike.
                        </Typography>
                    </WelcomeImage>
                    <SocialMedia
                        materialClass={classes}
                        discord={{name: 'ECE Ambassadors', link: 'https://discord.gg/fmwxACFB2T'}}
                        instagram={"purdue_ecea"}
                        email={['eceambassadors@gmail.com']}
                    />
                    <Updates materialClass={classes} content={updates}/>
                </>
            </div>
        </>
    )
}