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
      name: 'A Movie Box'
    },
    {
      title: "State",
      image: project2,
      projectLink: 'https://hng-task3-six.vercel.app/',
      name: 'A Drag n Drop Library',
    },
    {
      title: "Events",
      image: project3,
      projectLink:'https://olatito.github.io/',
      name: 'A Simple Portfolio'
    },
  ];
  return (
    <div className='portfolio-container' id='portfolio'>
      <div className='inner-portfolio_container'>
      <header>
      <h1>My Portfolio</h1>
      <p>
      My portfolio as a developer showcases a diverse range of projects that highlight my technical skills and creativity. Explore my portfolio to witness my passion for turning ideas into functional and elegant software solutions.,
      </p>
    </header>

      <div id="concepts">
          <Project
            title={Projects[0].title}
            projectLink={Projects[0].projectLink}
            image={Projects[0].image}
            name={Projects[0].name}
          ></Project>
          <Project
            title={Projects[1].title}
            image={Projects[1].image}
            projectLink={Projects[1].projectLink}
            description={Projects[1].projectLink}
            name={Projects[1].name}
          ></Project>
          <Project
            Project={Projects[2].title}
            image={Projects[2].image}
            projectLink={Projects[2].projectLink}
            description={Projects[2].projectLink}
            name={Projects[2].name}
          ></Project>
      </div>
      </div>
    </div>
    
  );
};

export default Portfolio;
