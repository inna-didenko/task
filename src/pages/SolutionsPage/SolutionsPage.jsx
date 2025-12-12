import arrow from "../../assets/img/arrow.svg";
import { useWindowWidth } from "../../hooks/useWindowWidth";

import CutButton from "../../components/CutButton/CutButton";
import styles from "./SolutionsPage.module.css";

import AnimatedReveal from "../../components/AnimatedText/AnimatedReveal";
import BlurOnMouse from "../../components/BlurOnMouse/BlurOnMouse";

const SolutionsPage = () => {
  const width = useWindowWidth();

  return (
    <BlurOnMouse>
      <div className={`background ${styles.bg_img}`}>
        <div className="container">
          <div className={styles.wrapper}>
            <CutButton width={width < 481 ? 290 : 320} />

            <AnimatedReveal title="Building the future of medicine with AI" />

            <img src={arrow} alt="arrow down" />
          </div>
        </div>
      </div>

      <div className="container">
        <p className={styles.descrp}></p>
      </div>
    </BlurOnMouse>
  );
};

export default SolutionsPage;
