
import Styles from "../styles/hero.module.css"
import ActInput from "./ActInput"
import HeroWallpaper from "./HeroWallpaper"
const HeroWelcome = ()=>{
    return(
        <div className={Styles.hero_welcome}>
        <div className={Styles.hero_welcome_action}>
          <h1>
            {" "}
            welcome <br /> to After-Con
          </h1>
          <h2>
            {" "}
            AfterCon is an exclusive after-party for cosplayers.
            <br /> by cosplayers.
          </h2>
          <ActInput/>
        </div>
        <div className={Styles.hero_welcome_wallpapers}>
          <HeroWallpaper/>
        </div>
      </div>
    )
}

export default HeroWelcome;