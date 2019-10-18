import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import {CTX} from './Store' 

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: "50px"
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  button: {
    width: "15%"
  },
  chatWindow: {
    width: "70%",
    height: "300px"
  },
  chatBox: {
    width: "85%"
  },
  topicsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid blue"
  }
}));

export default function Dashboard() {


  const classes = useStyles();

  //CTX Store here

  const [allChats]  = React.useContext(CTX);
  const topics = Object.keys(allChats);

  const [textValue, changeTextValue] = React.useState("");

  return (
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
            <List>
              {["topic"].map(topic => (
                <ListItem key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {[{ from: "user", msg: "hello" }].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip
                  label={chat.from}
                  variant="outlined"
                  className={classes.chip}
                />

                <Typography variant="body1" gutterBottom>{chat.msg}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Chat entered here"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Send
          </Button>
        </div>
        <Typography variant="caption" display="block" gutterBottom>
          Mustapha Muhammad Garba, 2019
        </Typography>
      </Paper>
    </div>
  );
}
