import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = ({ feedback }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <MainContainer>
        <Container>
          <Bullet></Bullet>
          <Heading>Feedback</Heading>
        </Container>
        <SliderContainer>
          <Slider {...settings}>
            {feedback.map((item) => {
              const [part1, part2] = item.review.split("/b");
              return (
                <ContentContainer key={item.id}>
                  <HeadContainer>
                    <ProfileContainer>
                      <ProfileImage
                        src={item.image}
                        alt={`${item.name}'s profile`}
                      />
                    </ProfileContainer>
                    <RatingContainer>
                      <RatingImage src={item.starimg} alt="star rating" />
                    </RatingContainer>
                  </HeadContainer>
                  <Name>{item.name}</Name>
                  <Review>
                    <p>{part1}</p>
                    {part2 && <p>{part2}</p>}
                  </Review>
                </ContentContainer>
              );
            })}
          </Slider>
        </SliderContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default Feedback;

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

const SliderContainer = styled.div`
  padding: 30px 0px 150px 0px;
  @media all and (max-width: 768px) {
    padding-top: 0;
  }

  .slick-dots {
    bottom: -50px;
    li {
      button:before {
        color: #8a33fd;
      }
      &.slick-active button:before {
        color: #8a33fd;
      }
    }
  }
`;

const ContentContainer = styled.div`
  border: 1px solid #bebcbd;
  border-radius: 10px;
  padding: 23px 23px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 250px;
  width: 85% !important;
  @media all and (max-width: 640px) {
    padding: 12px 15px;
    height: auto;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
  @media all and (max-width: 640px) {
    margin-bottom: 10px;
  }
`;

const ProfileContainer = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RatingContainer = styled.div``;

const RatingImage = styled.img`
  width: 80px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #3c4242;
  margin-bottom: 10px;
`;

const Review = styled.p`
  font-size: 12px;
  color: #807d7e;
  width: 90%;
  text-align: center;
  & > p {
    margin: 0;
  }
  @media all and (max-width: 640px) {
    font-size: 10px;
  }
`;