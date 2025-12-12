import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo.svg";
import styles from "./HeaderDesktop.module.css";
import AnimatedReveal from "../../AnimatedText/AnimatedReveal";
import  ScrambleText  from "../../ScrambleText/ScrambleText";

export const HeaderDesktop = () => {
  return (
      <div className={styles.wrapper}>
        <AnimatedReveal img={logo} />
  
        <nav>
          <ul className={styles.list}>
            <li>
              <NavLink to="/"><ScrambleText text="Solutions"/></NavLink>
            </li>
            <li>
              <NavLink to="/technology"><ScrambleText text="Technology"/></NavLink>
            </li>
            <li>
              <NavLink to="/about" ><ScrambleText text="About"/></NavLink>
            </li>
            <li>
              <NavLink to="/careers"><ScrambleText text="Careers"/></NavLink>
            </li>
            <li>
              <NavLink to="/resources"><ScrambleText text="Resources"/></NavLink>
            </li>
            <li>
              <NavLink to="/contact"><ScrambleText text="Contact"/></NavLink>
            </li>
          </ul>
        </nav>
      </div>
  );
};
