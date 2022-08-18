import Styles from "../styles/hero.module.css"

const ActInput = ()=>{
    return (
        <div className={Styles.action_input_container}>
            <input placeholder="@"></input>
            <button>Get Early Access</button>
          </div>
    )
}

export default ActInput;