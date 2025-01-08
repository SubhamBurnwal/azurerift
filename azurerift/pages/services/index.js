import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyleOne from "../../components/Services/ServicesStyleOne";
import Footer from "../../components/Layouts/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />

      <ServicesStyleOne />

      <Footer />
    </>
  );
}
