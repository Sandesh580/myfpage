import React from 'react';
import './About.css'
import avatar from "../../assets/avatar-2.svg";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div img="about__container grid"></div>
      <img src={avatar} alt="profile" className="about__img" />
      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">I am Sandesh Shiwakoti, Web developer from lnepal , . I have rich experience in web site design ad building and customization, also i am good aty word press. </p>
        </div>
      </div>
    </section>
);
};

export default About
