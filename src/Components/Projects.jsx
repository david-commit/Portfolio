import React from 'react';
import { projects } from '../data.js';
import image from '../img/newlife.png';

const Projects = () => {
  return (
    <div className='projects-main-container' id='projects'>
      <h1>Projects</h1>
      <p>Here are some of the projects i've contributed to:</p>
      {/* <div className='projects-container'> */}
      <div className='projects-container'>
        {projects?.map((p) => {
          return (
            <div class='project' key={p.name}  data-aos="fade-up">
              <div class='project-content'>
                <a
                  href={p.url}
                  target='_blank'
                >
                  <div class='project-content-overlay'></div>
                  <img
                    class='project-content-image'
                    src={p.image}
                    alt='david ondieges projects'
                    loading='lazy'
                    width='1600'
                    height='900'
                  />
                  <div class='project-content-details fadeIn-bottom'>
                    <h3 class='project-content-title'>{p.name}</h3>
                    <p class='project-content-text'>{p.description}</p>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
