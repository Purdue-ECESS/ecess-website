import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright(props) {
    const {style} = props;
    return (
        <div style={{padding: 10, ...style}}>
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
        </div>
    );
}