import {Typography} from "@material-ui/core";
import { ecessApiCall } from "src/utils/api";
import {useState} from "react";

export function DashboardIndex({user}) {
    const [response, setResponse] = useState(undefined); 
    if (user) {
        console.log({user});
        ecessApiCall(
            {path: "members", user}).then((response: any) => {
            console.log({response});
            setResponse(response?.status);
        })
    }
    
    return (
        <div>
            {response && <>{response}</>}
            <Typography>Dashboard Screen</Typography>
        </div>
    );
}