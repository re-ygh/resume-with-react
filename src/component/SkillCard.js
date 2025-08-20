import React, { Component } from "react";
import "./SkillCard.css";
import { FaHtml5, FaReact, FaCss3, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const iconMap = {
  FaHtml5: FaHtml5,
  FaReact: FaReact,
  FaCss3: FaCss3,
  FaJava: FaJava,
  IoLogoJavascript: IoLogoJavascript,
};

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    const { index } = this.props;
    const IconComponent = iconMap[skill.content.icon];

    return (
      <div key={index} className="skill-card">
        <div className="skill-icon">
          {IconComponent && <IconComponent size={80} />}
        </div>
        <div className="skill-name">
          <h4>{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
export default SkillCard;
