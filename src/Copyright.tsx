import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{margin: 10}}>
            {'Copyright © '}
            <MuiLink color="inherit" href="https://material-ui.com/">
                Purdue ECE Student Society
            </MuiLink>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}