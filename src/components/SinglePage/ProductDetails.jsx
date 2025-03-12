import React from "react";
import styled from "styled-components";

const ProductDetails = ({ product }) => {
  return (
    <RightContainer>
      <Categories>
        <CategoryContent>Shop</CategoryContent>
        <RightArrowContainer>
          <ArrowImage
            src={require("../../assets/images/right-arrow-light.svg").default}
            alt="right-arrow"
          />
        </RightArrowContainer>
        <CategoryContent>Women</CategoryContent>
        <RightArrowContainer>
          <ArrowImage
            src={require("../../assets/images/right-arrow-light.svg").default}
            alt="right-arrow"
          />
        </RightArrowContainer>
        <CategoryContent>Top</CategoryContent>
      </Categories>
      <Heading>{product.category}</Heading>
      <RatingDiv>
        <RatingImgContainer>
          <RatingImg
            src={require("../../assets/images/review5.svg").default}
            alt="rating-img"
          />
        </RatingImgContainer>
        <RatingSpan>3.5</RatingSpan>
        <CommentImgContainer>
          <CommentImg
            src={require("../../assets/images/message.svg").default}
            alt="comment-img"
          />
        </CommentImgContainer>
        <CommentSpan>120 comment</CommentSpan>
      </RatingDiv>
      <SizeContainer>
        <SizeSubDiv>
          <SelectSize>Select Size</SelectSize>
          <SelectGuide>SelectGuide</SelectGuide>
          <RightArrowDiv>
            <RightArrow
              src={require("../../assets/images/arrow-right.svg").default}
              alt="right-arrow"
            />
          </RightArrowDiv>
        </SizeSubDiv>
        <SelectionSize>
          <Sizes>
            <Size>XS</Size>
          </Sizes>
          <Sizes>
            <Size>S</Size>
          </Sizes>
          <Sizes>
            <Size>M</Size>
          </Sizes>
          <Sizes>
            <Size>L</Size>
          </Sizes>
          <Sizes>
            <Size>XL</Size>
          </Sizes>
        </SelectionSize>
      </SizeContainer>
      <ColorsContainer>
        <ColorsAvailableText>Colours Available</ColorsAvailableText>
        <Colors>
          <BlackContainer>
            <Black></Black>
          </BlackContainer>
          <BlackContainer>
            <Yellow></Yellow>
          </BlackContainer>
          <BlackContainer>
            <Pink></Pink>
          </BlackContainer>
          <BlackContainer>
            <Brown></Brown>
          </BlackContainer>
        </Colors>
      </ColorsContainer>
      <BuyContainer>
        <AddCartDiv>
          <CartContainer>
            <CartImgContainer>
              <CartImg
                src={require("../../assets/images/cart-1.svg").default}
                alt="cart-img"
              />
            </CartImgContainer>
            <CartText>Add to cart</CartText>
          </CartContainer>
        </AddCartDiv>
        <PriceDiv>
          <Price>$63.00</Price>
        </PriceDiv>
      </BuyContainer>
      <Divider></Divider>
      <DetailsDiv>
        <PaymentandSize>
          <PaymentContainer>
            <PaymentImgContainer>
              <PaymetImg
                src={require("../../assets/images/credit card.svg").default}
                alt="payment-img"
              />
            </PaymentImgContainer>
            <PaymentText>Secure payment</PaymentText>
          </PaymentContainer>
          <SizeFitContainer>
            <SizeImgContainer>
              <SizeImg
                src={require("../../assets/images/Size&Fit.svg").default}
                alt="size-img"
              />
            </SizeImgContainer>
            <PaymentText>Size & Fit</PaymentText>
          </SizeFitContainer>
        </PaymentandSize>
        <ShippingandReturn>
          <ShippingContainer>
            <ShippingsImgContainer>
              <ShippingsImg
                src={require("../../assets/images/truck.svg").default}
                alt="shipping-img"
              />
            </ShippingsImgContainer>
            <PaymentText>Free shipping</PaymentText>
          </ShippingContainer>
          <ReturnsContain>
            <ReturnsImgContainer>
              <ReturnsImg
                src={require("../../assets/images/Free-Shipping&Returns.svg").default}
                alt="returns-img"
              />
            </ReturnsImgContainer>
            <PaymentText>Free Shipping & Returns</PaymentText>
          </ReturnsContain>
        </ShippingandReturn>
      </DetailsDiv>
    </RightContainer>
  );
};

export default ProductDetails;

const RightContainer = styled.div`
  width: 45%;
  padding: 30px 70px 0;
  text-align: left;
  @media all and (max-width: 1280px) {
    padding: 0 44px 0;
  }
  @media all and (max-width: 980px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media all and (max-width: 980px) {
    display: none;
  }
`;

const CategoryContent = styled.span`
  color: #807d7e;
  font-size: 14px;
  font-family: "poppinsregular";
  cursor: pointer;
`;

const RightArrowContainer = styled.div``;

