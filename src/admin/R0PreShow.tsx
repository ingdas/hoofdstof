import React from "react";
import {ATimer} from "./components/ATimer";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";
import {WachtBtn} from "./components/WachtBtn";
import {webSocket} from "../index";

import {domeinen, speechQuestions} from "../Config";
import {openingScreen} from "./action/sendAction";

export const R0PreShow = () => {
    const handleOpening = () => {
        const namen = domeinen.map((it) => it.naam);
        openingScreen(namen, speechQuestions);
    };

    const handleLogout = () => {
        webSocket.send(JSON.stringify({type: "ClearId"}));
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

            <ATimer time="60"/>
        </div>
    )
};