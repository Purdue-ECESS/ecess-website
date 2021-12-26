import {Fab} from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";

export const Float = (props) => {
    const {style, onClose, children} = props;
    return (
        <div
            style={{
                position: "fixed",
                ...style
            }}
        >
            {onClose &&
            (<div style={{display: "flex", marginBottom: "-20px"}}>
                <div style={{flex: 1}}/>
                <Fab color="primary" aria-label="add"
                     onClick={onClose}
                >
                    <ClearIcon/>
                </Fab>
            </div>)
            }
            {children}
        </div>

    )

}

