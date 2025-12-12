import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo.svg";
import styles from "./HeaderDesktop.module.css";
import AnimatedReveal from "../../AnimatedText/AnimatedReveal";


export const HeaderDesktop = () => {
  return (
      <div className={styles.wrapper}>
        <AnimatedReveal img={logo} />
  
        <nav>
          <ul className={styles.list}>
            <li>
              <NavLink to="/">Solutions</NavLink>
            </li>
            <li>
              <NavLink to="/technology">Technology</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
  );
};
