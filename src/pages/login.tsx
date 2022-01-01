import {Button} from "@mui/material";
import {TextField, Typography} from "@material-ui/core";
import {useState} from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    UserCredential,
    browserLocalPersistence
} from "firebase/auth";

export function LoginPage({setUser}) {
    const spacingStyle = {margin: 10}
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div style={{maxWidth: 500, margin: "0 auto"}}>
            {message &&
                <Typography variant={"subtitle2"} style={{color: "red"}}> {message} </Typography>
            }
            <div style={spacingStyle}>
                <TextField
                    style={{width: "100%"}}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        setMessage("");
                    }}
                    label="Purdue Email (Personal for Alumni)"
                    variant="filled" />
            </div>
            <div style={spacingStyle}>
                <TextField
                    onChange={(event) => {
                        setPassword(event.target.value)
                        setMessage("");
                    }}
                    style={{width: "100%"}}
                    label="Password"
                    type="password"
                    variant="filled" />
            </div>
            <div style={spacingStyle}>
                <Button
                    style={{width: "100%"}}
                    variant="contained"
                    onClick={async () => {
                        const auth = getAuth();
                        await auth.setPersistence(browserLocalPersistence)
                        try {
                            const cred: UserCredential = await signInWithEmailAndPassword(auth, email, password);
                            console.log(auth.currentUser);
                            setUser(cred.user);
                        }
                        catch (e) {
                            const errorMessage = e.message;
                            setMessage(errorMessage);
                        }
                    }}>Login</Button>
            </div>
            <div style={spacingStyle}>
                <Button
                    style={{width: "100%"}}
                    variant="contained"
                    onClick={() => {
                        alert("Feature Not Supported Yet")
                    }}>Login with Google</Button>
            </div>
            <div style={spacingStyle}>
                <Button
                    style={{width: "100%"}}
                    variant="contained"
                    onClick={() => {
                        alert("Feature Not Supported Yet")
                    }}>Login with Facebook</Button>
            </div>
            <div style={spacingStyle}>
                <Button
                    style={{width: "100%"}}
                    variant="contained"
                    onClick={() => {
                        alert("Feature Not Supported Yet")
                    }}>Sign Up</Button>
            </div>

        </div>
    )
}