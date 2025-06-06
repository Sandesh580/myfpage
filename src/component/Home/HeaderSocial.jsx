import React from "react";

const HeaderSocial = () => {
  return (
    <div className="home__socials">
      <a
        href=" //www.instagram.com"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.twitter.com"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>

      <a
        href=" https://www.behance.com"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-behance"></i>
      </a>

      <a
        href=" https://www.dribble.com"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-dribbble"></i>
      </a>

      <a
        href=" https://www.pinterest.com"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-pinterest"></i>
      </a>
    </div>
  );
};

export default HeaderSocial;
