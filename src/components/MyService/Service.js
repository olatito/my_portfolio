import MyService from "./MyService";
import componentsImage from "../../assets/IMG/service1.png";
import stateImage from "../../assets/IMG/service2.png";
import eventsImage from "../../assets/IMG/service3.png";
import "./Service.css";

const concepts = [
  {
    title: "Front-end Engineer",
    image: componentsImage,
    description:
      "As a software engineer, I architect and build solutions that drive technological progress. I embrace challenges as opportunities for innovation and thrive in dynamic problem-solving environments. My code is a reflection of precision, efficiency, and a commitment to delivering high-quality software.",
  },
  {
    title: "Web Development",
    image: stateImage,
    description:
      "As a web developer, I craft digital experiences that combine creativity and functionality. With a strong foundation in web technologies, I bring ideas to life in the digital realm. My commitment to responsive design ensures user-friendly experiences on all devices",
  },
  {
    title: " Software Designer",
    image: eventsImage,
    description:
      "As a software designer, I blend artistry and functionality to create user-centric experiences. My designs seamlessly merge aesthetics and usability, enhancing digital products. With an eye for detail and user empathy, I craft solutions that delight and engage.",
  },
];

function Service() {
  return (
    <div className="service" id='service'>
      <div className="inner-service">
        <header>
          <h1>My <span>Service </span></h1>
          <p>As a software engineer, I offer expertise in full-stack development, from crafting elegant front-end interfaces to designing scalable back-end architectures. My commitment to clean code and rigorous testing ensures robust and maintainable software solutions. I bring innovation and problem-solving to every project, delivering technology-driven results that drive success",
</p>
        </header>
        <ul id="concepts">
          <MyService
            title={concepts[0].title}
            image={concepts[0].image}
            description={concepts[0].description}
          ></MyService>
          <MyService
            title={concepts[1].title}
            image={concepts[1].image}
            description={concepts[1].description}
          ></MyService>
          <MyService
            title={concepts[2].title}
            image={concepts[2].image}
            description={concepts[2].description}
          ></MyService>
        </ul>
      </div>
    </div>
  );
}

export default Service;
