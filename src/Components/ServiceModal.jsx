import React from "react";
import styled from "styled-components";
import { HiOutlineChevronLeft } from "react-icons/hi";
import img1 from "./icon1.svg";
import img2 from "./icon2.svg";
import img3 from "./icon3.svg";
import img4 from "./icon4.svg";
// import { useService } from "./ContextAPI/Context";
import { useNavigate } from "react-router-dom";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .serviceLink {
    padding: 25px 32px;
    display: flex;
    align-items: center;
    gap: 18px;
  }
`;
export const ServiceItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 49px;

  .service {
    display: flex;
    gap: 16px;
    padding: 0 24px;
  }

  .items {
    display: flex;
    flex-direction: column;
  }

  .header {
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    color: #333333;
  }
  .text {
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    color: #333333;
  }
`;

export const ServiceModal = () => {
  // const { closeService, service } = useService();
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <ServiceWrapper>
      <div className="serviceLink" onClick={backHome}>
        <HiOutlineChevronLeft />
        <p> Services</p>
      </div>
      <hr />
      <ServiceItemsWrapper>
        <div className="service">
          <img src={img1} alt="icon" />
          <div className="items">
            <p className="header">Freight Forwarding</p>
            <p className="text">Easy Freight Forwarding Service</p>
          </div>
        </div>
        <div className="service">
          <img src={img2} alt="icon" />
          <div className="items">
            <p className="header">Freight Finance</p>
            <p className="text">
              Get finance for your freight forwarding needs
            </p>
          </div>
        </div>
        <div className="service">
          <img src={img3} alt="icon" />
          <div className="items">
            <p className="header">Haulage</p>
            <p className="text">Overland Logistics You Can Rely On</p>
          </div>
        </div>
        <div className="service">
          <img src={img4} alt="icon" />
          <div className="items">
            <p className="header">Customs</p>
            <p className="text">Clear your cargo fast</p>
          </div>
        </div>
      </ServiceItemsWrapper>
    </ServiceWrapper>
  );
};
