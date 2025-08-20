import "../App.css";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { Component } from "react";
import Fullpage from "../component/Fullpage";
import DownIcon from "../component/DownIcon";
import { Link, Element } from "react-scroll";


class SkillSection extends Component {
  render() {
    return (
      <div>
      <Fullpage className="fullpage second">
        <h3 className="about-title">{data.sections[0].title}</h3>
        <p className="about">
          {data.sections[0].items[0].content.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </Fullpage>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="skills" className="element"></Element>
      </div>
    );
  }
}
export default SkillSection;
