import "../App.css";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { Component } from "react";
import Fullpage from "../component/Fullpage";

class TitleSection extends Component {
  render() {
    return (
      <Fullpage className="fullpage first">
        <h1 className="title"> {data.title} </h1>
        <div>
          <h2 className="subtitle">{data.subtitle}</h2>
        </div>
        <div className="socialIcons">
          {Object.keys(data.links).map((key) => {
            return <SocialIcon className="socialIcon" url={data.links[key]} />;
          })}
        </div>
      </Fullpage>
    );
  }
}
export default TitleSection;
