import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";
import CaseStudyAreaOne from "../components/CaseStudyAreaOne";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service"} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}


      {/* Case Study Area One */}
      <CaseStudyAreaOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Service;
