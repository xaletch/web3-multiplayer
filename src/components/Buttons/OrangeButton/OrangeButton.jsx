import "./orangeButton.css";

export const OrangeButton = ({ children, index }) => {
  return (
    <button className={`orange-btn ${index}`}>
      <svg
        width="218"
        height="49"
        viewBox="0 0 218 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.528157 48.5L3.15918 0.5H217.437L211.737 48.5H0.528157Z"
          stroke="#F9F9F9"
        />
      </svg>
      {children}
    </button>
  );
};
