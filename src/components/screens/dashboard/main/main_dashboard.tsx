import { Card, CardContent, TextField, Typography} from "@mui/material";
import {OptionDialogWindow} from "src/components/utils/option_dialog";
import {AdvancedOptionSelectionAndText} from "./advanced_selection";
import {BasicOptionSelection} from "./basic_option_selection";
import * as React from "react";
import {changeUserData} from "src/utils/change_user_data";
import {useEffect, useState} from "react";
import {FullScreenLoading} from "src/components/utils/loading";
import {ecessApiCall} from "src/utils/api";

export const MainUserDashboard = ({user, userData, setUserData}) => {
    const [name, setName] = useState(user.displayName);
    const [newChange, setNewChange] = useState({});
    const [pictureUrl, setPictureUrl] = useState(undefined);

    const onSave = async () => {
        const response = await changeUserData(user, userData, newChange);
        if (response.name)  {
            setName(response.name);
        }
        setUserData(response);
        setNewChange({});
    };


    console.log("userdata: ", userData);
    useEffect(() => {
        if (userData && userData.picture) {
            ecessApiCall({
                path: "img",
                parameters: {path: userData.picture, minSize: 480}
            }).then((item: any) => {
                setPictureUrl(item.image);
            })
        }
    }, [userData]);

    if (!userData) {
        return <FullScreenLoading />
    }

    return (
        <div style={{margin: 10}}>
            {pictureUrl &&
                <div style={{
                    overflow: "hidden",
                    width: 200,
                    height: 200,
                    margin: "0 auto",
                    borderRadius: "100%"
                }}
                >
                    <img src={pictureUrl} alt={"User Profile"} />
                </div>
            }
            <Typography variant={"h5"} style={{textAlign: "center", margin: 10}}>Welcome {userData.name}</Typography>
            <Card>
                <CardContent>
                    <div>
                        <Typography variant={"h6"} style={{padding: 5}}>Basic Information</Typography>
                        <OptionDialogWindow
                            onSave={onSave}
                            option={"Name"}
                            value={name}>
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
                        </OptionDialogWindow>
                        <OptionDialogWindow
                            onSave={onSave}
                            option={"Email"}
                            value={user.email}>
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
                        </OptionDialogWindow>
                        <OptionDialogWindow
                            onSave={onSave}
                            option={"Graduation"}
                            value={userData.graduation || "None"}>
                            <AdvancedOptionSelectionAndText
                                label={userData.graduation || "None"}
                                onSelect={ (response) => {
                                    setNewChange({...newChange, graduation: response});
                                }}
                            />
                        </OptionDialogWindow>
                        <OptionDialogWindow
                            onSave={onSave}
                            option={"Hometown"}
                            value={userData.hometown}>
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
                        </OptionDialogWindow>
                        <OptionDialogWindow
                            onSave={onSave}
                            option={"Major"}
                            value={userData.major || "None"}>
                            <BasicOptionSelection
                                label={userData.major || "None"}
                                onSelect={(item) => {
                                    setNewChange({...newChange, major: item});
                                }}
                                selections={["None", "Computer Engineering", "Electrical Engineering"]}
                            />
                        </OptionDialogWindow>
                        <div style={{display: "flex", marginTop: 10}}>
                            <div style={{flex: 1}}/>
                            {/*{*/}
                            {/*    !user.verified &&*/}
                            {/*    <Button variant={"contained"}*/}
                            {/*            onClick={async () => {*/}
                            {/*                const actionCodeSettings = {*/}
                            {/*                    url: 'https://www.purdue-ecess.org/dashboard',*/}
                            {/*                    // This must be true.*/}
                            {/*                    handleCodeInApp: true,*/}
                            {/*                };*/}
                            {/*                const auth = getAuth()*/}
                            {/*                sendEmailVerification(auth.currentUser, actionCodeSettings).then(*/}
                            {/*                    (response) => {*/}
                            {/*                        console.log(response);*/}
                            {/*                    }*/}
                            {/*                );*/}
                            {/*            }}*/}
                            {/*    >Verify Your Account</Button>*/}
                            {/*}*/}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}