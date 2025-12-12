import styles from "./CutButton.module.css";

const CutButton = ({ text = "START TODAY!", width = 320, height = 80 }) => {
  return (
    <div className={styles.wrapper}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 320 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M319 1V63.5859L303.586 79H1V16.4141L16.4141 1H319Z"
          fill="white"
          fillOpacity="0.1"
          stroke="url(#paint0_linear_1_350)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_350"
            x1="0"
            y1="0"
            x2="321.695"
            y2="7.52478"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="0.494792" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.gradient_text}>{text}</div>
    </div>
  );
};

export default CutButton;
