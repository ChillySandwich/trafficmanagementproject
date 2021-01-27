import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            The Traffic Management Plan Guide
          </Grid>
          <Grid item xs={8} />
          <Grid items cs={2}></Grid>
          Logout
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={6}>
            TESTING GRID LAYOUT from material-ui library, Links will go on this
            side and the map will go on the right hand side
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
