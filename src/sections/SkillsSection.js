import "../App.css";
import data from "../data.json";
import { Component } from "react";

import Fullpage from "../component/Fullpage";
import SkillCard from "../component/SkillCard"
import { Link, Element } from "react-scroll";
import UpIcon from "../component/DownIcon";
import { TbBackground } from "react-icons/tb";




class SkillsSection extends Component {
  render() {
    return (
      <div>
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
       <Link
          activeClass="active"
          to="title"
          spy={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <UpIcon icon={data.icons.up} />
        </Link>
      </div>
    );
  }
}
export default SkillsSection;
