import {useState} from "react";
import * as React from "react";
import {Button, Menu, MenuItem, TextField, Typography} from "@mui/material";

export function AdvancedOptionSelectionAndText({label: month, onSelect}) {
    const selections = ["None", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let actualMonth = undefined;
    let actualYear = undefined;
    selections.forEach((item) => {
        if (month.startsWith(item)) {
            actualMonth = item;
            actualYear = month.substring(item.length + 1);
        }
    })
    const [newMonth, setNewMonth] = useState(actualMonth);
    const [newYear, setNewYear] = useState(actualYear);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option) => {
        setNewMonth(option);
        if (option === "None") {
            onSelect("None");
        }
        else {
            onSelect(`${option} ${newYear}`)
        }
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
                        {newMonth}
                    </Button>
                    {newMonth !== "None" &&
                        <TextField
                            label={"Year"}
                            defaultValue={newYear}
                            variant="filled"
                            onChange={(event) => {
                                const year = event.target.value;
                                setNewYear(event.target.value)
                                onSelect(`${newMonth} ${year}`);
                            }}
                        />
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
                                        key={item}
                                        selected={item === newMonth}
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
