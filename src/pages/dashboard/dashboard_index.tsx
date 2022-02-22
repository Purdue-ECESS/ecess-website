import {useEffect, useState} from "react";
import {MyFb} from "src/data/data_fb";
import {getPersonByUid} from "src/data/data_people";
import * as React from 'react';
import {MainUserDashboard} from "src/components/screens/dashboard/main/main_dashboard";
import {ECESSDashboard} from "src/components/screens/dashboard/ecess";
import {ECESSMemberDashboard} from "src/components/screens/dashboard/members";

export function DashboardIndex({user}) {
    MyFb.loadFb();
    const [userData, setUserData] = useState(undefined);
    useEffect(() => {
        getPersonByUid(user.uid).then(response => {
            console.log("updating user data");
            setUserData(response || {});
        }).catch( e => {
            setUserData({});
        })
    }, [user]);

    return (
        <div style={{maxWidth: 1080, margin: "0 auto"}}>


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


            {(userData?.admin || false) ?
                (["Ambassadors", "Spark", "wece", "ECESS"].map((item) => (
                    <ECESSMemberDashboard
                        key={item}
                        user={user}
                        organization={item}
                        setUserData={setUserData}
                    />
                )))
                :
                <ECESSMemberDashboard
                    organization={userData?.ecess_board_position || undefined}
                    user={user}
                    setUserData={setUserData}
                />
            }

        </div>
    );
}