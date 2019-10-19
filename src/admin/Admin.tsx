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

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: drawerWidth,
            backgroundColor: "#28b674"
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }),
);

export default function AdminScreen() {
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
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        {titel}
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {window}
            </main>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    {['R0 PreShow', 'R1 Toeval', 'R2 Faal', 'R3 Sommetjes', 'R4 Fake News', 'R5 Finale', 'R6 Speech'].map((text, index) => (
                        <ListItem
                        selected={index === ronde}
                        onClick={() => {
                            setRonde(index);
                            setTitel(text)}
                        } button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
