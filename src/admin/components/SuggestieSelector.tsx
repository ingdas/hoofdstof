import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import {webSocket} from "../../index";
import {pingScreen} from "../../redux/playerActions";
import {AdminState} from "../../redux/interfaces/adminState";
import {connect} from "react-redux";

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

function createData(name: string, stemmen: number) {
    return {name, stemmen};
}

function SuggestieSelectorC({adminState, questionId}: { adminState: AdminState, questionId: string }) {
    const classes = useStyles();

    const goPing = (suggestie: string) => () => {
        webSocket.send(JSON.stringify(pingScreen(suggestie)));
    };

    let rows = [];

    const answerCollection = adminState.answers[questionId] || {};
    for (const k of Object.keys(answerCollection)) {
        const v = answerCollection[k];
        rows.push(createData(k, v));
    }
    rows.sort((a,b) => b.stemmen-a.stemmen);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>{questionId}</TableCell>
                            <TableCell>Suggestie</TableCell>
                            <TableCell>Stemmen</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell><Button onClick={goPing(row.name)}>Verzend</Button></TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.stemmen}</TableCell>
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
