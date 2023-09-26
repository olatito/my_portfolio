import MyExperience from "./MyExperience";
import componentsImage from "../../assets/IMG/service1.png";
import stateImage from "../../assets/IMG/service2.png";
import eventsImage from "../../assets/IMG/service3.png";
import "./Experiences.css";

const concepts = [
  {
    date: "June 2021- December 2021",
    title: "Digital Marketing",
    image: componentsImage,
    tools:'Google Ads',
    description:
      "As an intern in Digital marketing ,I have hands-on experience in digital marketing, I've successfully devised and executed data-driven strategies that have propelled businesses to new heights. My expertise includes optimizing SEO rankings, crafting engaging social media campaigns, and delivering ROI-focused PPC advertising",
  },
  {
    date: "Feb 2022 -  Dec 2022",
    title: "CCNA",
    image: stateImage,
    tools:'Routers and Switches',
    description:
      "As a certified network administrator and a CCNA certification under my belt, I've demonstrated proficiency in designing, implementing, and managing complex network solutions. My expertise spans routing, switching, security, and troubleshooting, ensuring seamless connectivity and robust network performance",
  },
  {
    date: "sep 2023 -  Date",
    title: "HNG",
    image: eventsImage,
    tools:'React js',
    description:
      "As an intern at HNG , I've crafted stunning and responsive user interfaces that captivate and engage users. My expertise includes proficiency in HTML, CSS, JavaScript, and various modern frameworks like React ",
  },
];

function Experience() {
  return (
    <div className="service">
      <div className="inner-service">
        <header>
          <h1>
            My <span>Experiences </span>
          </h1>
          <p>
          With a versatile background as a software engineer, digital marketer, and CCNA certified professional, I bring a unique blend of technical prowess and marketing finesse to drive innovation and growth. My experience spans crafting elegant software solutions, devising data-driven marketing strategies, and ensuring robust network infrastructure.,
          </p>
        </header>
        <ul id="concepts">
          <MyExperience
            date={concepts[0].date}
            title={concepts[0].title}
            image={concepts[0].image}
            tools={concepts[0].tools}
            description={concepts[0].description}
          ></MyExperience>
          <MyExperience
          date={concepts[1].date}
            title={concepts[1].title}
            image={concepts[1].image}
            description={concepts[1].description}
            tools={concepts[1].tools}
          ></MyExperience>
          <MyExperience
          date={concepts[2].date}
            title={concepts[2].title}
            image={concepts[2].image}
            description={concepts[2].description}
            tools={concepts[2].tools}
          ></MyExperience>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
