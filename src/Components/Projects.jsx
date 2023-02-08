import React from 'react';
import { projects } from '../data.js';
import image from '../img/newlife.png';

const Projects = () => {
  console.log(projects);
  return (
    <div className='projects-main-container' id='projects'>
      <h1>Projects</h1>
      <p>Here are some of the projects i've contributed to:</p>
      <div className='projects-container'>
        {projects?.map((p) => {
          return (
            <div className='project' key={p.name}>
              <a href={p.url} target='_blank' rel='noopener noreferrer'>
                <img src={p.image} alt={p.name} />
                <h5>{p.name}</h5>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

// LINKS
// https://newlife-frontend.vercel.app/
// https://fitness-palace-frontend-ten.vercel.app/
// http://i-care-frontend.vercel.app/
// https://gym-it.vercel.app/
// https://david-commit.github.io/PataBoda/
// http://saloon-sigma.vercel.app/
// https://microsoft-ui-clone.pages.dev/
