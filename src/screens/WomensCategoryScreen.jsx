import React from "react";
import WomensCategory from "../components/WomensCategory/WomentsCategory";
import products from "../data/Product.json";

const WomensCategoryScreen = () => {
  const womenProducts = products.products?.Women || []; 

  return <WomensCategory womenProducts={womenProducts} />;
};

export default WomensCategoryScreen;