import { Link } from "react-router-dom";
import "./Subscribe.css";
import link_img from "../../assets/LinkImg";
export const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe_wrapper">
          <div className="subscribe_text">
            <div className="subscribe_text-subscription">
              <span className="subscribe_text-subscription_line"></span>
              subscription
            </div>
            <h3 className="subscribe_text-title">
              Subscribe for future updates
            </h3>
            <Link to="#" className="subscribe_text-button">
              Subscribe{" "}
              <span>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7512 0H18.818L12.1179 7.62462L20 18H13.8284L8.99456 11.7074L3.46356 18H0.394939L7.56129 9.84462L0 0H6.32826L10.6976 5.75169L15.7512 0ZM14.6748 16.1723H16.3742L5.40488 1.73169H3.5813L14.6748 16.1723Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <img
            className="subscribe_image"
            src={link_img.subscribe}
            alt="subscribe"
          />
        </div>
      </div>
    </div>
  );
};
