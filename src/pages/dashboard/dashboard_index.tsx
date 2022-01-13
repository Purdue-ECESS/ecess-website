import {
    Button,
    Card,
    CardContent,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    Divider, Menu, MenuItem,
    Slide, TextField,
    Typography
} from "@material-ui/core";
import {useEffect, useState} from "react";
import {MyFb} from "src/data/data_fb";
import {getPersonByUid} from "src/data/data_people";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as React from 'react';
import {TransitionProps} from "@material-ui/core/transitions";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function BasicOptionSelection({label, selections, onSelect}) {
    const [newLabel, setNewLabel] = useState(label);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option) => {
        setNewLabel(option);
        onSelect(option)
        setAnchorEl(null);
    };
    return (
        <>
            <Typography>Click Save When You Are Done</Typography>
            <Button
                variant={"contained"}
                style={{width: "100%"}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {newLabel}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <>
                    {
                        selections.map((item) => {
                            return (
                                <MenuItem
                                    selected={item === newLabel}
                                    onClick={() => handleClose(item)}
                                >
                                    {item}
                                </MenuItem>
                            );
                        })
                    }
                </>
            </Menu>
        </>
    )
}

function AdvancedOptionSelectionAndText({label: month, selections, onSelect}) {
    let actualMonth = undefined;
    let actualYear = undefined;
    selections.forEach((item) => {
        if (month.startsWith(item)) {
            actualMonth = item;
            actualYear = month.substr(item.length + 1);
        }
    })
    const [newLabel, setNewLabel] = useState(actualMonth);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option) => {
        setNewLabel(option);
        onSelect(option)
        setAnchorEl(null);
    };
    return (
        <>
            <Typography>Click Save When You Are Done</Typography>
            <div>
                <div style={{display: "flex"}}>
                    <Button
                        variant={"contained"}
                        style={{margin: "0 5px", flex: 1}}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {newLabel}
                    </Button>
                    {newLabel !== "None" &&
                        <TextField defaultValue={actualYear} />
                    }
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <>
                        {
                            selections.map((item) => {
                                return (
                                    <MenuItem
                                        selected={item === newLabel}
                                        onClick={() => handleClose(item)}
                                    >
                                        {item}
                                    </MenuItem>
                                );
                            })
                        }
                    </>
                </Menu>
            </div>
        </>
    )
}


function OptionName({option, value, insideMessage}) {
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
                    <Button onClick={() => {
                        setOpen(false);
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

export function DashboardIndex({user}) {
    MyFb.loadFb();
    const [userData, setUserData] = useState(undefined);


    useEffect(() => {
        if (userData === undefined) {
            getPersonByUid(user.uid).then(response => {
                setUserData(response);
            })
        }
    }, [userData, user]);

    return (
        <div style={{maxWidth: 1080, margin: "0 auto"}}>
            {userData &&
                <>
                    <Typography variant={"h5"} style={{textAlign: "center", margin: 10}}>Welcome {userData.name}</Typography>
                    <Card>
                        <CardContent>
                            <div>
                                <Typography variant={"h6"} style={{padding: 5}}>Basic Information</Typography>
                                <OptionName
                                    insideMessage={(
                                        <>
                                            <Typography>Click Save When You Are Done</Typography>
                                            <TextField id="filled-basic" label={"Name"} variant="filled" style={{width: "100%"}}/>
                                        </>
                                    )}
                                    option={"Name"}
                                    value={user.displayName}
                                />
                                <OptionName
                                    insideMessage={(
                                        <>
                                            <Typography>Click Save When You Are Done</Typography>
                                            <TextField id="filled-basic" label={"Email"} variant="filled" style={{width: "100%"}}/>
                                        </>
                                    )}
                                    option={"Email"}
                                    value={user.email}
                                />
                                <OptionName
                                    insideMessage={
                                        (
                                            <AdvancedOptionSelectionAndText
                                            label={userData.graduation || "Not Set"}
                                            selections={["None", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
                                            onSelect={ () => {} }
                                        />)
                                    }
                                    option={"Graduation"}
                                    value={userData.graduation}
                                />
                                <OptionName
                                    insideMessage={(
                                        <>
                                            <Typography>Click Save When You Are Done</Typography>
                                            <TextField id="filled-basic" label={"Hometown"} variant="filled" style={{width: "100%"}}/>
                                        </>
                                    )}
                                    option={"Hometown"}
                                    value={userData.hometown}
                                />
                                <OptionName
                                    insideMessage={(
                                        <BasicOptionSelection
                                            label={userData.major}
                                            onSelect={(item) => console.log(item)}
                                            selections={["Computer Engineering", "Electrical Engineering"]}
                                        />
                                    )}
                                    option={"Major"}
                                    value={userData.major}
                                />
                            </div>

                        </CardContent>
                    </Card>
                </>
            }
        </div>
    );
}