import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import {getPersonByEmail} from "src/data/data_people";
import {adminChangeUserData} from "src/utils/change_user_data";

export function MemberAdd({organization, onClick}) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    return (
        <>
            <Dialog
                open={open}
                keepMounted
                onClose={() => {
                    setOpen(false)
                }}
            >
                <DialogTitle>Write the Email Address of Member to Add</DialogTitle>
                <DialogContent>
                    <TextField
                        style={{width: "100%"}}
                        variant={"filled"}
                        onChange={(event) => setEmail(event.target.value)}
                        label={"Email"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false);
                    }}>Cancel</Button>
                    <Button onClick={async () => {
                        const user: any = await getPersonByEmail(email, true);
                        const newOrg = {...user.ecess_organization}
                        newOrg[organization] = {}
                        await adminChangeUserData(user.uid,
                            {ecess_organization: user.ecess_organization},
                            {ecess_organization: newOrg});
                        onClick()
                        setOpen(false);
                    }}>Add</Button>
                </DialogActions>
            </Dialog>
            <Button onClick={() => setOpen(!open)}>+</Button>
        </>
    )
}