import {MemberList} from "src/components/widgets/lists/member_list";
import {getMembersFromOrganization} from "src/data/data_people";
import {Chip} from "@material-ui/core";
import {hashCode, intToRGB} from "src/utils";
import React, {useEffect, useState} from "react";


export function SparkMembers() {
    const [members, setMembers] = useState(undefined);
    useEffect(() => {
        if (members === undefined) {
            getMembersFromOrganization("Spark").then((response) => {
                response.sort((item1, item2) => {
                    const required_order = ["Vice President", "President"];
                    const ecess1 = item1.ecess_organization["Spark"];
                    const ecess2 = item2.ecess_organization["Spark"];

                    if (required_order.indexOf(ecess1.position) !== -1 || required_order.indexOf(ecess2.position) !== -1) {
                        return required_order.indexOf(ecess2.position) - required_order.indexOf(ecess1.position);
                    }

                    if (ecess1.position === ecess2.position) {
                        return (item1.name < item2.name) ? 0: 1;
                    }
                    else {
                        return (ecess1.position < ecess2.position) ? 0: 1;
                    }
                })
                setMembers(response);
            });
        }
    }, [members])
    return (
        <>
            <MemberList members={members} component={(person) => {
                const ecess = person.ecess_organization["Spark"];
                return (
                    <>
                        {
                            <Chip label={ecess.position} style={{
                                backgroundColor: `#${intToRGB(hashCode(ecess.position))}`,
                                margin: 2
                            }}/>
                        }
                    </>

                )
            }}/>
        </>
    )
}