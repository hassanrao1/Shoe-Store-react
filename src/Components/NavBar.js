import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import nike from "./images/nike.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffd615",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkBtn: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={nike} height="50px" width="120px" alt={nike} />
          </Typography>
          <Button color="inherit">
            <Link to="/" className={classes.linkBtn}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="about" className={classes.linkBtn}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="product" className={classes.linkBtn}>
              Product
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
