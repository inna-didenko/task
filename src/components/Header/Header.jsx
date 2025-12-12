import "../../styles/global.css";
import "../../styles/container.css";
import styles from "./Header.module.css";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobail } from "./HeaderMobail/HeaderMobail";

export const Header = () => {
  const width = useWindowWidth();

  return (
    <div className={`${styles.header} background`}>
      <div className="container">
        {width >900 ? <HeaderDesktop /> : <HeaderMobail />}
      </div>
    </div>
  );
};
