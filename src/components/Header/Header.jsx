import React, { useState, useEffect } from "react";
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
  const [isOpenMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.height = "100%";
    }
  }, [isOpenMenu]);
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
      <div
        className={`header_wrapper ${isOpenMenu ? "header_wrapper-open" : ""}`}
      >
        <div className="header_l-content">
          <Link to="/">
            <img src={link_img.logo} alt="logo" />
          </Link>
          <nav className="header_nav">
            <ul className="header_list">
              {headerNav.map((item, index) => (
                <li className="header_list-item" key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header_r-content">
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
          <button
            className={`header_button-menu ${
              isOpenMenu ? "header_button-menu_open" : ""
            }`}
            onClick={() => setOpenMenu(!isOpenMenu)}
          >
            <svg
              width="51"
              height="37"
              viewBox="0 0 51 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.508563 36.5L1.11992 0.5H50.4813L49.1567 36.5H0.508563Z"
                stroke="#F9F9F9"
              />
            </svg>
            <span>
              {isOpenMenu ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94269 7.99597L15.8048 1.13385C16.0606 0.869036 16.0533 0.446966 15.7885 0.19118C15.5301 -0.0583556 15.1205 -0.0583556 14.8621 0.19118L7.99998 7.0533L1.13786 0.19118C0.873015 -0.0646057 0.450977 -0.0572618 0.195191 0.207555C-0.0543447 0.465904 -0.0543447 0.875505 0.195191 1.13385L7.05731 7.99597L0.195191 14.8581C-0.0650636 15.1184 -0.0650636 15.5404 0.195191 15.8008C0.455539 16.061 0.877547 16.061 1.13786 15.8008L7.99998 8.93865L14.8621 15.8008C15.1225 16.061 15.5445 16.061 15.8048 15.8008C16.065 15.5404 16.065 15.1184 15.8048 14.8581L8.94269 7.99597Z"
                    fill="#FF5C00"
                  />
                </svg>
              ) : (
                <svg
                  width="27"
                  height="14"
                  viewBox="0 0 27 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="27" height="1.5" fill="white" />
                  <rect y="6" width="27" height="1.5" fill="white" />
                  <rect y="12" width="27" height="1.5" fill="white" />
                </svg>
              )}
            </span>
          </button>
          <OrangeButton index="header_orange-btn">Connect Wallet</OrangeButton>
        </div>
      </div>

      <div className={`header_menu ${isOpenMenu ? "header_menu-open" : ""}`}>
        <div className="header_menu-wrapper">
          <ul className="header_menu-list">
            {headerNav.map((item, index) => (
              <li className="header_menu-list_item" key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <OrangeButton index="header_orange-btn">Connect Wallet</OrangeButton>
          <div className="header_menu-social_media">
            <Link to={"#"} className="header_menu-social_media-link">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 5.75088C25.022 6.17744 23.9876 6.46094 22.9287 6.59263C24.0446 5.93065 24.8789 4.88242 25.2736 3.6465C24.2288 4.26617 23.0856 4.70255 21.8936 4.93675C21.1628 4.15639 20.2141 3.61387 19.1709 3.37967C18.1277 3.14547 17.0382 3.23041 16.0439 3.62347C15.0496 4.01652 14.1965 4.69952 13.5954 5.58372C12.9944 6.46793 12.6731 7.51246 12.6734 8.58163C12.6734 9.00413 12.7091 9.41038 12.7969 9.79713C10.6764 9.69316 8.60171 9.14282 6.70849 8.18207C4.81527 7.22132 3.14615 5.8718 1.81025 4.22175C1.12583 5.39477 0.91424 6.78455 1.21856 8.10811C1.52288 9.43166 2.32023 10.5895 3.44825 11.3458C2.60448 11.3231 1.77852 11.098 1.04 10.6893V10.7478C1.04141 11.9786 1.46683 13.1713 2.24464 14.1252C3.02245 15.0792 4.10515 15.736 5.3105 15.9851C4.8545 16.1053 4.38455 16.1643 3.913 16.1606C3.57433 16.1666 3.236 16.1361 2.90387 16.0696C3.24828 17.1275 3.91217 18.0527 4.80414 18.7177C5.69611 19.3826 6.77229 19.7547 7.8845 19.7828C5.99778 21.2583 3.67083 22.0588 1.27562 22.0561C0.8385 22.0561 0.41925 22.0366 0 21.983C2.43731 23.5536 5.27747 24.3845 8.177 24.375C17.9855 24.375 23.348 16.25 23.348 9.20725C23.348 8.97163 23.3399 8.74413 23.3285 8.51825C24.3798 7.76585 25.2851 6.82806 26 5.75088Z"
                  fill="#8C8C8C"
                />
              </svg>
            </Link>
            <Link to={""} className="header_menu-social_media-link">
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9518 4.64578L1.54306 13.192C0.0137496 13.7995 0.022597 14.6433 1.26247 15.0195L7.01569 16.7945L20.327 8.48828C20.9564 8.10953 21.5315 8.31328 21.0588 8.72828L10.274 18.3545H10.2715L10.274 18.3558L9.87714 24.2208C10.4585 24.2208 10.7151 23.957 11.0412 23.6458L13.8356 20.9583L19.6483 25.2045C20.72 25.7883 21.4897 25.4883 21.7564 24.2233L25.5721 6.43828C25.9627 4.88953 24.9743 4.18828 23.9518 4.64578Z"
                  fill="#8C8C8C"
                />
              </svg>
            </Link>
            <Link to={""} className="header_menu-social_media-link">
              <svg
                width="30"
                height="32"
                viewBox="0 0 30 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7377 8.10006C25.6944 8.03206 25.645 7.97873 25.5804 7.93006C25.0677 7.54473 22.4664 5.70406 19.137 5.34673C19.1304 5.34606 19.105 5.34473 19.099 5.34473C19.0337 5.34473 18.977 5.38273 18.9497 5.43806L18.7704 5.79673H18.7697C18.7584 5.81873 18.7524 5.84406 18.7524 5.87073C18.7524 5.94339 18.799 6.00539 18.8644 6.02806C18.8684 6.02939 18.8964 6.03539 18.9064 6.03739C21.751 6.72273 23.4817 7.96406 25.0057 9.33406C22.3077 7.95673 19.643 6.66673 14.9997 6.66673C10.3564 6.66673 7.69238 7.95739 4.99371 9.33406C6.51771 7.96406 8.24838 6.72273 11.093 6.03739C11.103 6.03473 11.131 6.02939 11.135 6.02806C11.2004 6.00539 11.247 5.94339 11.247 5.87073C11.247 5.84406 11.241 5.81873 11.2297 5.79673H11.229L11.0497 5.43806C11.0224 5.38273 10.9664 5.34473 10.9004 5.34473C10.8944 5.34473 10.8684 5.34606 10.8624 5.34673C7.53304 5.70406 4.93171 7.54473 4.41904 7.93006C4.35438 7.97873 4.30571 8.03206 4.26171 8.10006C3.78971 8.83806 0.89571 13.6921 0.33371 22.5214C0.32771 22.6161 0.360377 22.7141 0.42371 22.7847C3.48504 26.2141 7.87838 26.6194 8.81571 26.6667C8.92704 26.6721 9.03371 26.6234 9.10038 26.5341L9.95504 25.3947C10.0217 25.3054 9.98571 25.1801 9.88104 25.1421C8.07771 24.4847 6.06971 23.3421 4.32638 21.3381C6.48704 22.9714 9.74638 24.6667 14.9997 24.6667C20.253 24.6667 23.5124 22.9714 25.6724 21.3381C23.9284 23.3421 21.921 24.4841 20.1177 25.1421C20.013 25.1801 19.977 25.3054 20.0437 25.3947L20.8984 26.5341C20.9657 26.6234 21.0717 26.6727 21.183 26.6667C22.121 26.6187 26.5137 26.2141 29.575 22.7847C29.6384 22.7141 29.671 22.6161 29.665 22.5214C29.1037 13.6921 26.2097 8.83806 25.7377 8.10006Z"
                  fill="#8C8C8C"
                />
                <path
                  d="M19.0001 19.1999C20.3256 19.1999 21.4001 18.1254 21.4001 16.7999C21.4001 15.4744 20.3256 14.3999 19.0001 14.3999C17.6746 14.3999 16.6001 15.4744 16.6001 16.7999C16.6001 18.1254 17.6746 19.1999 19.0001 19.1999Z"
                  fill="#0D0D0D"
                />
                <path
                  d="M11.0001 19.1999C12.3256 19.1999 13.4001 18.1254 13.4001 16.7999C13.4001 15.4744 12.3256 14.3999 11.0001 14.3999C9.67461 14.3999 8.6001 15.4744 8.6001 16.7999C8.6001 18.1254 9.67461 19.1999 11.0001 19.1999Z"
                  fill="#0D0D0D"
                />
              </svg>
            </Link>
            <Link to={""} className="header_menu-social_media-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7.125C9.28594 7.125 7.07812 9.33281 7.07812 12.0469C7.07812 14.7609 9.28594 16.9688 12 16.9688C14.7141 16.9688 16.9219 14.7609 16.9219 12.0469C16.9219 9.33281 14.7141 7.125 12 7.125ZM12 7.125C9.28594 7.125 7.07812 9.33281 7.07812 12.0469C7.07812 14.7609 9.28594 16.9688 12 16.9688C14.7141 16.9688 16.9219 14.7609 16.9219 12.0469C16.9219 9.33281 14.7141 7.125 12 7.125ZM20.4844 0H3.51562C1.575 0 0 1.575 0 3.51562V20.4844C0 22.425 1.575 24 3.51562 24H20.4844C22.425 24 24 22.425 24 20.4844V3.51562C24 1.575 22.425 0 20.4844 0ZM12 18.375C8.51255 18.375 5.67188 15.5343 5.67188 12.0469C5.67188 8.55933 8.51255 5.71875 12 5.71875C15.4875 5.71875 18.3281 8.55933 18.3281 12.0469C18.3281 15.5343 15.4875 18.375 12 18.375ZM19.7344 5.71875C18.9609 5.71875 18.3281 5.08594 18.3281 4.3125C18.3281 3.53906 18.9609 2.90625 19.7344 2.90625C20.5078 2.90625 21.1406 3.53906 21.1406 4.3125C21.1406 5.08594 20.5078 5.71875 19.7344 5.71875ZM12 7.125C9.28594 7.125 7.07812 9.33281 7.07812 12.0469C7.07812 14.7609 9.28594 16.9688 12 16.9688C14.7141 16.9688 16.9219 14.7609 16.9219 12.0469C16.9219 9.33281 14.7141 7.125 12 7.125ZM12 7.125C9.28594 7.125 7.07812 9.33281 7.07812 12.0469C7.07812 14.7609 9.28594 16.9688 12 16.9688C14.7141 16.9688 16.9219 14.7609 16.9219 12.0469C16.9219 9.33281 14.7141 7.125 12 7.125ZM12 7.125C9.28594 7.125 7.07812 9.33281 7.07812 12.0469C7.07812 14.7609 9.28594 16.9688 12 16.9688C14.7141 16.9688 16.9219 14.7609 16.9219 12.0469C16.9219 9.33281 14.7141 7.125 12 7.125Z"
                  fill="#8C8C8C"
                />
              </svg>
            </Link>
            <Link to={""} className="header_menu-social_media-link">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.9086 5.71675C25.8979 4.49731 24.0319 3.99989 20.4681 3.99989H7.53164C3.88631 3.99989 1.98863 4.5294 0.981716 5.82768C0 7.0935 0 8.95859 0 11.5399V16.4599C0 21.4608 1.1648 23.9999 7.53164 23.9999H20.4682C23.5587 23.9999 25.2712 23.561 26.3791 22.4848C27.5152 21.3812 28 19.5794 28 16.4599V11.5399C28 8.81769 27.924 6.9416 26.9086 5.71675ZM17.9761 14.6792L12.1017 17.7953C11.9704 17.8649 11.8267 17.8995 11.6833 17.8995C11.5209 17.8995 11.3589 17.8551 11.2154 17.7669C10.9451 17.6007 10.7801 17.3034 10.7801 16.9828V10.7706C10.7801 10.4505 10.9447 10.1535 11.2144 9.98717C11.4842 9.82087 11.8197 9.80951 12.0996 9.9571L17.974 13.0531C18.2729 13.2106 18.4606 13.5237 18.461 13.8654C18.4614 14.2073 18.2745 14.521 17.9761 14.6792Z"
                  fill="#8C8C8C"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};