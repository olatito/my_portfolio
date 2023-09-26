import MyExperience from "./MyExperience";
import componentsImage from "../../assets/IMG/service1.png";
import stateImage from "../../assets/IMG/service2.png";
import eventsImage from "../../assets/IMG/service3.png";
import "./Experiences.css";

const concepts = [
  {
    date: "June 2002 -  2023",
    title: "Digital Marketing",
    image: componentsImage,
    tools:'Javascript',
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    date: "June 2002 -  2023",
    title: "State",
    image: stateImage,
    tools:'Javascript',
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    date: "June 2002 -  2023",
    title: "Events",
    image: eventsImage,
    tools:'Javascript',
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
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
            Selected key React concepts you should know about "State is data
            that may change over time. As it changes, the UI should be updated
            to reflect the updated data. Each component can maintain its own
            state and multiple components can share state.",
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
          date={concepts[2].date}
            title={concepts[1].title}
            image={concepts[1].image}
            description={concepts[1].description}
            tools={concepts[2].tools}
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
