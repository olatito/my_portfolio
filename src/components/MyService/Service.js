import MyService from "./MyService";
import componentsImage from "../../assets/IMG/service1.png";
import stateImage from "../../assets/IMG/service2.png";
import eventsImage from "../../assets/IMG/service3.png";
import "./Service.css";

const concepts = [
  {
    title: "Digital Marketing",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function Service() {
  return (
    <div className="service">
      <div className="inner-service">
        <header>
          <h1>My <span>Service </span></h1>
          <p>Selected key React concepts you should know about      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
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
