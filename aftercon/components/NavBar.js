import Avatar from "./Avatar";
import Styles from "../styles/Navbar.module.css";
import { ST } from "next/dist/shared/lib/utils";
const NavBar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.Logo}>
        <Avatar />
      </div>
      <div className={Styles.navbar_links_container}>
        <h2 className={Styles.navbar_link}>BLOG</h2>
        <h2 className={Styles.navbar_link}>FAQ</h2>
        <h2 className={Styles.navbar_link}>Contact Us</h2>
      </div>
    </div>
  );
};
export default NavBar;
