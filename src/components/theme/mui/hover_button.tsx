import {Button} from "@mui/material";
import {withStyles} from '@mui/styles';

export const HoverButtons = withStyles({
    root: {
        color: "#CEB888",
        animation: "linear",
        variant: "contained"
    },
})(Button)