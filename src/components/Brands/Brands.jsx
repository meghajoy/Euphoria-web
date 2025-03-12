import React from "react";
import styled from "styled-components";
import BrandCard from "./BrandCard";

const Brands = ({ brands }) => {
  return (
    <Wrapper>
      <MainContainer>
        <Heading>Top Brands Deal</Heading>
        <SubHeading>
          Up To <Spans>60% </Spans>off on brands
        </SubHeading>
        <BrandContainer>
          {brands.map((item) => (
            <BrandCard key={item.id} img={item.img} alt={`brand-${item.id}`} />
          ))}
        </BrandContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default Brands;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 60px 0;
  @media all and (max-width: 768px) {
    padding: 36px 0;
  }
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #3c4242;
  border-radius: 12px;
  padding: 34px 0;
  @media all and (max-width: 640px) {
    padding: 20px 0;
  }
`;

const Heading = styled.h3`
  font-size: 40px;
  font-family: "poppinsbold";
  color: #ffffff;
  margin: 0;
  @media all and (max-width: 640px) {
    font-size: 35px;
  }
  @media all and (max-width: 540px) {
    font-size: 30px;
  }
`;

const SubHeading = styled.p`
  color: #ffffff;
  font-family: "poppinsregular";
  margin-bottom: 60px;
  font-size: 16px;
  @media all and (max-width: 980px) {
    margin-bottom: 30px;
  }
  @media all and (max-width: 768px) {
    margin-top: 0;
  }
  @media all and (max-width: 640px) {
    font-size: 14px;
  }
  @media all and (max-width: 540px) {
    margin-bottom: 18px;
  }
`;

const Spans = styled.span`
  color: #fbd103;
  font-family: "poppinsbold";
`;

const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  @media all and (max-width: 1400px) {
    width: 90%;
  }
`;