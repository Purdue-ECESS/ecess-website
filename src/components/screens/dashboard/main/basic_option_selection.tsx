import {useState} from "react";
import * as React from "react";
import {Button, Menu, MenuItem, Typography} from "@mui/material";

export function BasicOptionSelection({label, selections, onSelect}) {
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
                                    key={item}
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

