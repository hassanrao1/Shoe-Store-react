import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Shoe from "./../shoe.json";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(1),
      height: theme.spacing(25),
      padding: theme.spacing(1.5),
    },
    justifyContent: "center",
    width: "100%",
    marginTop: "20px",
  },
  imgFloat: {
    float: "right",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "0.9em",
  },
  btn: {
    textDecoration: "none",
    color: "#fff",
    background:
      " linear-gradient(90deg, hsla(49, 100%, 54%, 0.8) 47%, hsla(108, 100%, 37%, 1) 100%);",
    padding: "9px 15px",
    borderRadius: "50px",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.keys(Shoe).map((keyname) => {
        const shoe = Shoe[keyname];
        return (
          <Paper key={keyname} elevation={2} style={{ width: "300px" }}>
            <h2 className={classes.heading}>{shoe.name}</h2>

            <img
              src={shoe.img}
              alt={shoe}
              height="150px"
              className={classes.imgFloat}
            />
            <p>Colors: Available</p>
            <Button>
              <Link to={`/product/${keyname}`} className={classes.btn}>
                Order Now
              </Link>
            </Button>
          </Paper>
        );
      })}
    </div>
  );
}
