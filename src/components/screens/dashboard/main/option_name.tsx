import * as React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Slide
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {TransitionProps} from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props}  children={<></>}/>;
});

export function OptionName({option, value, insideMessage, onSave}) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => {
                    setOpen(false);
                }}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{`Set New ${option} ${option === "Graduation" ? "Date": ""}`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {insideMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={async () => {
                        setOpen(false);
                        await onSave();
                    }}>Save</Button>
                </DialogActions>
            </Dialog>
            <div>
                <Button
                    onClick={() => {
                        setOpen(true);
                    }}
                    style={{display: "flex", flexFlow: "row", padding: 10, width: '100%'}}>
                    <div>{option}</div>
                    <div style={{flex: 1, textAlign: "end"}}>{value || `No ${option}`}</div>
                    <ChevronRightIcon/>
                </Button>
                <Divider />
            </div>
        </>
    )
}
