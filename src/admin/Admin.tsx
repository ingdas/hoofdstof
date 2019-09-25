import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import {R1Toeval} from "./R1Toeval";
import {R0PreShow} from "./R0PreShow";
import {R4Google} from "./R4Google";
import {R2Faal} from "./R2Faal";
import {R5Finale} from "./R5Finale";
import {R6Speech} from "./R6Speech";
import {R3Som} from "./R3Som";

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);

const AdminScreen = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel0');

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <ExpansionPanel square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                <ExpansionPanelSummary aria-controls="panel0d-content" id="panel0d-header">
                    <Typography>R0PreShow</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <R0PreShow></R0PreShow>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>R1Toeval</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <R1Toeval></R1Toeval>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>R2Faal</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <R2Faal></R2Faal>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>R3Som</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <R3Som></R3Som>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>R4Google</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <R4Google></R4Google>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>R5Finale</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <R5Finale></R5Finale>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>R6Speech</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <R6Speech></R6Speech>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default AdminScreen