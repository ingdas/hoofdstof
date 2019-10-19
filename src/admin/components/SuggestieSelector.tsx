import React from 'react';
import {AdminState} from "../redux/adminState";
import {connect} from "react-redux";
import {chartQuestion, pingScreen} from "../action/sendAction";
import {Column, Table} from 'react-virtualized';

import 'react-virtualized/styles.css'
import {Button} from "@material-ui/core";

function SuggestieSelectorC({adminState, questionId}: { adminState: AdminState, questionId: string }) {

    function createData(name: string, stemmen: number, eerste: string) {
        return {name, stemmen, eerste};
    }

    const goPing = (suggestie: string, naam: string) => () => {
        console.log("goPing", suggestie, naam);
        pingScreen(suggestie, naam);
    };

    let rows: {
        name: string, eerste: string, stemmen: number
    }[] = [];

    const answerCollection = adminState.answers[questionId] || {};
    const firstOneCollection = adminState.firstOne[questionId] || {};
    let totalVotes = 0;
    for (const k of Object.keys(answerCollection)) {
        const v = answerCollection[k];
        const f = firstOneCollection[k];
        totalVotes += v;
        rows.push(createData(k, v, f));
    }
    rows.sort((a, b) => b.stemmen - a.stemmen);

    return (
        <div>
            <Table
                width={1000}
                height={Math.min(50 + rows.length * 30, 600)}
                headerHeight={20}
                rowHeight={30}
                rowCount={rows.length}
                rowGetter={({ index } : {index : number}) => rows[index]}
                rowClassName={({ index }) => {
                    if(index!==-1 && index%2===0) {
                        return "rowEven"
                    } else {
                        return "rowOdd"
                    }}}
            >
                <Column
                    width={90}
                    cellRenderer={({rowData}) =>
                        <Button onClick={goPing(rowData.name, rowData.eerste)}>VERZEND</Button>
                    }
                    dataKey={"id"}
                    label={``}
                    headerRenderer={() => <Button
                        onClick={(evt) => chartQuestion(questionId)}>{questionId}</Button>}
                    />
                <Column
                    width={80}
                    label=''
                    dataKey='stemmen'
                />
                <Column
                    label={`${totalVotes} / ${adminState.connections}`}
                    dataKey='name'
                    width={510}
                    cellRenderer={({rowData}) =>
                        <span onClick={() => chartQuestion(questionId, rowData.name)}>{rowData.name}</span>
                    }
                />
                <Column
                    width={200}
                    label=''
                    dataKey='eerste'
                />
            </Table>
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
