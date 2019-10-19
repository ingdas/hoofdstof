import React from "react";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";
import {WachtBtn} from "./components/WachtBtn";
import {webSocket} from "../index";

import {domeinen, speechQuestions} from "../Config";
import {openingScreen} from "./action/sendAction";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import SuggestieSelector from "./components/SuggestieSelector";

interface Props {
    domain?: number,
    dispatch: any
}


const R0PreShowC = ({domain, dispatch}: Props) => {
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

            <SuggestieSelector questionId="R0Geslacht"/>
            <SuggestieSelector questionId="R0Naam"/>
            <SuggestieSelector questionId="R0Vakgebied"/>
            <SuggestieSelector questionId="R0Eigenschap"/>


            <ButtonGroup>
                {domeinen.map((domein, index) => {
                    return <Button color={getColor(index)} onClick={setDomain(index)}>{domein.naam}</Button>
                })}
            </ButtonGroup>
     </div>
    )
};


function mapStateToProps(state: AdminState): { domain?: number } {
    return {domain: state.domain}
}

function mapDispatchToProps(dispatch: any) {
    return {dispatch};
}

export const R0PreShow = connect(mapStateToProps, mapDispatchToProps)(R0PreShowC);