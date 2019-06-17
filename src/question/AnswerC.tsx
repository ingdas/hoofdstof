import React, {MouseEventHandler} from "react";
import Typography from "@material-ui/core/Typography";
import "./AnswerC.css"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export interface AnswerProps {
    selected : boolean
    value : string;
    onClick : MouseEventHandler
}

export class AnswerC extends React.Component<AnswerProps, {}> {

    getColor() : string{
        if(this.props.selected){
            return "lightblue"
        }else{
            return "white"
        }
    }

    render() {

        return (
            <Grid item xs={6}>
                <Paper onClick={this.props.onClick} className="card" style={{backgroundColor : this.getColor()} }>
                    <Typography variant="h5" component="h2">
                        {this.props.value}
                    </Typography>
                </Paper>
            </Grid>
        );

    }
}
