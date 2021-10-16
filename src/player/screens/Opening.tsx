import React, {useState} from "react";
import {connect} from "react-redux";
import {Card, CardContent, CardHeader, FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {RadioProps} from "@material-ui/core/Radio";
import clsx from "clsx";
import {changeListener, isDefined} from "../../util";
import {answerQuestion, waitScreen} from "../playerActions";
import {AppState} from "../interfaces/appState";
import {OpeningQuestion} from "../interfaces/question";
import {PlayerPosingQuestion} from "../interfaces/playerState";


interface Props {
    professions: Array<string>
    speechQuestion: string
    alreadyDone: boolean
    dispatch: any
}

// Inspired by blueprintjs

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
        paddingLeft: "20px"
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
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
            icon={<span className={classes.icon}/>}
            {...props}
        />
    );
}

const OpeningC = ({professions, speechQuestion, dispatch, alreadyDone}: Props) => {
    if (alreadyDone) {
        dispatch(waitScreen());
    }

    let [geslacht, setGeslacht] = useState("");
    let [vakgebied, setVakgebied] = useState("");
    let [naam, setNaam] = useState("");
    let [eigenschap, setEigenschap] = useState("");
    let [zin, setZin] = useState("");
    let [woord, setWoord] = useState("");

    const finishForm = () => {
        dispatch(answerQuestion("R0Geslacht", geslacht));
        dispatch(answerQuestion("R0Vakgebied", vakgebied));
        dispatch(answerQuestion("R0Naam", naam));
        dispatch(answerQuestion("R0Eigenschap", eigenschap));
        dispatch(answerQuestion("R0Zin", zin));
        dispatch(answerQuestion("R0Woord", woord));
        dispatch(waitScreen());
    };

    const isDisabled = [geslacht, vakgebied, naam, eigenschap, zin, woord].some(x => x === "");

    return (<div>
        <Card>
            <CardContent>
            <Typography>
            Via dit formulier help je ons mee de show te starten. Maar leg je gsm niet te ver weg, tijdens de show zullen nieuwe vragen op deze pagina verschijnen. Jullie beslissen zo mee hoe onze voorstelling eruit ziet.
            </Typography>
            </CardContent>
        </Card>

        <div style={{padding: "20px"}}></div>
        <Card>
            <CardContent>
            <Typography variant="h5" component="div">
            Wat wil je dat het geslacht is van onze wetenschapper?
            </Typography>
            <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="customized-radios" value={geslacht}
                                onChange={changeListener(setGeslacht)}>
                        <FormControlLabel value="vrouw" control={<StyledRadio/>} label="Vrouw"/>
                        <FormControlLabel value="man" control={<StyledRadio/>} label="Man"/>
                    </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>

        <div style={{padding: "20px"}}></div>
        <Card>
            <CardContent>
            <Typography variant="h5" component="div">
            Welk domein wil je dat onze wetenschapper onderzoekt?
            </Typography>
            <RadioGroup aria-label="beroep" value={vakgebied} onChange={changeListener(setVakgebied)}
                            name="customized-radios">
                    {professions.map((v, index) => <FormControlLabel key={index} value={v} control={<StyledRadio/>}
                                                                     label={v}/>)}
            </RadioGroup>
            </CardContent>
        </Card>
        <div style={{padding: "20px"}}></div>
        <Card>
            <CardContent>
            <Typography variant="h5" component="div">
            Hoe heet onze wetenschapper?
            </Typography>
            <TextField
                        style={{}}
                        label="Doe hier een voorstel"
                        value={naam}
                        onChange={changeListener(setNaam)}
                    />
            </CardContent>
        </Card>
        <div style={{padding: "20px"}}></div>
        <Card>
            <CardContent>
            <Typography variant="h5" component="div">
            Wat maakt onze wetenschapper bijzonder?
            </Typography>
            <TextField
                        style={{}}
                        label="Doe hier een voorstel"
                        value={eigenschap}
                        onChange={changeListener(setEigenschap)}
                    />
            </CardContent>
        </Card>
        <div style={{padding: "20px"}}></div>
        <Card>
            <CardContent>
            <Typography variant="h5" component="div">
            Een zin die wetenschappelijk klinkt
            </Typography>
            <TextField
                        style={{}}
                        label="Het hoeft niet echt te kloppen"
                        value={zin}
                        onChange={changeListener(setZin)}
                    />
            </CardContent>
        </Card>
        <div style={{padding: "20px"}}></div>
        <Card>
            <CardContent>
            <Typography variant="h5" component="div">
            {speechQuestion}
            </Typography>
            <TextField
                        style={{}}
                        label="Woord"
                        value={woord}
                        onChange={changeListener(setWoord)}
                    />
            </CardContent>
        </Card>

        <Button
                    style={{"margin": "20px", "width" : "80vw"}}
                    variant="contained"
                    color="primary"
                    onClick={finishForm}
                    disabled={isDisabled}
                >
                    Start
                </Button>
        </div>)
};

function mapStateToProps(state: AppState) {
    const {speechQuestions, professions} = ((state.playerState as PlayerPosingQuestion).question as OpeningQuestion);
    const playerId = Math.abs(Number(state.player.id.slice(0, 10)));
    const speechQuestion = speechQuestions[playerId % speechQuestions.length];

    const alreadyDone = isDefined((state.player.answers["R0Geslacht"]));

    return {professions, speechQuestion, alreadyDone}
}

function mapDispatchToProps(dispatch: any) {
    return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(OpeningC);