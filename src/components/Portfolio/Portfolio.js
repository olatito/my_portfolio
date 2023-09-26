import './Portfolio.css';
import project1 from "../../assets/IMG/project1.png";
import project2 from "../../assets/IMG/project2.png";
import project3 from "../../assets/IMG/project3.png";

import Project from './Project';

function Portfolio() {
  const Projects = [
    {
      title: "Digital Marketing",
      image: project1,
      projectLink: 'https://movie-box-eosin.vercel.app/',
    },
    {
      title: "State",
      image: project2,
      projectLink:
        'https://hng-task3-six.vercel.app/'
    },
    {
      title: "Events",
      image: project3,
      projectLink:
        'https://olatito.github.io/'
    },
  ];
  return (
    <div className='portfolio-container'>
      <div className='inner-portfolio_container'>
      <header>
      <h1>My Portfolio</h1>
      <p>
        Selected key React concepts you should know about "State is data that
        may change over time. As it changes, the UI should be updated to reflect
        the updated data. Each component can maintain its own state and multiple
        components can share state.",
      </p>
    </header>

      <div id="concepts">
          <Project
            title={Projects[0].title}
            projectLink={Projects[0].projectLink}
            image={Projects[0].image}
          ></Project>
          <Project
            title={Projects[1].title}
            image={Projects[1].image}
            description={Projects[1].projectLink}
          ></Project>
          <Project
            Project={Projects[2].title}
            image={Projects[2].image}
            description={Projects[2].projectLink}
          ></Project>
      </div>
      </div>
    </div>
    
  );
};

export default Portfolio;
