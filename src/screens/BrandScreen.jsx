import React from "react";
import Brands from "../components/Brands/Brands";

const BrandsScreen = () => {
  const brands = [
    {
      id: 1,
      img: "../../../../assets/images/nike.jpg",
    },
    {
      id: 2,
      img: "../../../../assets/images/hm.jpg",
    },
    {
      id: 3,
      img: "../../../../assets/images/levis.jpg",
    },
    {
      id: 4,
      img: "../../../../assets/images/USPA.jpg",
    },
    {
      id: 5,
      img: "../../../../assets/images/puma.jpg",
    },
  ];

  return <Brands brands={brands} />;
};

export default BrandsScreen;