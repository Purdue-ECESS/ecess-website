import {TextField, Typography} from "@mui/material";
import {OptionDialogWindow} from "src/components/utils/option_dialog";
import * as React from "react";

export function Ambassador({ecessOrg, setEcessOrgChange, onSave}) {
    let ambassadors = ecessOrg["Ambassadors"];
    ambassadors = ambassadors ? ambassadors: {};

    return (
        <div style={{margin: 5}}>
            <Typography variant={"h6"} style={{padding: 5}}>Ambassadors</Typography>
            <OptionDialogWindow
                option={"Quote"}
                onSave={onSave}
                value={ambassadors.quote || "No Quote"}
            >
                <Typography>Add Your Quote</Typography>
                <TextField
                    label={"Quote"}
                    variant={"filled"}
                    multiline
                    rows={4}
                    defaultValue={ambassadors.quote || ""}
                    onChange={(event) =>{
                        ambassadors.quote = event.target.value;
                        setEcessOrgChange(ecessOrg);
                    }} />
            </OptionDialogWindow>
        </div>
    );
}

export function Wece({ecessOrg, setEcessOrgChange, onSave}) {
    return (
        <>
        </>
    )
}

export function Board({ecessOrg, setEcessOrgChange, onSave}) {
    const exec = ecessOrg.ECESS;
    if (!exec) {
        return <></>
    }
    return (
        <div style={{margin: 5}}>
            <Typography variant={"h6"} style={{padding: 5}}>ECESS Executive</Typography>
            <OptionDialogWindow
                disable={true}
                option={"Position"}
                onSave={onSave}
                value={exec.board_position || ""}>
            </OptionDialogWindow>
            <OptionDialogWindow
                option={"Quote"}
                onSave={onSave}
                value={exec.quote || "No Quote"}
            >
                <Typography>Add Your Quote</Typography>
                <TextField
                    label={"Quote"}
                    variant={"filled"}
                    multiline
                    rows={4}
                    defaultValue={exec.quote || ""}
                    onChange={(event) =>{
                        exec.quote = event.target.value;
                        setEcessOrgChange(ecessOrg);
                    }} />
            </OptionDialogWindow>
            <OptionDialogWindow
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
            </OptionDialogWindow>
        </div>
    );
}

export function Spark({ecessOrg, setEcessOrgChange, onSave}) {
    return <></>;
}
