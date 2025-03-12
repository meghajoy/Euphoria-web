import React, { useState, useEffect } from "react";
import styled from "styled-components";
import close from "../../assets/images/close.svg";
import menubar from "../../assets/images/menu-bar.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <Wrapper>
        <Headers>
          <LogoContainer to={`/`}>
            <Logo
              src={require("../../assets/images/Logo.svg").default}
              alt="logo"
            />
          </LogoContainer>
          <Categories>
            <Category>Shop</Category>
            <Category>Men</Category>
            <Category>Women</Category>
            <Category>Combos</Category>
            <Category>Joggers</Category>
          </Categories>
          <RightDiv>
            <Form>
              <SearchContainer>
                <SearchImgContainer>
                  <SearchImage
                    src={require("../../assets/images/search.svg").default}
                    alt="search"
                  />
                </SearchImgContainer>
                <StyledInput type="text" placeholder="Search" />
              </SearchContainer>
            </Form>
            <RightContainer>
              <ImageContainer>
                <Wishlist
                  src={require("../../assets/images/wishlist.svg").default}
                  alt="wishlist"
                />
              </ImageContainer>
              <ImageContainer>
                <Account
                  src={require("../../assets/images/account.svg").default}
                  alt="account"
                />
              </ImageContainer>
              <ImageContainer>
                <Cart
                  src={require("../../assets/images/cart.svg").default}
                  alt="cart"
                />
              </ImageContainer>
            </RightContainer>
          </RightDiv>
          <MenuBar>
            <Menu onClick={toggleMenu}>
              <MenuImg src={menubar} alt="menubar" />
            </Menu>
            <MenuItem className={`${isOpen ? "is-open" : ""}`}>
              <MenuList>
                <LinkItem>
                  <Status>
                    <Item>Account</Item>
                  </Status>
                  <Status>
                    <Item>Wishlist</Item>
                  </Status>
                  <Status>
                    <Item>Your Cart</Item>
                  </Status>
                  <Status>
                    <Item>Shop</Item>
                  </Status>
                  <Status>
                    <Item>Men</Item>
                  </Status>
                  <Status>
                    <Item>Women</Item>
                  </Status>
                  <Status>
                    <Item>Combos</Item>
                  </Status>
                  <Status>
                    <Item>Jogers</Item>
                  </Status>
                </LinkItem>
                <CloseBar onClick={toggleMenu}>
                  <Close src={close} alt="close" />
                </CloseBar>
              </MenuList>
            </MenuItem>
          </MenuBar>
        </Headers>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Headers = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  justify-content: space-between;
`;
const LogoContainer = styled(Link)`
  width: 91px;
  cursor: pointer;
  @media all and (max-width: 1080px) {
    width: 70px;
  }
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;
const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media all and (max-width: 1280px) {
    gap: 2rem;
  }
  @media all and (max-width: 1080px) {
    gap: 24px;
  }
  @media all and (max-width: 640px) {
    gap: 9px;
    display: none;
  }
`;
const Category = styled.span`
  font-family: "poppinsregular";
  font-size: 16px;
  cursor: pointer;
  color: #807d7e;
  @media all and (max-width: 1080px) {
    font-size: 15px;
  }
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
  &:hover {
    font-weight: 700;
    color: #3c4242;
  }
`;
const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 11rem;
  @media all and (max-width: 1280px) {
    gap: 2rem;
  }
  @media all and (max-width: 1280px) {
    gap: 6px;
  }
`;
const Form = styled.div`
  display: flex;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  gap: 12px;
  background-color: #f6f6f6;
  border-radius: 4px;
  @media all and (max-width: 1080px) {
    gap: 0;
  }
  @media all and (max-width: 768px) {
    padding: 4px 10px;
  }
  @media all and (max-width: 640px) {
    padding: 4px 50px;
  }
  @media all and (max-width: 430px) {
    padding: 4px 20px;
  }
`;
const SearchImgContainer = styled.div`
  @media all and (max-width: 1080px) {
    width: 12px;
  }
  @media all and (max-width: 540px) {
    width: 17px;
  }
`;
const SearchImage = styled.img`
  display: block;
  width: 100%;
`;
const StyledInput = styled.input`
  border: none;
  padding: 6px 5px;
  font-size: 14px;
  color: #807d7e;
  background-color: #f6f6f6;
  @media all and (max-width: 1280px) {
    font-size: 12px;
  }
  @media all and (max-width: 1080px) {
    width: 90px;
  }
  @media all and (max-width: 640px) {
    width: 70px;
  }
  @media all and (max-width: 540px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media all and (max-width: 1280px) {
    gap: 1rem;
  }
  @media all and (max-width: 640px) {
    display: none;
  }
`;
const ImageContainer = styled.div`
  cursor: pointer;
  width: 18px;
  padding: 8px;
  background: #f6f6f6;
  border-radius: 4px;
  @media all and (max-width: 1280px) {
    width: 16px;
  }
`;
const Wishlist = styled.img`
  display: block;
  width: 100%;
`;
const Account = styled.img`
  display: block;
  width: 100%;
`;
const Cart = styled.img`
  display: block;
  width: 100%;
`;

const MenuBar = styled.div`
  display: none;
  @media all and (max-width: 640px) {
    display: block;
  }
`;
const Menu = styled.div`
  width: 100%;
`;
const MenuImg = styled.img`
  width: 100%;
  display: block;
`;
const MenuItem = styled.div`
  display: none;
  &.is-open {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 9999;
  }
`;
const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const LinkItem = styled.div`
  width: 70%;
`;
const Status = styled.div``;
const Item = styled.h3`
  font-size: 16px;
  font-family: "poppinsregular";
  margin-bottom: 28px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
  &:hover {
    font-weight: 700;
  }
`;
const CloseBar = styled.div`
  width: 34px;
`;
const Close = styled.img`
  width: 100%;
  display: block;
`;
