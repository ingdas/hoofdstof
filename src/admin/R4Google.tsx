import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import SuggestieSelector from "./components/SuggestieSelector";

export const R4Google = () => {
    return (<div>
        <WachtBtn/>

        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop : "20px", marginBottom : "20px"}}
        >
            <Button
                color="primary"
                //onClick={handleStart}
            >
                Vraag Plek
            </Button>

        </ButtonGroup>
        <br></br>
        <SuggestieSelector />
        <ATimer time="50"/>


        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop : "20px", marginBottom : "20px"}}
        >
            <Button
                //onClick={handleStop}
            >
                Stel Onware Vraag
            </Button>
            <Button
                //onClick={handleStop}
            >
                Stel Ware Vraag
            </Button>
            <Button
                //onClick={handleStart}
            >
                Toon Resultaat
            </Button>

            <Button
                //onClick={handleStop}
            >
                Zend Hint
            </Button>
        </ButtonGroup>
        <br></br>
        <ATimer time="15"/>
    </div>)
};