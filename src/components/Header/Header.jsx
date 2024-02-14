import React, { useState } from "react";
import { Link } from "react-router-dom";
import link_img from "../../assets/LinkImg";

import { OrangeButton } from "../Buttons/OrangeButton/OrangeButton";

import "./header.css";

const headerNav = [
  { name: "game", link: "/game" },
  { name: "dot token", link: "/dot-token" },
  { name: "roadmap", link: "/roadmap" },
  { name: "nfts", link: "/nfts" },
  { name: "titans", link: "/titans" },
  { name: "community", link: "/community" },
  { name: "esports", link: "esports" },
  { name: "whitepaper", link: "whitepaper" },
];

export const Header = () => {
  const [popupLanguages, setPopupLanguages] = useState(false);

  return (
    <div className="header">
      <svg
        className="header_bg"
        width="1655"
        height="81"
        viewBox="0 0 1655 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.8"
          d="M0 1.4908L1622 0L1655 51.681L1652.21 81H23.909L0 1.4908Z"
          fill="#1A1A1A"
        />
      </svg>
      <svg
        className="header_svg-left"
        width="50"
        height="81"
        viewBox="0 0 50 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.5789 1H12.7895L1 19.2308L36.3684 80H49L15.3158 19.2308L24.5789 1Z"
          fill="white"
          stroke="white"
        />
      </svg>
      <svg
        className="header_svg-right"
        width="46"
        height="81"
        viewBox="0 0 46 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45 62.1613L3.91304 1H1.5L35.2174 58.7634L23.4783 80H34.2391L45 62.1613Z"
          fill="white"
          stroke="white"
        />
      </svg>
      <div className="header_wrapper">
        <div className="header_l-content">
          <Link to="/">
            <img src={link_img.logo} alt="logo" />
          </Link>
          <nav>
            <ul className="header_list">
              {headerNav.map((item, index) => (
                <li className="header_list-item" key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header_popup-languages">
          <div
            className="header_popup-languages-selected"
            onClick={() => setPopupLanguages(!popupLanguages)}
          >
            en
            <img src={link_img.lang} alt="en" />
            <span className="arrow">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={
                  popupLanguages
                    ? {
                        transform: "rotate(180deg)",
                        transition: "transform .3s ease",
                      }
                    : {}
                }
              >
                <path
                  d="M4.50495 7.6451L0.205243 3.34525C-0.0684119 3.07173 -0.0684118 2.62826 0.205243 2.35487C0.478654 2.08146 0.9221 2.08146 1.19549 2.35487L5.00007 6.15957L8.80452 2.35498C9.07805 2.08157 9.52145 2.08157 9.79486 2.35498C10.0684 2.62839 10.0684 3.07184 9.79486 3.34536L5.49509 7.64521C5.35831 7.78192 5.17925 7.85019 5.00009 7.85019C4.82085 7.85019 4.64165 7.78179 4.50495 7.6451Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div
            className={`header_popup-languages_block ${
              popupLanguages ? "open" : ""
            }`}
          >
            <ul className="header_popup-languages_block-list">
              <li className="item">English</li>
              <li className="item">Russian</li>
              <li className="item">German</li>
            </ul>
          </div>
        </div>
        <OrangeButton>Connect Wallet</OrangeButton>
      </div>
    </div>
  );
};
