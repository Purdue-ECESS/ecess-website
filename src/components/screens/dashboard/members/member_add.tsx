import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import {getPersonByEmail} from "src/data/data_people";
import {adminChangeUserData} from "src/utils/change_user_data";
import {ecessApiCall} from "../../../../utils/api";
import {getAuth} from "firebase/auth";

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
                        let user: any = await getPersonByEmail(email, true);
                        if (user.uid) {
                            // if user already in ecess
                            const newOrg = {...user.ecess_organization}
                            newOrg[organization] = {}
                            await adminChangeUserData(user.uid,
                                {ecess_organization: user.ecess_organization},
                                {ecess_organization: newOrg});
                        }
                        else {
                            // if user completely new
                            await ecessApiCall({
                                path: "ecess/addUser",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: {"email": email, "organization": organization},
                                user: (await getAuth().currentUser),
                                type: "POST"
                            })
                        }
                        await getPersonByEmail(email);
                        onClick()
                        setOpen(false);
                    }}>Add</Button>
                </DialogActions>
            </Dialog>
            <Button onClick={() => setOpen(!open)}>+</Button>
        </>
    )
}