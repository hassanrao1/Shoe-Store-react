import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import ProductItems from "./Components/ProductItems";
import NavBar from "./Components/NavBar";
import { makeStyles } from "@material-ui/core/styles";

function NotFound() {
  return <div>404 Not Found</div>;
}
const useStyles = makeStyles((theme) => ({
  root: {},
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductItems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
