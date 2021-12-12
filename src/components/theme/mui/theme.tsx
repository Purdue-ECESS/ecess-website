import {createTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

// Create a theme instance.
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
        type: "dark",
    },
});

export default ECESSTheme;