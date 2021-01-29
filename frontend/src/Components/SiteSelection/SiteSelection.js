import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SiteSelectionForm from '../SiteSelection/SiteSelectionForm';
import SiteSelectionMap from '../SiteSelection/SiteSelectionMap';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function CenteredGrid() {
    const classes = useStyles();

        return ( <div>
           <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className={classes.paper}>Site Selection Page</h1>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}><SiteSelectionForm/></div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}><SiteSelectionMap/></div>
        </Grid>
      </Grid>
      </div>
       );
    
}