import React from 'react';
import potrait from '../img/david-ondiege.jpg'

const Intro = () => {
  return (
    <div className='intro-main-container'>
      <section className='intro-socials'>
        <a href='https://twitter.com/incognito_098' target='_blank'>
          <i class='fa-brands fa-twitter'></i>
        </a>
        <a href='https://www.linkedin.com/in/david-ondiege' target='_blank'>
          <i class='fa-brands fa-linkedin'></i>
        </a>
        <a href='mailto:davidondiege@gmail.com' target='_blank'>
          <i class='fa-solid fa-envelope'></i>
        </a>
        <a href='https://github.com/david-commit' target='_blank'>
          <i class='fa-brands fa-github'></i>
        </a>
      </section>
      <div className='intro-container'>
        <div className='intro-txt'>
          <h1>David Ondiege</h1>
        </div>
        <div className='intro-img'>
         <img src={potrait} alt="David Ondiege" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
