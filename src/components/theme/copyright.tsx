import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { useLocation } from 'react-router-dom';
import {SocialMedia} from "../widgets/social_media";
import {Divider} from "@material-ui/core";

export default function Copyright(props) {
    const {style} = props;
    const location = useLocation().pathname;
    if (location.startsWith("/spark") && !location.startsWith("/spark/results")) {
        return (<></>)
    }

    return (
        <div style={{padding: 10, ...style}} className={"dark"}>
            <Divider light style={{marginTop: 5, marginBottom: 5}}/>
            <Typography variant="body2" color="textSecondary" align="center" >
                {'Copyright © '}
                {`${new Date().getFullYear()} `}
                <MuiLink color="inherit" href="https://engineering.purdue.edu/ece">
                    Purdue ECE Student Society
                </MuiLink>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center" >
                Address: EE 232, 475 Northwestern Avenue, West Lafayette IN - 47907
            </Typography>
            <div style={{maxWidth: 1080, margin: "0 auto"}}>
                <SocialMedia/>
            </div>
        </div>
    );
}