import React from "react";
import BannerImg from "../../assets/banner.avif";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="PageContainer BannerSection">
      <h1>Financials</h1>
      <img src={BannerImg} alt="BannerImg" />
    </div>
  );
};

export default Banner;
