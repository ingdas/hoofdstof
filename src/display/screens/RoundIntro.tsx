import React from "react";
import {connect} from "react-redux";
import {DisplayState, RoundIntroState} from "../redux/displayState";
import R1 from "../../img/ronde1.png";
import R2 from "../../img/ronde2.png";
import R3 from "../../img/ronde3.png";
import R4 from "../../img/ronde4.png";
import R5 from "../../img/ronde5.png";


interface Props {
    name: string
}

const RoundIntroC = ({name}: Props) => {
    let titel = "";
    let img = "";
    switch (name) {
        case "1":
            titel = "Da's toevallig!";
            img = R1;
            break;
        case "2":
            titel = "Faalangst!";
            img = R2;
            break;
        case "3":
            titel = "Sommetjes!";
            img = R3;
            break;
        case "4":
            titel = "Fake News!";
            img = R4;
            break;
        case "5":
            titel = "De Finale!";
            img = R5;
            break;
    }

    return (
        <div style={{display: "flex", flexDirection: "column", margin: "-20px", alignContent: "center"}}>
            <div style={{marginTop: "40px", marginBottom: "-100px"}}>
                <img
                    alt="hoofdstof"
                    src={img}
                    style={{
                        height: "65vh",
                        display: "block",
                        margin: "auto"
                    }}
                />
            </div>
            <h1 style={{textAlign: "center", fontSize: "120px"}}>{titel}</h1>

        </div>
    )
};

export function mapStateToProps(state: DisplayState): Props {
    return (state as RoundIntroState)
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundIntroC);