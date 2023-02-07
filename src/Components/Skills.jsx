import React from 'react';
import data from '../data.json';

function Skills() {
  return (
    <div className='skills-main-container' id='skills'>
      <h1>My Skills</h1>
      <div className='skills-container'>
        {data?.map((d) => {
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
