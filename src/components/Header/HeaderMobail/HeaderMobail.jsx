import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo.svg";

import styles from "./HeaderMobail.module.css";
import { useEffect, useState } from "react";

import AnimatedReveal from "../../AnimatedText/AnimatedReveal";

export const HeaderMobail = () => {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const handlerBurgerClick = () => {
    setToggleBurgerMenu((prev) => !prev);
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.wrapper}>
      <AnimatedReveal img={logo} />

      {!toggleBurgerMenu ? (
        <button className={styles.hamburger} onClick={handlerBurgerClick}>
          &#9776;
        </button>
      ) : (
        <div className={styles.menu}>
          <button className={styles.cross} onClick={handlerBurgerClick}>
            &#735;
          </button>
          <nav className={styles.mob_nav}>
            <ul className={styles.list}>
              <li onClick={handlerBurgerClick}>
                <NavLink to="/">Solutions</NavLink>
              </li>
              <li onClick={handlerBurgerClick}>
                <NavLink to="/technology">Technology</NavLink>
              </li>
              <li onClick={handlerBurgerClick}>
                <NavLink to="/about">About</NavLink>
              </li>
              <li onClick={handlerBurgerClick}>
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li onClick={handlerBurgerClick}>
                <NavLink to="/resources">Resources</NavLink>
              </li>
              <li onClick={handlerBurgerClick}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
