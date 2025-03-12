import React from "react";
import MensCategory from "../components/MensCategory/MensCategory";
import products from "../data/Product.json";

const MensCategoryScreen = () => {
  const menProducts = products.products?.Men || []; // Add fallback for undefined data

  return <MensCategory menProducts={menProducts} />;
};

export default MensCategoryScreen;