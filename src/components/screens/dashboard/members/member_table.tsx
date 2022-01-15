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
    const { row , organization, onMemberChange, idx } = props;
    const [open, setOpen] = React.useState(false);
    const ecessOrg = row.ecess_organization;
    const [newEcessOrg, setEcessOrgChange] = useState({});
    const onSave = async () => {
        const response = await adminChangeUserData(row.uid,
            {ecess_organization: ecessOrg},
            {ecess_organization: newEcessOrg});
        onMemberChange(idx, response);
        setEcessOrgChange({});
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
                            {
                                organization === "Ambassadors" &&
                                    <Ambassador
                                        ecessOrg={ecessOrg} setEcessOrgChange={setEcessOrgChange} onSave={onSave}
                                    />
                            }
                            {
                                organization === "ECESS" &&
                                <Board
                                    ecessOrg={ecessOrg} setEcessOrgChange={setEcessOrgChange} onSave={onSave}
                                />
                            }
                            {
                                organization === "WECE" &&
                                <Wece
                                    ecessOrg={ecessOrg} setEcessOrgChange={setEcessOrgChange} onSave={onSave}
                                />
                            }
                            {
                                organization === "Spark" &&
                                <Spark
                                    ecessOrg={ecessOrg} setEcessOrgChange={setEcessOrgChange} onSave={onSave}
                                />
                            }
                            <Button
                                variant={"contained"}
                                onClick={() => {
                                    alert("Nobody at the Moment can Perform this Action. Contact the Web Dev to Remove Someone");
                                }}
                                style={{margin: 5}}>
                                Remove
                            </Button>
                            <Button
                                variant={"contained"}
                                onClick={ async () => {
                                    let ecess_organization = {};
                                    ecess_organization[organization] = {retired: true};
                                    await adminChangeUserData(row.uid,
                                        {ecess_organization: ecessOrg},
                                        {ecess_organization: ecess_organization});
                                    setEcessOrgChange({});
                                }}
                                style={{margin: 5}}>
                                Retire
                            </Button>
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
                        <Row key={row.name} row={row} organization={organization} onMemberChange={onMemberChange} idx={i}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
