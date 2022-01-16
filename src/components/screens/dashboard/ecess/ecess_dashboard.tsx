import {Card, CardContent} from "@mui/material";
import {changeUserData} from "src/utils/change_user_data";
import {useState} from "react";
import * as React from "react";
import {Ambassador, Board, Spark, Wece} from "../edit";
import {getPersonByUid} from "src/data/data_people";

export function ECESSDashboard({user, userData, setUserData}) {
    const [ecessOrgChange, setEcessOrgChange] = useState({});
    if (userData === undefined || !('ecess_organization' in userData)) {
        return <></>;
    }
    const ecessOrg: any = userData.ecess_organization;
    const onSave = async () => {
        const newUserData = await getPersonByUid(user.uid);
        const response = await changeUserData(user, userData, {ecess_organization: {
            ...newUserData.ecess_organization,
            ...ecessOrgChange
        }});
        setUserData(response);
        setEcessOrgChange({});
    };
    return (
        <Card style={{margin: 10}}>
            <CardContent>
                {
                    "ECESS" in ecessOrg &&
                    <Board
                        disable={true}
                        onSave={onSave}
                        ecessOrg={ecessOrg}
                        setEcessOrgChange={setEcessOrgChange}
                    />
                }
                {
                    "Ambassadors" in ecessOrg &&
                    <Ambassador
                        onSave={onSave}
                        ecessOrg={ecessOrg}
                        setEcessOrgChange={setEcessOrgChange}
                    />
                }
                {
                    "wece" in ecessOrg &&
                    <Wece
                        onSave={onSave}
                        ecessOrg={ecessOrg}
                        setEcessOrgChange={setEcessOrgChange}
                    />
                }
                {
                    "Spark" in ecessOrg &&
                    <Spark
                        onSave={onSave}
                        ecessOrg={ecessOrg}
                        setEcessOrgChange={setEcessOrgChange}
                    />
                }
            </CardContent>
        </Card>
    )
}