const ArrowImage = styled.img`
  display: block;
  width: 100%;
`;

const Heading = styled.h3`
  font-size: 34px;
  color: #3c4242;
  font-family: "poppinsmedium";
  line-height: 47px;
  width: 100%;
  @media all and (max-width: 1280px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const RatingImgContainer = styled.div`
  width: 30%;
`;

const RatingImg = styled.img`
  display: block;
  width: 100%;
`;

const RatingSpan = styled.span`
  font-family: "poppinsregular";
  font-size: 15px;
  color: #807d7e;
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;

const CommentImgContainer = styled.div`
  width: 18px;
`;

const CommentImg = styled.img`
  display: block;
  width: 100%;
`;

const CommentSpan = styled.span`
  font-family: "poppinsregular";
  font-size: 15px;
  color: #807d7e;
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;

const SizeContainer = styled.div`
  margin-top: 35px;
  margin-bottom: 25px;
  @media all and (max-width: 1280px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const SizeSubDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  @media all and (max-width: 1280px) {
    margin-bottom: 20px;
  }
`;

const SelectSize = styled.span`
  font-size: 15px;
  color: #807d7e;
  margin-right: 20px;
  font-family: "poppinsregular";
  cursor: pointer;
  &:hover {
    color: #3f4646;
    font-weight: 600;
  }
`;

const SelectGuide = styled.span`
  font: 15px;
  color: #807d7e;
  margin-right: 15px;
  font-family: "poppinsregular";
  cursor: pointer;

  &:hover {
    color: #3f4646;
    font-weight: 600;
  }
`;

const RightArrowDiv = styled.div`
  width: 14px;
`;

const RightArrow = styled.img`
  display: block;
  width: 100%;
`;

const SelectionSize = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Sizes = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1.5px solid #bebcbd;
  align-content: center;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #3c4242;
    color: #ffffff;
  }
`;

const Size = styled.span`
  font-size: 12px;
  font-family: "poppinsregular";
  color: #3c4242;
  padding: 8px 12px;
  &:hover {
    color: #ffffff;
  }
`;

const ColorsContainer = styled.div``;

const ColorsAvailableText = styled.p`
  font-family: "poppinsmedium";
  font-size: 16px;
  color: #3f4646;
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 40px;
`;

const BlackContainer = styled.div`
  padding: 3px 3px;
  border-radius: 50%;
  &:hover {
    border: 1px solid #3f4646;
  }
`;

const Black = styled.div`
  width: 30px;
  height: 30px;
  background-color: #3f4646;
  border-radius: 50%;
`;

const Yellow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #edd146;
  border-radius: 50%;
`;

const Pink = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eb84b0;
  border-radius: 50%;
`;

const Brown = styled.div`
  width: 30px;
  height: 30px;
  background-color: #9c1f35;
  border-radius: 50%;
`;

const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
  gap: 40px;
  @media all and (max-width: 1280px) {
    margin-top: 25px;
  }
  @media all and (max-width: 360px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: baseline;
    gap: 10px;
  }
`;

const AddCartDiv = styled.div`
  padding: 10px 50px;
  border-radius: 8px;
  background-color: #8a33fd;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    padding: 10px 35px;
  }
  @media all and (max-width: 480px) {
    padding: 10px 20px;
  }
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CartImgContainer = styled.div`
  width: 15px;
`;

const CartImg = styled.img`
  display: block;
  width: 100%;
`;

const CartText = styled.p`
  color: #ffffff;
  font-family: "poppinsregular";
  margin: 0;
  font-size: 15px;
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
`;

const PriceDiv = styled.div`
  padding: 10px 50px;
  border: 1px solid #3c4242;
  border-radius: 8px;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    padding: 9px 35px;
  }
`;

const Price = styled.p`
  font-family: "poppinsregular";
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid #bebcbd;
  margin-top: 37px;
`;

const DetailsDiv = styled.div`
  padding-left: 15px;
  margin-top: 40px;
  @media all and (max-width: 1280px) {
    margin-top: 20px;
  }
  @media all and (max-width: 980px) {
    padding-left: 0;
  }
`;

const PaymentandSize = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
  margin-bottom: 20px;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0;
    align-items: baseline;
    margin-bottom: 0;
  }
`;

const PaymentContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const PaymentImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;

const PaymetImg = styled.img`
  display: block;
  width: 100%;
`;

const PaymentText = styled.div`
  font-size: 14px;
  font-family: "poppinsregular";
  color: #3c4242;
`;

const SizeFitContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const SizeImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;

const SizeImg = styled.img`
  display: block;
  width: 100%;
`;

const ShippingandReturn = styled.div`
  display: flex;
  align-items: center;
  gap: 92px;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0;
    align-items: baseline;
  }
`;

const ShippingContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ShippingsImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;

const ShippingsImg = styled.img`
  display: block;
  width: 100%;
`;

const ReturnsContain = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ReturnsImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;

const ReturnsImg = styled.img`
  display: block;
  width: 100%;
`;