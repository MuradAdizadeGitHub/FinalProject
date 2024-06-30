import React from "react";
import SectionOurGalery from "../../components/WebsitePages/HomeComponents/SectionOurGalery";
import SectionCategory from "../../components/WebsitePages/HomeComponents/SectionCategory";
import SectionBrideGroom from "../../components/WebsitePages/HomeComponents/SectionBrideGroom";
import { Helmet } from "react-helmet-async";
import SectionOurStory from "../../components/WebsitePages/HomeComponents/SectionOurStory";
import SectionVideo from "../../components/WebsitePages/HomeComponents/SectionVideo";
function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <SectionVideo></SectionVideo>
      <SectionOurStory></SectionOurStory>
      <SectionBrideGroom></SectionBrideGroom>
      <SectionCategory></SectionCategory>
      <SectionOurGalery></SectionOurGalery>
    </>
  );
}

export default Home;
