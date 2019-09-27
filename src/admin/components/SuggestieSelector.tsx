import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";

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
    return { name, stemmen };
}

const rows = [
    createData('Blij', 4),
    createData('Boos', 3),
];

export default function SuggestieSelector() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Stemmen</TableCell>
                            <TableCell>Suggestie</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell><Button>Verzend</Button></TableCell>
                                <TableCell>{row.stemmen}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}