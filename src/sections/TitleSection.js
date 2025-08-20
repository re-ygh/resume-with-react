import "../App.css";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { Component } from "react";
import Fullpage from "../component/Fullpage";
import DownIcon from "../component/DownIcon";
import { Link, Element } from "react-scroll";

class TitleSection extends Component {
  render() {
    return (
      <div>
        <Element name="title" className="element"></Element>
        <Fullpage className="fullpage first">
          <div className="links-on-top">
            <Link className="each-link-on-top"
              activeClass="active"
              to="about"
              spy={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              About
            </Link>
            <Link className="each-link-on-top"
              activeClass="active"
              to="skills"
              spy={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Skills
            </Link>
          </div>
          <h1 className="title">{data.title}</h1>
          <div>
            <h2 className="subtitle">{data.subtitle}</h2>
          </div>
          <div className="socialIcons">
            {Object.keys(data.links).map((key) => {
              return (
                <SocialIcon
                  key={key}
                  className="socialIcon"
                  url={data.links[key]}
                />
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="about" className="element"></Element>
      </div>
    );
  }
}
export default TitleSection;
