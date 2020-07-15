import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "./../shoe.json";

function ProductItems() {
  const { id } = useParams();
  const shoe = Shoes[id];

  console.log(shoe);
  if (!shoe) {
    return <h1>Product not found</h1>;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{shoe.name}</h2>
      <h5>Color: Red,Green,Yellow,Blue</h5>
      <h5>Price: 5$</h5>

      <img src={shoe.img} alt={shoe} height="500px" />
    </div>
  );
}

export default ProductItems;
