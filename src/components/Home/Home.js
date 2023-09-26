import profileImg from "../../assets/IMG/pp.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="inner-home-page">
        <div className="home-text">
          <div className="inner-home-div">
            <h5>Hello, Welcome</h5>
            <h2>I'm Olayiwola Tofunmi</h2>
            <p>
              I am a front-end Engineer, I love Learning new Technologies, I love meeting new people
            </p>
            <div>
              <button className="home_button">Contact us</button>
            </div>
          </div>
        </div>
        <div className="home-imgs">
          <img src={profileImg} className="home-img" />
        </div>
      </div>
    </div>
  );
}
export default Home;
