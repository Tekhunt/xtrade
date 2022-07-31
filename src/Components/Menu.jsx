import React from "react";
import styled from "styled-components";
import { HiOutlineChevronRight } from "react-icons/hi";
// import { useService } from "./ContextAPI/Context";
import { useNavigate } from "react-router-dom";


export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 26px;
  padding: 73px 14px 438px 14px;
  z-index: 2;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 19px 24px;
    gap: 10px;
    width: 270px;
    height: 58px;
    background: #ff8a00;
    border-radius: 10px;
    border: none;
  }

  .sign-in {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    align-items: center;
    color: #ff8a00;
  }
  .service {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Menu = () => {
// const { condition } = useService();
const navigate = useNavigate();

const toService =() => {
    navigate("/services", { replace: true });

  }


  return (
    <MenuWrapper>
      <p>About</p>
      {/* <div className="service" onClick={condition}> */}
      <div className="service" onClick={toService}>

        <p>Services</p>
        <p>
          <HiOutlineChevronRight />
        </p>
      </div>
      <p>Resources</p>
      <p>Partners</p>
      <p>Speak to us</p>
      <p className="sign-in">Sign in</p>
      <button>Sign up</button>
    </MenuWrapper>
  );
};
