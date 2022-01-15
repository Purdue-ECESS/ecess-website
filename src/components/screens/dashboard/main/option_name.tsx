import * as React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export function OptionName({option, value, children, onSave, disable=false}) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Dialog
                open={open}
                keepMounted
                onClose={() => {
                    setOpen(false && !disable);
                }}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{`Set New ${option} ${option === "Graduation" ? "Date": ""}`}</DialogTitle>
                <DialogContent>
                        {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false && !disable)}>Cancel</Button>
                    <Button onClick={async () => {
                        setOpen(false);
                        await onSave();
                    }}>Save</Button>
                </DialogActions>
            </Dialog>
            <div>
                <Button
                    onClick={() => {
                        setOpen(true && !disable);
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
