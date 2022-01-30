import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {R0PreShow} from "./R0PreShow";
import {R1Toeval} from "./R1Toeval";
import {R4FakeNews} from "./R4FakeNews";
import {R6Speech} from "./R6Speech";
import {R2Faal} from "./R2Faal";
import {R5Finale} from "./R5Finale";
import {R3Som} from "./R3Som";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import {domeinen} from "../Config";
import {isDefined} from "../util";
import {deltaSeconds, NewTimer} from "./action/sendAction";
import Leaderboard from './components/Leaderboard';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: "#28b674"
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: "lightgrey"
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
            minHeight: "100vh"
        },
    }),
);

interface Props {
    connections: number,
    domain: number | undefined
}

function AdminC({connections, domain}: Props) {
    const classes = useStyles();

    const [ronde, setRonde] = useState(0);
    const [titel, setTitel] = useState("R0 PreShow");

    let window = null;

    switch (ronde) {
        case 0:
            window = <R0PreShow/>;
            break;
        case 1:
            window = <R1Toeval/>;
            break;
        case 2:
            window = <R2Faal/>;
            break;
        case 3:
            window = <R3Som/>;
            break;
        case 4:
            window = <R4FakeNews/>;
            break;
        case 5:
            window = <R5Finale/>;
            break;
        case 6:
            window = <R6Speech/>;
            break;
    }

    return (
        <div className={"administratie"}>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            {titel}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >{isDefined(domain) && 
                    [<List>
                        {['R0 PreShow', 'R1 Toeval', 'R2 Faal', 'R3 Sommetjes', 'R4 Fake News', 'R5 Finale', 'R6 Speech'].map((text, index) => (
                            <ListItem
                                selected={index === ronde}
                                onClick={() => {
                                    setRonde(index);
                                    setTitel(text)
                                }
                                } button key={text}>
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))}
                    </List>,
                    <Divider/>]
                    }
                    <List dense={true}>
                        {['3', '10', '20', '-1'].map((text, index) => (
                            <ListItem
                                onClick={() => {
                                    NewTimer(Number(text))
                                }
                                } button key={text}>
                                <ListItemText primary={text === '-1' ? "Stop Timer" : text + "s"}/>
                            </ListItem>
                        ))}
                        {['+5', '-5'].map((text, index) => (
                            <ListItem
                                onClick={() => {
                                    deltaSeconds(Number(text))
                                }
                                } button key={text}>
                                <ListItemText primary={text === '-1' ? "Stop Timer" : text + "s"}/>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List dense={true}>
                        <ListItem>
                            <ListItemText>
                                Connecties: {connections}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Domein: {isDefined(domain) ? domeinen[domain].naam : "???"}
                            </ListItemText>
                        </ListItem>
                        {isDefined(domain) &&
                        (<><ListItem>
                                <ListItemText>
                                    Hint 1: {domeinen[domain].hints[0]}
                                </ListItemText>
                            </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Hint 2: {domeinen[domain].hints[1]}
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Hint 3: {domeinen[domain].hints[2]}
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Hint 4: {domeinen[domain].hints[3]}
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Gezocht: {domeinen[domain].wetenschapper}
                                    </ListItemText>
                                </ListItem>
                            </>
                        )
                        }
                    <Divider/>
                    <Leaderboard></Leaderboard>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    {window}
                </main>
            </div>
        </div>
    );
}


function mapStateToProps(adminState: AdminState): Props {
    return {connections: adminState.connections, domain: adminState.domain}
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminC);
