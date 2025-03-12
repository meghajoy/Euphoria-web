import React from "react";
import styled from "styled-components";
import products from "../../data/Product.json";
import { Link } from "react-router-dom";

const WomensCategory = () => {
  const womenProducts = products.products?.Women;
  return (
    <Wrapper>
      <MainContainer>
        <Container>
          <Bullet></Bullet>
          <Heading>Categories For Women</Heading>
        </Container>
        <ProductsContainer>
          {womenProducts.map((item) => (
            <Products key={item.id} to={`/singlepage/${item.id}`}>
              <ImageContainer>
                <Image src={item.image} alt="categorywomen" />
              </ImageContainer>
              <Contents>
                <Right>
                  <Category>{item.category}</Category>
                  <Text>Explore Now!</Text>
                </Right>
                <ArrowContainer>
                  <Arrow
                    src={
                      require("../../assets/images/arrow-right.svg")
                        .default
                    }
                    alt="arrow-right"
                  />
                </ArrowContainer>
              </Contents>
            </Products>
          ))}
        </ProductsContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default WomensCategory;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MainContainer = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Bullet = styled.div`
  background-color: #8a33fd;
  width: 6px;
  height: 30px;
  border-radius: 10px;
  margin-right: 15px;
`;

const Heading = styled.h3`
  font-size: 32px;
  font-family: "poppinsregular";
  font-weight: 600;
  color: #3c4242;
  margin-top: 38px;
  @media all and (max-width: 980px) {
    font-size: 26px;
  }
  @media all and (max-width: 540px) {
    margin-top: 30px;
  }
  @media all and (max-width: 480px) {
    font-size: 20px;
    margin-top: 24px;
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; 
  padding: 30px 0;
  @media all and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr); 
  }
  @media all and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    padding: 0;
  }
  @media all and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Products = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
  height: 500px; /* Reduced image height */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const Contents = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Right = styled.div``;

const ArrowContainer = styled.div`
  width: 15px;
  @media all and (max-width: 768px) {
    width: 10px;
  }
`;

const Arrow = styled.img`
  display: block;
  width: 100%;
`;

const Category = styled.p`
  font-size: 15px;
  font-family: "poppinsmedium";
  font-weight: 700;
  color: #2a2f2f;
  margin: 0;
  margin-bottom: 3px;
  @media all and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-family: "poppinsregular";
  font-size: 12px;
  color: #7f7f7f;
  margin: 0;
  @media all and (max-width: 768px) {
    font-size: 10px;
  }
`;