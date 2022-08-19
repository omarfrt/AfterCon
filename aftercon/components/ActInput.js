import { useState } from "react";
import Styles from "../styles/hero.module.css";

const ActInput = () => {
  const [contactInfo, SetContacInfo] = useState("");
  const handleChange = (event) => {
    SetContacInfo(event.target.value);
  };
  const handleSubmit = (event) => {
    alert(contactInfo);
  };
  return (
    <div className={Styles.action_input_container}>
      <input
        placeholder="@"
        name="email"
        type="email"
        onChange={handleChange}
        value={contactInfo}
      ></input>
      <button onClick={handleSubmit}>Get Early Access</button>
    </div>
  );
};

export default ActInput;
