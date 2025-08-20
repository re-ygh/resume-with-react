import "../App.css";
import data from "../data.json";
import { Component } from "react";

import Fullpage from "../component/Fullpage";
import SkillCard from "../component/SkillCard"


class SkillsSection extends Component {
  render() {
    return (
      <Fullpage className="fullpage third">
        <h3>{data.sections[1].title}</h3>
        <div className="skillsSection">
          {data.sections[1].items.map((skill, index) => {
            return (
                <SkillCard index={index} skill={skill}/>
            );
          })}
        </div>
      </Fullpage>
    );
  }
}
export default SkillsSection;
