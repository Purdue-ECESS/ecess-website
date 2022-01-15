import {Card, CardContent, TextField, Typography} from "@mui/material";
import {OptionName} from "./option_name";
import {AdvancedOptionSelectionAndText} from "./advanced_selection";
import {BasicOptionSelection} from "./basic_option_selection";
import * as React from "react";
import {changeUserData} from "src/utils/change_user_data";
import {useState} from "react";

export const MainUserDashboard = ({user, userData, setUserData}) => {
    const [name, setName] = useState(user.displayName);
    const [newChange, setNewChange] = useState({});

    const onSave = async () => {
        const response = await changeUserData(user, userData, newChange);
        if (response.name)  {
            setName(response.name);
        }
        setUserData(response);
        setNewChange({});
    };

    return (
        <>
            {userData &&
                <>
                    <Typography variant={"h5"} style={{textAlign: "center", margin: 10}}>Welcome {userData.name}</Typography>
                    <Card>
                        <CardContent>
                            <div>
                                <Typography variant={"h6"} style={{padding: 5}}>Basic Information</Typography>
                                <OptionName
                                    onSave={onSave}
                                    insideMessage={(
                                        <>
                                            <Typography>Click Save When You Are Done</Typography>
                                            <TextField
                                                label={"Name"}
                                                variant="filled"
                                                style={{width: "100%"}}
                                                defaultValue={user.displayName || ""}
                                                onChange={(event) => {
                                                    setNewChange({...newChange, name: event.target.value});
                                                }}
                                            />
                                        </>
                                    )}
                                    option={"Name"}
                                    value={name}
                                />
                                <OptionName
                                    onSave={onSave}
                                    insideMessage={(
                                        <>
                                            <Typography>Click Save When You Are Done</Typography>
                                            <TextField
                                                onChange={(event) => {
                                                    setNewChange({...newChange, email: event.target.value});
                                                }}
                                                defaultValue={user.email || ""}
                                                label={"Email"}
                                                variant="filled"
                                                style={{width: "100%"}}/>
                                        </>
                                    )}
                                    option={"Email"}
                                    value={user.email}
                                />
                                <OptionName
                                    onSave={onSave}
                                    insideMessage={
                                        (
                                            <AdvancedOptionSelectionAndText
                                                label={userData.graduation || "None"}
                                                onSelect={ (response) => {
                                                    setNewChange({...newChange, graduation: response});
                                                }}
                                            />
                                        )
                                    }
                                    option={"Graduation"}
                                    value={userData.graduation || "None"}
                                />
                                <OptionName
                                    onSave={onSave}
                                    insideMessage={(
                                        <>
                                            <Typography>Click Save When You Are Done</Typography>
                                            <TextField
                                                onChange={ (response) => {
                                                    setNewChange({...newChange, hometown: response.target.value});
                                                }}
                                                label={"Hometown"}
                                                variant="filled"
                                                defaultValue={user.hometown || ""}
                                                style={{width: "100%"}}
                                            />
                                        </>
                                    )}
                                    option={"Hometown"}
                                    value={userData.hometown}
                                />
                                <OptionName
                                    onSave={onSave}
                                    insideMessage={(
                                        <BasicOptionSelection
                                            label={userData.major || "None"}
                                            onSelect={(item) => {
                                                setNewChange({...newChange, major: item});
                                            }}
                                            selections={["None", "Computer Engineering", "Electrical Engineering"]}
                                        />
                                    )}
                                    option={"Major"}
                                    value={userData.major || "None"}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </>
            }
        </>
    );
}