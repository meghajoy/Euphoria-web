import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../data/Product.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ProductDescription from "./ProductDiscription";
//import SimilarProducts from "./SimilarProduct";
import Similar from "./Similar";

const SinglePage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState([]);

  const product = Object.values(Products.products)
    .flat()
    .find((item) => item.id.toString() === id);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleClick = (item) => {
    setSelectedImage(item);
  };

  return (
    <>
      <DividerTop></DividerTop>
      <Header />
      <Wrapper>
        <MainContainer>
          <ProductGallery
            productImages={product.detail_images}
            selectedImage={selectedImage}
            handleClick={handleClick}
          />
          <ProductDetails product={product} />
        </MainContainer>
        <ProductDescription />
        <Similar category={product.category} id={id} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default SinglePage;

// Keep your styled components the same

const DividerTop = styled.div`
  border: 0.5px solid #bebcbd;
  margin-bottom: 18px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  display: flex;
  @media all and (max-width: 980px) {
    flex-wrap: wrap;
  }
`;
