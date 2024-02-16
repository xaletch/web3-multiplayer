import { Link } from "react-router-dom";
import "./footer.css";

const footerNavigation = [
  { name: "game", link: "/game" },
  { name: "dot token", link: "/dot-token" },
  { name: "roadmap", link: "/roadmap" },
  { name: "nfts", link: "/nfts" },
  { name: "titans", link: "/titans" },
  { name: "community", link: "/Community" },
  { name: "whitepaper", link: "/Whitepaper" },
];

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_navigation">
            <ul className="footer_navigation-list">
              {footerNavigation.map((item, index) => (
                <>
                  <li className="footer_navigation-list_item" key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                  <span className="footer_navigation-list_line">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8335 19V5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </>
              ))}
            </ul>
            <div className="footer_navigation-line"></div>
          </div>
          <div className="footer_bottom">
            <p className="footer_bottom-text">
              ™ & © 2024 Riot Games, Inc. All rights reserved. Riot Games,
              League of Legends and PvP.net are trademarks or registered
              trademarks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
