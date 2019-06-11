import React from "react";
import Typography from "@material-ui/core/Typography";
import "./AnswerC.css"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


export class AnswerC extends React.Component<{ value: string }> {

    constructor(props: { value: string }) {
        super(props);
        this.state = props
    }

    render() {

        return (
            <Grid item xs={6}>
                <Paper className="card">
                    <Typography variant="h5" component="h2">
                        {this.props.value}
                    </Typography>
                </Paper>
            </Grid>
        );

    }
}
