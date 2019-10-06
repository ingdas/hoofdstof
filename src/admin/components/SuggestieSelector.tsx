import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import {AdminState} from "../redux/adminState";
import {connect} from "react-redux";
import {pingScreen} from "../action/sendAction";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            marginTop: theme.spacing(3),
            width: '100%',
            overflowX: 'auto',
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 650,
        },
    }),
);

function createData(name: string, stemmen: number, eerste: string) {
    return {name, stemmen, eerste};
}

function SuggestieSelectorC({adminState, questionId}: { adminState: AdminState, questionId: string }) {
    const classes = useStyles();

    const goPing = (suggestie: string, naam: string) => () => {
        pingScreen(suggestie, naam);
    };

    let rows = [];

    const answerCollection = adminState.answers[questionId] || {};
    const firstOneCollection = adminState.firstOne[questionId] || {};
    for (const k of Object.keys(answerCollection)) {
        const v = answerCollection[k];
        const f = firstOneCollection[k];
        rows.push(createData(k, v, f));
    }
    rows.sort((a, b) => b.stemmen - a.stemmen);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>{questionId}</TableCell>
                            <TableCell>Suggestie</TableCell>
                            <TableCell>Stemmen</TableCell>
                            <TableCell>Eerste</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell><Button onClick={goPing(row.name, row.eerste)}>Verzend</Button></TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.stemmen}</TableCell>
                                <TableCell>{row.eerste}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}


function mapStateToProps(adminState: AdminState): { adminState: AdminState } {
    return {adminState}
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestieSelectorC);
