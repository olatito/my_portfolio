import profileImg from "../../assets/IMG/pp.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="inner-about-page">
        <div className="about-imgs">
          <img src={profileImg} className="about-img" />
        </div>
        <div className="about-text">
          <div className="inner-about-div">
            <h5>About <span>Me</span></h5>
            <p>
            As a computer science graduate and passionate software engineer, I thrive on creating innovative solutions to complex problems. My dedication to continuous learning fuels my drive to stay at the forefront of technology and deliver impactful software solutions."
            </p>
            <div>
              <button className="about_button">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
