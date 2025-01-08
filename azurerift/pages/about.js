import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutOne/About";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import TeamTwo from "../components/Common/TeamTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
      />

      <About />

      <WhyChooseUs />


      <MakeYourBusiness />

      <Testimonials />

      <TeamTwo />

      <div className="pb-50">
        <Partner />
      </div>

      <Footer />
    </>
  );
}
