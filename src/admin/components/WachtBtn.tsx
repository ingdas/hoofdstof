import React from "react";
import Button from "@material-ui/core/Button";
import {waitScreenDisplay, waitScreenPlayer} from "../action/sendAction";

export const WachtBtn = () => {
    const handleClick = () => {
        waitScreenPlayer();
    };
    const handleClickD = () => {
        waitScreenDisplay();
    };
    const handleClickA = () => {
        waitScreenPlayer();
        waitScreenDisplay();
    };

    return (
        <div>
            <Button
                color="primary"
                onClick={handleClickA}
            >Wacht All
            </Button>
            <Button
                color="primary"
                onClick={handleClick}
            >Wacht Speler
            </Button>
            <Button
                color="primary"
                onClick={handleClickD}
            >Wacht Display
            </Button>
        </div>
    )
};