import React from "react";
import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/landing/Header";
import WorkingSection from "components/landing/WorkingSection";
import TeamSection from "components/landing/TeamSection";
import ContactSection from "components/landing/ContactSection";

export default function Landing() {
  const goDown = (e) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight || document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar goDown={goDown} />
      </div>
      <main>
        <Header />
        <WorkingSection />
        <ContactSection />
      </main>
      <DefaultFooter />
    </>
  );
}
