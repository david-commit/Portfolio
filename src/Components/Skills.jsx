import React from 'react';
import { skills } from '../data.js';

function Skills() {
  return (
    <div className='skills-main-container' id='skills'>
      <h1>My Skills</h1>
      <div className='skills-container'>
        {skills?.map((d) => {
          return (
            <a href={d.url} className='skill' key={d.name} data-aos='fade-left' target='_blank'>
              <img src={d.image} alt={d.name} />
              <h6>{d.name}</h6>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
