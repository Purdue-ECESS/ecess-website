import {Card, CardContent, TextField, Typography} from "@mui/material";
import {changeUserData} from "src/utils/change_user_data";
import {useState} from "react";
import {OptionName} from "../main";
import * as React from "react";


function Ambassador({ecessOrg, setEcessOrgChange, onSave}) {
    const ambassadors = ecessOrg["Ambassadors"];
    return (
        <div style={{margin: 5}}>
            <Typography variant={"h6"} style={{padding: 5}}>Ambassadors</Typography>
            <OptionName
                option={"Quote"}
                onSave={onSave}
                value={ambassadors.quote || "No Quote"}
            >
                <Typography>Add Your Quote</Typography>
                <TextField
                    label={"Quote"}
                    variant={"filled"}
                    style={{width: "100%"}}
                    defaultValue={ambassadors.quote || ""}
                    onChange={(event) =>{
                        ambassadors.quote = event.target.value;
                        setEcessOrgChange(ecessOrg);
                    }} />
            </OptionName>
        </div>
    );
}

function Wece({ecessOrg, setEcessOrgChange, onSave}) {
    return (
        <>
        </>
    )
}

function Board({ecessOrg, setEcessOrgChange, onSave}) {
    const exec = ecessOrg.ECESS;
    return (
        <div style={{margin: 5}}>
            <Typography variant={"h6"} style={{padding: 5}}>ECESS Executive</Typography>
            <OptionName
                disable={true}
                option={"Position"}
                onSave={onSave}
                value={exec.board_position || ""}>
            </OptionName>
            <OptionName
                option={"Quote"}
                onSave={onSave}
                value={exec.quote || "No Quote"}
            >
                <Typography>Add Your Quote</Typography>
                <TextField
                    label={"Quote"}
                    variant={"filled"}
                    style={{width: "100%"}}
                    defaultValue={exec.quote || ""}
                    onChange={(event) =>{
                        exec.quote = event.target.value;
                        setEcessOrgChange(ecessOrg);
                    }} />
            </OptionName>
            <OptionName
                option={"Favorite Class"}
                onSave={onSave}
                value={exec.fav_class || "No Favorite Class"}
            >
                <Typography>Add Your Favorite Class</Typography>
                <TextField
                    label={"Favorite Class"}
                    variant={"filled"}
                    style={{width: "100%"}}
                    defaultValue={exec.fav_class || ""}
                    onChange={(event) =>{
                        exec.fav_class = event.target.value;
                        setEcessOrgChange(ecessOrg);
                    }} />
            </OptionName>
        </div>
    );
}

function Spark() {
    return null;
}

export function ECESSDashboard({user, userData, setUserData}) {
    const [ecessOrgChange, setEcessOrgChange] = useState({});
    if (userData === undefined || !('ecess_organization' in userData)) {
        return <></>;
    }
    const ecessOrg: any = userData.ecess_organization;
    const onSave = async () => {
        const response = await changeUserData(user, userData, {ecess_organization: ecessOrgChange});
        setUserData(response);
        setEcessOrgChange({});
    };
    return (
        <Card style={{margin: 10}}>
            <CardContent>
                {
                    ecessOrg.ECESS &&
                    <Board
                        onSave={onSave}
                        ecessOrg={ecessOrg}
                        setEcessOrgChange={setEcessOrgChange}
                    />
                }
                {
                    ecessOrg.Ambassadors &&
                    <Ambassador
                        onSave={onSave}
                        ecessOrg={ecessOrg}
                        setEcessOrgChange={setEcessOrgChange}
                    />
                }
                {
                    ecessOrg.wece &&
                    <Wece
                        onSave={onSave}
                        ecessOrg={ecessOrg}
                        setEcessOrgChange={setEcessOrgChange}
                    />
                }
                {
                    ecessOrg.Spark &&
                    <Spark />
                }
            </CardContent>
        </Card>
    )
}
