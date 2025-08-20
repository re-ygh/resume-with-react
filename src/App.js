import "./App.css";
import { Component } from "react";
import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <TitleSection />
        <AboutSection />
        <SkillsSection />
      </div>
    );
  }
}

export default App;
