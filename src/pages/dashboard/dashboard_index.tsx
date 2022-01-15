import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {MyFb} from "src/data/data_fb";
import {getPersonByUid} from "src/data/data_people";
import * as React from 'react';
import {getAuth} from "firebase/auth";
import {MainUserDashboard} from "src/components/screens/dashboard/main/main_dashboard";
import {ECESSDashboard} from "src/components/screens/dashboard/ecess";
import {ECESSMemberDashboard} from "../../components/screens/dashboard/members";

export function DashboardIndex({user}) {
    MyFb.loadFb();
    const [userData, setUserData] = useState(undefined);


    useEffect(() => {
        if (userData === undefined) {
            getPersonByUid(user.uid).then(response => {
                setUserData(response || {});
            }).catch( e => {
                setUserData({});
            })
        }
    }, [userData, user]);

    return (
        <div style={{maxWidth: 1080, margin: "0 auto"}}>
            <Button
                onClick={async () => {
                    await getAuth().signOut();
                }}>Logout</Button>

            <MainUserDashboard
                user={user}
                userData={userData}
                setUserData={setUserData}
            />

            <ECESSDashboard
                user={user}
                userData={userData}
                setUserData={setUserData}
            />

            <ECESSMemberDashboard
                user={user}
                userData={userData}
                setUserData={setUserData}
            />

        </div>
    );
}