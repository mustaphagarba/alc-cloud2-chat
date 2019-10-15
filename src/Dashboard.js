import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      margin:   '50px',
    },
    flex: {
        display: 'flex',
    },
    button: {
        width: '15%',
    },
    chatWindow: {
        width: '70%',
        height: '300px',
    },
    chatBox: {
        width: '85%',
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight:    '1px solid blue',
    },
  }));


export default function Dashboard(){

    const classes = useStyles();

    return(
        <div>
        <Paper className={classes.root}>
            <Typography variant="h3" component="h3">
                Simple chat app for ALC 4.0 Phase 2 challenge.
            </Typography>
            <Typography variant="h5" component="h5">
                Current Topic Here
            </Typography>
            <div className={classes.flex}>
                <div className={classes.topicsWindow}>

                </div>
                <div className={classes.chatWindow}>

                </div>
            </div>
            <div className={classes.flex}>
                
            </div>
            <Typography variant="caption" display="block" gutterBottom>
                Mustapha Muhammad Garba, 2019
            </Typography>
        </Paper>
        </div>
    )
}