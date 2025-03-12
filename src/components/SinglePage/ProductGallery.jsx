import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const ProductGallery = ({
  productImages,
  selectedImage,
  handleClick,
  handleMouseMove,
  handleMouseLeave,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <LeftContainer>
      <LeftDiv>
        <ImgDiv>
          <StyledSlider {...settings}>
            {productImages.map((item, index) => (
              <SubImgContainer key={index} onClick={() => handleClick(item)}>
                <SubImg src={item} alt="productimage" />
              </SubImgContainer>
            ))}
          </StyledSlider>
        </ImgDiv>
      </LeftDiv>
      <RightDiv>
        <ImageContainer
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={selectedImage} alt="Product" />
        </ImageContainer>
      </RightDiv>
    </LeftContainer>
  );
};

// Arrow components
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowContainer onClick={onClick}>
      <Arrow
        src={require("../../assets/images/arrow-down.svg").default}
        alt="arrowdown"
      />
    </ArrowContainer>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowContainerup onClick={onClick}>
      <Arrow
        src={require("../../assets/images/arrowup.svg").default}
        alt="arrowup"
      />
    </ArrowContainerup>
  );
};

export default ProductGallery;

const StyledSlider = styled(Slider)`
  .slick-slide {
    margin-bottom: 18px;
  }
  .slick-list {
    height: 300px;
    width: 90px;
  }
`;

const ArrowContainer = styled.div`
  background-color: #3f4646;
  color: #ffffff;
  padding: 5px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 50px;
  left: 32px;
`;

const ArrowContainerup = styled.div`
  background-color: #ffffff;
  padding: 5px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 300px;
  left: 32px;
`;

const Arrow = styled.img`
  width: 16px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  background-color:#F6F6F6;
  @media all and (max-width: 1280px) {
    height: 50%;
  }
  @media all and (max-width: 980px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

const LeftDiv = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  @media all and (max-width: 980px) {
    width: 23%;
  }
  @media all and (max-width: 540px) {
    height: 392px;
  }
  @media all and (max-width: 360px) {
    display: none;
  }
`;

const ImgDiv = styled.div`
  width: 60%;
  @media all and (max-width: 1280px) {
    width: 100px;
  }
  @media all and (max-width: 480px) {
    width: 80px;
  }
  @media all and (max-width: 380px) {
    width: 60px;
  }
`;

const SubImgContainer = styled.div`
  width: 93% !important;
  height: 62px;
  width: 62px;
  margin-bottom: 22px;
`;

const SubImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px;
  height: 96px;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 520px;
  margin-left: 20px;
  position: relative;
  @media all and (max-width: 1280px) {
    width: 360px;
  }
  @media all and (max-width: 540px) {
    width: 290px;
  }
  @media all and (max-width: 480px) {
    width: 250px;
  }
  @media all and (max-width: 480px) {
    margin-left: 35px;
  }
  @media all and (max-width: 380px) {
    margin-left: 28px;
  }
  @media all and (max-width: 320px) {
    margin-left: 25px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 677px;
  border-radius: none;
`;
