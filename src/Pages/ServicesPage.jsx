import React from "react";
import { Body } from "../Components/Body";
import { Footer } from "../Components/Footer";
import { ServiceModal } from "../Components/ServiceModal";
import { FooterContainer } from "./HomePage";

export const ServicesPage = () => {
  return (
    <div>
      <ServiceModal />
      <Body />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
};
