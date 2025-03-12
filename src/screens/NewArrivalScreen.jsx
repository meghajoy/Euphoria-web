import React from "react";
import NewArrival from "../components/NewArrival/NewArrival";
import products from "../data/Product.json";

const NewArrivalScreen = () => {
    console.log("Imported products:", products);

  const newArrivals = products?.products?.Newarrival || [];

  return <NewArrival newArrivals={newArrivals} />;
};

export default NewArrivalScreen;