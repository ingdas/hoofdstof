import React, {FormEvent, FormEventHandler} from "react";
import {LoginState, OpeningState} from "../redux/states";
import {connect} from "react-redux";
import {handleTextUpdate, waitScreen} from "../redux/actions";
import {AppState} from "../redux/appstate";
import {FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import {RadioProps} from "@material-ui/core/Radio";
import clsx from "clsx";
import {Answer} from "../question/AnswerC";


interface Props {
    professionList : Array<string>
}

// Inspired by blueprintjs

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
        paddingLeft : "20px"
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});

function StyledRadio(props: RadioProps) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}
const OpeningC = ({professionList}: Props) => {
    console.log("Rendering Opening");
    return (
        <div>
            <div style={{"backgroundColor" : "white"}}>
                <div className="qTitle">Is de professor een man of een vrouw?</div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="customized-radios">
                        <FormControlLabel value="vrouw" control={<StyledRadio />} label="Vrouw" />
                        <FormControlLabel value="man" control={<StyledRadio />} label="Man" />
                    </RadioGroup>
                </FormControl>
                <div className="qTitle">Wat is het vakgebied van de professor?</div>
                <RadioGroup aria-label="beroep" name="customized-radios">
                {professionList.map((v, index) => <FormControlLabel value={v} control={<StyledRadio />} label={v} />)}
                </RadioGroup>
                <div className="qTitle">Wat is de naam van de professor?</div>
                <div style={{"padding" : "10px", "backgroundColor": "white"}}>
                    <TextField
                        style={ {} }
                        label="Naam"
                    />
                </div>
                <Button
                    style={{"margin": "20px"}}
                    variant="contained"
                    color="primary"
                >
                    Start
                    <Icon>send</Icon>
                </Button>
            </div>
        </div>)
};

function mapStateToProps(state: AppState) {
    const {professionList} = state.window as OpeningState;
    return {professionList}
}

function mapDispatchToProps(dispatch: any) {
    // noinspection JSUnusedGlobalSymbols
    return {
        onChange: (evt: FormEvent) => {
            // @ts-ignore
            dispatch(handleTextUpdate(evt.target.value))
        },
        finishLogin: () => {
            dispatch(waitScreen())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OpeningC);