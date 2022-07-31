import React from "react";
import playVid from "../playVid.svg";
import { HiOutlineChevronRight } from "react-icons/hi";
import smsIcon from "../messageIcon.svg";
import arrowDown from "../arrow.svg";
import arrowMobile from "../arrowMobile.svg";
import smsMobile from "../smsMobile.svg";

import styled from "styled-components";

export const BodyWrapper = styled.div`
  max-width: 1179px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 150px 14px 86px 14px;

  .trust {
    width: 260px;
    height: 22px;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin: 96px 0 24px 0;
  }

  @media (max-width: 1024px) {
    padding-top: 70px;

    .trust {
      margin: 70px 0 24px 0;
    }
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .colored-blue {
    color: blue;
  }
  .colored-orange {
    color: orange;
  }

  .abs-mobile {
    display: none;
  }

  .colored {
    font-family: "Catalina Rayden";
    font-weight: 400;
    font-size: 70px;
    line-height: 114%;
    /* display: flex; */
    color: #333333;
  }

  .offer {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 16px;
    line-height: 188%;
    color: #333333;
    margin-top: 38px;
  }
  .btn {
    gap: 50px;
  }

  @media (min-width: 1024px) {
    .offer {
      width: 672px;
    }
    .colored {
      width: 682px;
    }
    .action {
      display: flex;
      gap: 50px;
      justify-content: space-between;
      align-items: center;
      margin: 51px 0 136px 0;
    }

    .sms-desk {
      position: absolute;
      top: 490px;
      right: -3%;
    }
  }

  .action {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    align-items: center;
    /* margin: 51px 0 136px 0; */
    p {
      height: 20px;
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 18px;
      line-height: 111%;
      display: flex;
      align-items: center;
      color: #005ecd;
    }

    .arrowDown {
      padding-right: 63px;
    }

    .btn {
      display: flex;
      /* gap: 100px; */
      justify-content: center;
      align-items: center;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 21px 32px;
    gap: 10px;
    width: 173px;
    height: 62px;
    background: #ff8a00;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    /* .colored {
      font-size: 32px;
    } */
    .action p {
      font-size: 14px;
    }

    button {
      width: 145px;
      height: 58px;
      font-size: 12px;
      padding: 17px 25px;
    }

    .btn {
      gap: 20px;
    }

    .colored {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
    }

    .action {
      gap: 0px;
    }
  }

  @media (max-width: 768px) {
    .abs-icons {
      display: none;
    }
    .btn {
      gap: 15px;
    }

    .action {
      gap: 0;
    }

    .abs-mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .arrowUp-mobile {
        margin-top: 30px;
      }
      .sms-mobile {
        height: 48px;
        width: 48px;
      }
    }

    button {
      padding: 0px 0px;
      /* gap: 10px; */
      width: 133px;
      height: 42px;

      border-radius: 10px;
      border: none;
      font-weight: 500;
      font-size: 12px;
      line-height: 125%;
    }
  }
`;

export const WorkerWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #000000;
  }

  h1 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 32px;
    line-height: 156%;
    display: flex;
    align-items: center;
    color: #005ecd;
  }

  @media (max-width: 1024px) {
    row-gap: 20px;

    div {
      max-width: 154px;
    }

    h1 {
      font-size: 18px;
      line-height: 20px;
    }
    p {
      font-size: 12px;
      line-height: 20px;
    }

    .three {
      order: 1;
    }
    .two {
      order: 3;
    }
    .four {
      order: 3;
    }
    .one {
      order: 1;
    }
    .five {
      order: 5;
    }
  }
`;

export const Body = () => {
  return (
    <BodyWrapper>
      <HeroWrapper>
        <div>
          <div className="colored">
            Access Fast Finance and Easy Shipping Around The World
          </div>
        </div>
        <p className="offer">
          MVX offers you freight financing, frieght tracking, door to door
          shipping and more, all at the tip of your fingers. We eliminate the
          headache of global shipping for you.
        </p>
        <div className="action">
          <div className="btn">
            <button>Move Cargo</button>
            <p>
              Get Financed <HiOutlineChevronRight size={16} />{" "}
            </p>
          </div>
          <div className="abs-icons">
            <img className="arrowDown" src={arrowDown} alt="arrow" />
            <img className="sms-desk" src={smsIcon} alt="mss" />
          </div>
          <div className="abs-mobile">
            <img className="arrowUp-mobile" src={arrowMobile} alt="arrow" />
            <img className="sms-mobile" src={smsMobile} alt="mss" />
          </div>
        </div>
      </HeroWrapper>
      <WorkerWrapper>
        <img src={playVid} alt="worker" />
      </WorkerWrapper>
      <p className="trust">Trusted by global companies</p>
      <NumberWrapper>
        <div className="one">
          <h1>300+</h1>
          <p>Companies serviced</p>
        </div>
        <div className="two">
          <h1>$2.3million+</h1>
          <p>Generated for partners in revenue</p>
        </div>
        <div className="three">
          <h1>5000+</h1>
          <p>Containers delivered</p>
        </div>
        <div className="four">
          <h1>5000+</h1>
          <p>Trade transactions financed</p>
        </div>
        <div className="five">
          <h1>80%</h1>
          <p>Of our customers have returned again</p>
        </div>
      </NumberWrapper>
    </BodyWrapper>
  );
};
