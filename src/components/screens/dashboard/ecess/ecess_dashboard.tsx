import {Card, CardContent} from "@mui/material";
import {changeUserData} from "src/utils/change_user_data";
import {useState} from "react";
import * as React from "react";
import {Ambassador, Board, Spark, Wece} from "../edit";

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
