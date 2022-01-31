import React from 'react';
import {AdminState} from "../redux/adminState";
import {connect} from "react-redux";

import 'react-virtualized/styles.css'
import { ListItem, ListItemText } from '@material-ui/core';

interface Props {
    leaderboard : any
}

function LeaderboardC({leaderboard}: Props) {
    if(leaderboard === undefined){
        return <></>
    }
    return (
        <>{
            Object.entries(leaderboard).map((element : any) => (<ListItem>
                                <ListItemText>
                                    Score {element[0]} : {element[1].length}
                                </ListItemText>
                            </ListItem>))
        }
        </>
    );
}


function mapStateToProps(adminState: AdminState): Props {
    return {leaderboard: adminState.leaderboard}
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardC);
