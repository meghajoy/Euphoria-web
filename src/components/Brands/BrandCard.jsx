import React from "react";
import styled from "styled-components";

const BrandCard = ({ img, alt }) => {
  return (
    <ImageContainer>
      <Image src={img} alt={alt} />
    </ImageContainer>
  );
};

export default BrandCard;

const ImageContainer = styled.div`
  width: 168px;
  height: 70px;
  padding: 8px 10px;
  background-color: white;
  border-radius: 12px;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    height: 51px;
    width: 124px;
  }
  @media all and (max-width: 980px) {
    height: 44px;
    width: 90px;
  }
  @media all and (max-width: 768px) {
    height: 32px;
    width: 76px;
  }
  @media all and (max-width: 768px) {
    height: 29px;
    width: 58px;
  }
  @media all and (max-width: 540px) {
    height: 20px;
    width: 50px;
  }
  @media all and (max-width: 480px) {
    height: 15px;
    width: 28px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;