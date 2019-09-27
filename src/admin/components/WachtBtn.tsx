import React from "react";
import Button from "@material-ui/core/Button";
import {webSocket} from "../../index";
import {waitScreen} from "../../redux/actions";

export const WachtBtn = () => {
    const handleClick = () => {
        webSocket.send(JSON.stringify(waitScreen()));
    };

    return (
        <Button
            color="primary"
            onClick={handleClick}
        >Wachtscherm
        </Button>
    )
};