
// Create a theme instance.
import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

const ECESSTheme = createTheme({
    typography: {
        allVariants: {
            color: "#ffffff"
        }
    },
    palette: {
        background: {
            default: "#333"
        },
        text: {
            primary: "#ffffff"
        },
        primary: {
            main: '#CEB888',
        },
        secondary: {
            main: '#CEB888',
        },
        error: {
            main: red.A400,
        },
        mode: "dark",
    },
});

export default ECESSTheme;