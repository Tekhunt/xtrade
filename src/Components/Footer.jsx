import React from "react";
import styled from "styled-components";
import mvxicon from "../TM-Logo.svg";
import darkmvxlogo from "../darkTM-logo.svg";
import mediaIcons from "../socialMediaIcons.svg";

export const FooterWrapper = styled.div`
  max-width: 1179px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-top: 172px;

  .none {
    visibility: hidden;
  }

  .first-hr {
    margin-bottom: 85px;
    border: 0.1px solid #000000;
    opacity: 0.1;
  }
  .second-hr {
    margin-top: 78px;
    border: 0.1px solid #000000;
    margin-bottom: 29px;
    opacity: 0.1;
  }
  @media (max-width: 1024px) {
    padding: 0 20px;

    h3 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
    .first-hr {
      margin-bottom: 49px;
    }
    .second-hr {
      margin-top: 50px;
    }
  }
`;

export const FooterHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 85px;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 43px;

    .heroTextWrapper p:nth-child(1) {
      margin-bottom: 15px;
    }
    .heroTextWrapper p:nth-child(2) {
      margin-bottom: 32px;
    }
  }

  .heroTextWrapper p:nth-child(1) {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 188%;
    color: #333333;
  }
  .heroTextWrapper p:nth-child(2) {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 111%;
    color: #333333;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 52px;
    background: #005ecd;
    border: none;
    height: 70px;
    width: 211px;
    border-radius: 20px;
    padding: 25px, 52px, 25px, 52px;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    padding-top: 30px;
  }
`;
export const FooterGridWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    align-items: center;
    row-gap: 37px;
  }
`;

export const FooterContactWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding-top: 31px;
    width: 100%;
    margin: 0 auto;
    img {
      display: none;
    }
    order: 5;
    .call {
      width: 100%;
      display: flex;
      gap: 39px;
      justify-content: center;
      align-items: center;
    }
    .call p {
      font-size: 12px;
    }

    .address {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    margin-bottom: 25px;
  }

  .address-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .call {
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    color: #333333;
  }

  .address h3 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    color: #333333;
  }

  .address p {
    color: #767676;
  }
`;

export const FooterHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    min-width: 140px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #005ecd;
    margin-bottom: 9px;
  }
`;

export const FooterServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    min-width: 140px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #005ecd;
    margin-bottom: 9px;
  }
`;

export const FooterResources = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    min-width: 140px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #005ecd;
    margin-bottom: 9px;
  }
`;

export const FooterLegal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    min-width: 140px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #005ecd;
    margin-bottom: 9px;
  }
`;

export const BottomFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 72px;
  @media (max-width: 1024px) {
    margin-bottom: 54px;
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 54px;
    /* margin-top: 88px; */
    .privacy {
      margin-bottom: 36px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .privacy p {
      font-size: 14px;
      gap: 26px;
    }
  }

  .privacy {
    display: flex;
    gap: 27px;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterHeroWrapper>
        <div className="heroTextWrapper">
          <p>Ready to Unlock Supply Chain Opportunities?</p>
          <p>
            Join 300+ top brands that have trusted us with their freight
            forwarding
          </p>
        </div>
        <button>Get started</button>
      </FooterHeroWrapper>
      <hr className="first-hr" />
      <FooterGridWrapper>
        <FooterContactWrapper>
          <div>
            {" "}
            <img src={mvxicon} alt="logo" />{" "}
          </div>
          <div className="address-container">
            <div className="call">
              <p>T: +2347040119703</p>
              <p>E: hello@mvx.trade</p>
            </div>

            <div className="address">
              <h3>Austin:</h3>
              <p>7000 North Mopac Expressway,</p>
              <p> Austin, TX, 78731</p>
              <p>T: +1 512 514 6221</p>
            </div>
            <div className="address">
              <h3>Lagos:</h3>
              <p>19 Dr. S Ezekuse Close,</p>
              <p>Lekki Phase 1, Lagos</p>
            </div>
          </div>
        </FooterContactWrapper>
        <FooterHome>
          <h3>Home</h3>
          <p>About</p>
          <p>Partners</p>
          <p>Careers</p>
          <p>Careers</p>
          <p className="none">Track Shipment</p>
        </FooterHome>
        <FooterServices>
          <h3>Services</h3>
          <p>Freight Forwarding</p>
          <p>Customs</p>
          <p>Trade Finance</p>
          <p>Land Haulage</p>
          <p>Track Shipment</p>
        </FooterServices>
        <FooterResources>
          <h3>Resources</h3>
          <p>Help &#38; Support</p>
          <p>Feedback</p>
          <p>Referral</p>
        </FooterResources>
        <FooterLegal>
          <h3>Legal</h3>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
          <p>Terms &#38; Conditions</p>
        </FooterLegal>
      </FooterGridWrapper>
      <hr className="second-hr" />
      <BottomFooterWrapper>
        <div className="privacy">
          <div>
            {" "}
            <img src={darkmvxlogo} alt="logo" />{" "}
          </div>
          <p>&copy; MVXchange Technologies Limited</p>
        </div>
        <div>
          <img src={mediaIcons} alt="social media" />
        </div>
      </BottomFooterWrapper>
    </FooterWrapper>
  );
};
