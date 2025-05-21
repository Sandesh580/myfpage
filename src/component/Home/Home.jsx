import React from "react";
import "./Home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocial from "./HeaderSocial";
import ScroolDown from "./ScroolDown";
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Sandesh Shiwakoti</h1>
        <spam className="home__education">I am frontend developer.</spam>
        <HeaderSocial />
        <a href="#contact" className="btn">
          Hire me
        </a>
        <ScroolDown />
      </div>
    </section>
  );
};

export default Home;
