import React from "react";

import Directory from "../../components/directory/directory.component";
import PageBanner from "../../components/page-banners/page-banners";

import HomePageContainer from "./homepage.styles";

const Homepage = () => (
  <>
    <PageBanner bgImage='https://res.cloudinary.com/dxehksqg1/image/upload/v1576956180/confectioners/confectioner-banner1_ky1lzh.png' />
    <HomePageContainer>
      <Directory heading="Vendors" sideLinks=">>>view all vendors"/>
    </HomePageContainer>
  </>
);

export default Homepage;
