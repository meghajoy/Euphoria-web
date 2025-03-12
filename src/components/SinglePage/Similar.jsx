import React from "react";
import products from "../../data/Product.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Similar() {
  const similar = products.products?.Similar_products;
  return (
    <Wrapper>
      <MainContainer>
        <Container>
          <Bullet></Bullet>
          <Heading>In The Limelight</Heading>
        </Container>
        <ProductsContainer>
          {similar.map((item) => (
            <Products key={item.id} to={`/singlepage/${item.id}`}>
              <WishlistContainer>
                <WishlistImg
                  src={require("../../assets/images/wishlist.svg").default}
                  alt="Wishlist"
                />
              </WishlistContainer>
              <ImageContainer>
                <Image src={item.image} alt="brand" />
              </ImageContainer>
              <Contents>
                <Right>
                  <Category>{item.category}</Category>
                  <Text>{item.brand}</Text>
                </Right>
                <ArrowContainer>
                  <Brands>{item.price}</Brands>
                </ArrowContainer>
              </Contents>
            </Products>
          ))}
        </ProductsContainer>
      </MainContainer>
    </Wrapper>
  );
}

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
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const WishlistContainer = styled.div`
  position: absolute;
  width: 18px;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 8px 8px;
  top: 26px;
  right: 23px;
  @media all and (max-width: 540px) {
    width: 14px;
    padding: 6px 6px;
  }
  @media all and (max-width: 540px) {
    right: 14px;
  }
`;

const WishlistImg = styled.img`
  display: block;
  width: 100%;
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
  height: 500px; 
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
  background: #f6f6f6;
  border-radius: 8px;
  padding: 10px 20px;
`;

const Brands = styled.p`
  font-family: "poppinsmedium";
  font-size: 14px;
  color: #3c4242;
  margin: 0;
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
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
