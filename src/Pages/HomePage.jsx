import React from "react";
import { Body } from "../Components/Body";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import styled from "styled-components";
import bg from "../backgroundImg.svg";

export const FooterContainer = styled.div`
  background: #dafcff;
  overflow-x: hidden;
`;
export const HomeContainer = styled.div`
  overflow: hidden;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: top right;
  overflow-x: hidden;

  .headbody {
    background: #fffaf0;
    border-radius: 10px;
    margin-bottom: 104px;
    padding-top: 10px;
  }

  @media (max-width: 1024px) {
    .headbody {
      padding-top: 0;
      margin-bottom: 105px;
    }
  }
`;

export const HomePage = () => {
  return (
    <HomeContainer>
      <div className="headbody">
        <div className="head-container">
          <Header />
        </div>
        <Body />
      </div>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </HomeContainer>
  );
};
