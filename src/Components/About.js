import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#ffd615",
    height: "100vh",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>About</h1>
    </div>
  );
}
