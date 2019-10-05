import React from "react";
import {ATimer} from "./components/ATimer";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";
import {WachtBtn} from "./components/WachtBtn";
import {webSocket} from "../index";

import {domeinen, speechQuestions} from "../Config";
import {openingScreen} from "./action/sendAction";
import {AdminState} from "../redux/interfaces/adminState";
import {connect} from "react-redux";

const R0PreShowC = ({domain, dispatch}: { domain?: number, dispatch: any }) => {
    const handleOpening = () => {
        const namen = domeinen.map((it) => it.naam);
        openingScreen(namen, speechQuestions);
    };

    const handleLogout = () => {
        webSocket.send(JSON.stringify({type: "ClearId"}));
    };

    const setDomain = (index: number) => () => {
        const action = {type: "SelectDomain", domain: index};
        webSocket.send(JSON.stringify(action));
        dispatch(action);
    };

    const getColor = (index: number) => {
        return index === domain ? "primary" : "default";
    };

    return (<div>
            <WachtBtn/>

            <ButtonGroup
                color="secondary"
                size="large"
                aria-label="large outlined secondary button group"
                style={{marginTop: "20px", marginBottom: "20px"}}
            >
                <Button
                    color="primary"
                    onClick={handleOpening}
                >
                    Openingsscherm
                </Button>

                <Button
                    color="primary"
                    onClick={handleLogout}
                >
                    Uitloggen
                </Button>
            </ButtonGroup>

            <br/>
            <ButtonGroup>
                {domeinen.map((domein, index) => {
                    return <Button color={getColor(index)} onClick={setDomain(index)}>{domein.naam}</Button>
                })}
            </ButtonGroup>

            <ATimer time="60"/>
        </div>
    )
};


function mapStateToProps(state: AdminState): { domain?: number } {
    return state
}

function mapDispatchToProps(dispatch: any) {
    return {dispatch};
}

export const R0PreShow = connect(mapStateToProps, mapDispatchToProps)(R0PreShowC);