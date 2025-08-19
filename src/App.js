import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import { SocialIcon } from "react-social-icons";
import { Component } from "react";
import { FaHtml5, FaReact, FaCss3, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const iconMap = {
  FaHtml5: FaHtml5,
  FaReact: FaReact,
  FaCss3: FaCss3,
  FaJava: FaJava,
  IoLogoJavascript: IoLogoJavascript,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <div className="fullpage first">
          <h1 className="title"> {data.title} </h1>
          <div>
            <h2 className="subtitle">{data.subtitle}</h2>
          </div>
          <div className="socialIcons">
            {Object.keys(data.links).map((key) => {
              return <SocialIcon className="socialIcon" url={data.links[key]} />;
            })}
          </div>
        </div>
        <div className="fullpage second">
          <h3 className="about-title">{data.sections[0].title}</h3>
          <p className="about">{data.sections[0].items[0].content}</p>
        </div>
        <div className="fullpage third">
          <h3>{data.sections[1].title}</h3>
          <div className="skillsSection">
            {data.sections[1].items.map((item, index) => {
              const IconComponent = iconMap[item.content.icon];
              return (
                <div key={index} className="skill-card">
                  <div className="skill-icon">
                    {IconComponent && (
                      <IconComponent size={80} />
                    )}
                  </div>
                  <div className="skill-name">
                    <h4>{item.content.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;