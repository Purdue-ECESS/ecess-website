// Source: https://mui.com/components/tables/#main-content

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Button} from "@mui/material";
import {Ambassador, Board, Spark, Wece} from "../edit";
import {useState} from "react";
import {adminChangeUserData} from "src/utils/change_user_data";
import {getPersonByUid} from "src/data/data_people";

function createData(
    uid: any,
    name: string,
    ecess_organization: any
) {
    return {
        name,
        ecess_organization,
        uid
    };
}

function Row(props: { row: ReturnType<typeof createData>, organization: string, onMemberChange: any, idx: number }) {
    const { row , organization} = props;
    const [open, setOpen] = React.useState(false);
    const [ecessOrg, setEcessOrg] = useState({...row.ecess_organization});
    const [newEcessOrg, setNewEcessOrg] = useState({});
    const onSave = async () => {
        const updatedUserAttribute = await getPersonByUid(row.uid, true);
        const merged = {...updatedUserAttribute.ecess_organization, ...newEcessOrg};
        await adminChangeUserData(row.uid,
            {ecess_organization: updatedUserAttribute.ecess_organization},
            {ecess_organization: merged});
        setNewEcessOrg({});
        setEcessOrg(merged);
    }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.ecess_organization[organization]?.retired ? "False" : "True"}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <>
                            {
                                organization === "Ambassadors" &&
                                    <Ambassador
                                        ecessOrg={ecessOrg}
                                        setEcessOrgChange={setNewEcessOrg}
                                        onSave={onSave}
                                    />
                            }
                            {
                                organization === "ECESS" &&
                                <Board
                                    disable={false}
                                    ecessOrg={ecessOrg}
                                    setEcessOrgChange={setNewEcessOrg}
                                    onSave={onSave}
                                />
                            }
                            {
                                organization === "WECE" &&
                                <Wece
                                    ecessOrg={ecessOrg}
                                    setEcessOrgChange={setNewEcessOrg}
                                    onSave={onSave}
                                />
                            }
                            {
                                organization === "Spark" &&
                                <Spark
                                    ecessOrg={ecessOrg}
                                    setEcessOrgChange={setNewEcessOrg}
                                    onSave={onSave}
                                />
                            }
                            <Button
                                variant={"contained"}
                                onClick={async () => {
                                    alert("Feature is not Supported Yet");
                                    // const newUserData = await getPersonByUid(row.uid, true);
                                    // delete newUserData.ecess_organization[organization];
                                    // console.log({temp: newUserData.ecess_organization});
                                    // await adminChangeUserData(row.uid, {ecess_organization: ecessOrg},
                                    //     {ecess_organization: newUserData.ecess_organization});
                                    // setNewEcessOrg({});
                                }}
                                style={{margin: 5}}>
                                Remove
                            </Button>
                            <Button
                                variant={"contained"}
                                onClick={ async () => {
                                    let ecess_organization = {...ecessOrg};
                                    if (ecess_organization[organization]) {
                                        ecess_organization[organization]["retired"] = !ecess_organization[organization]["retired"];
                                    }
                                    else {
                                        ecess_organization[organization] = {retired: true};
                                    }
                                    await adminChangeUserData(row.uid,
                                        {ecess_organization: ecessOrg},
                                        {ecess_organization: ecess_organization});
                                    setNewEcessOrg({});
                                }}
                                style={{margin: 5}}>
                                {ecessOrg[organization]?.retired ? "Not Retire": "Retire"}
                            </Button>
                            </>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export function ECESSMemberTable({rows, organization, setMembers}) {
    const onMemberChange = (idx, item) => {
        rows[idx] = item;
        setMembers(rows);
    }
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Member's Name</TableCell>
                        <TableCell align="right">Current</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <Row key={row.uid} row={row} organization={organization} onMemberChange={onMemberChange} idx={i}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
