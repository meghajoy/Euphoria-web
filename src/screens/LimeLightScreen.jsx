import React from "react";
import LimeLight from "../components/LimeLight/LimeLight";
import products from "../data/Product.json";

const LimeLightScreen = () => {
  const limelight = products.products?.Limelight || []; 

  return <LimeLight limelight={limelight} />;
};

export default LimeLightScreen;