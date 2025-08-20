import "../App.css";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { Component } from "react";
import Fullpage from "../component/Fullpage";

class SkillSection extends Component {
  render() {
    return (
      <Fullpage className="fullpage second">
        <h3 className="about-title">{data.sections[0].title}</h3>
        <p className="about">{data.sections[0].items[0].content}</p>
      </Fullpage>
    );
  }
}
export default SkillSection;
