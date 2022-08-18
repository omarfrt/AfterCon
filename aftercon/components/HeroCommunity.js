import Styles from "../styles/hero.module.css"
const HeroCommunity = ()=>{
    return (
        <div className={Styles.hero_community}>
        <div className={Styles.hero_community_title}>
          <h1>
            {" "}
            Engage in the <br /> community
          </h1>
        </div>
        <div className={Styles.hero_community_text}>
          <p>
            Our mission at A-Con is to give cosplay professionals and
            enthusiasts a like a space to showcase their craft, inspire,explore
            lucrative opportunities, and unlock thier potential ina safe
            industry-friendly environment.{" "}
          </p>
        </div>
      </div>
    )
}
export default HeroCommunity