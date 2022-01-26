import React, {useState} from "react";
import { Menu, MenuItem, Typography} from "@mui/material";
import "src/styles/bootstrap_navbar.sass";
import { useHistory } from 'react-router-dom';
import {getAuth} from "firebase/auth";

export function LoginNavButton(props: any) {
    const history = useHistory();
    const {user, onClick} = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<any>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={"link"}>
            <div
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                style={{display: "flex", margin: "0 5px"}}
                onMouseDown={handleClick}
            >
                <div style={{
                    margin: 5,
                    width: "35px",
                    height: "35px",
                    borderRadius: "100%",
                    backgroundImage: `url(https://avatars.dicebear.com/api/identicon/${user.email}.svg)`,
                }}/>
                {user.displayName &&
                    <div style={{display: "grid", alignContent: "center"}}>
                        <Typography>
                            {user.displayName}
                        </Typography>
                    </div>}
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    history.push("/dashboard");
                }}>Dashboard</MenuItem>
                <MenuItem onClick={async () => {
                    handleClose();
                    await getAuth().signOut();
                }}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
