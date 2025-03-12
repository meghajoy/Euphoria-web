import React from "react";
import Related from "../components/Explore/Explore";

const RelatedScreen = () => {
  const relatedProducts = [
    {
      id: 1,
      name: "High Coziness",
      type: "Low Price",
      img: require("../assets/images/bg-2.jpg"),
    },
    {
      id: 2,
      name: "Breezy Summer Style",
      type: "Beyoung Presents",
      img: require("../assets/images/bg-3.jpg"),
    },
  ];

  return <Related relatedProducts={relatedProducts} />;
};

export default RelatedScreen;