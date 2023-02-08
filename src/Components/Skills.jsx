import React from 'react';
import { skills } from '../data.js';

function Skills() {
  console.log(skills)
  return (
    <div className='skills-main-container' id='skills'>
      <h1>My Skills</h1>
      <div className='skills-container'>
        {skills?.map((d) => {
          return (
            <div className='skill'>
              <img src={d.image} alt='d.name' />
              <h6>{d.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
