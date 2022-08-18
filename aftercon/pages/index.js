
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import HeroWelcome from "../components/HeroWelcome";
import HeroCommunity from "../components/HeroCommunity";
export default function Home() {
  return (
    <div className={styles.background}>
      <NavBar />
      <HeroWelcome/>
      <HeroCommunity/>
    </div>
  );
}
