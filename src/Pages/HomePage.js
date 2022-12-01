import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { Collections } from "../Components/Collection/Collections";
import { Gallery } from "../Components/Gallery/Gallery";
import { OurGems } from "../Components/Our Gems/OurGems";
import { OurProduct } from "../Components/Our Product/OurProduct";
import { StayForm } from "../Components/StayForm/StayForm";
import { StayInTouch } from "../Components/Stay In Touch/StayInTouch";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <OurProduct/>
      <StayInTouch/>
      <OurGems/>
      <Collections/>
      <StayForm/>
      <Gallery/>
    </>
  );
};
