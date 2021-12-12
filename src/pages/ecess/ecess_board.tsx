import {MemberList} from "../../components/widgets/lists/member_list";
import {getMembersFromOrganization} from "../../data/data_people";
import {Chip, Typography} from "@material-ui/core";
import {hashCode, intToRGB} from "../../utils";
import React from "react";


export function EcessBoard() {
    const members = getMembersFromOrganization("ECESS");
    members.sort((item1, item2) => {
        const required_order = ["Secretary, Treasurer", "Vice President", "President"];
        const ecess1 = item1.ecess_organization["ECESS"];
        const ecess2 = item2.ecess_organization["ECESS"];

        if (required_order.indexOf(ecess1.board_position) !== -1 || required_order.indexOf(ecess2.board_position) !== -1) {
            return required_order.indexOf(ecess2.board_position) - required_order.indexOf(ecess1.board_position);
        }

        if (ecess1.board_position === ecess2.board_position) {
            return (item1.name < item2.name) ? 0: 1;
        }
        else {
            return (ecess1.board_position < ecess2.board_position) ? 0: 1;
        }
    })
    return (
        <>
            <MemberList members={members} component={(person) => {
                const ecess = person.ecess_organization["ECESS"];
                return (
                    <>
                        {
                            <Chip label={ecess.board_position} style={{
                                backgroundColor: `#${intToRGB(hashCode(ecess.board_position))}`,
                                margin: 2
                            }}/>
                        }
                        {person.hometown ?
                            <Typography variant={"body2"}>Hometown: {person.hometown}</Typography>:<></>}
                        {ecess.fav_class ?
                            <Typography variant={"body2"}>Favorite Class: {ecess.fav_class}</Typography>: <></>}
                        {ecess.quote ?
                            <Typography variant={"body2"} style={{fontStyle: 'italic', marginTop: 10}}>
                                <q>
                                    {ecess.quote instanceof Object ? ecess.quote.msg: ecess.quote}
                                </q>
                                {ecess.quote instanceof Object ? "- " +  ecess.quote.author: ''}
                            </Typography> : <></>
                        }
                    </>

                )
            }}/>
        </>
    )
}