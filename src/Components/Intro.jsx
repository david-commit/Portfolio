import React from 'react';
import potrait from '../img/david-ondiege.jpg';

const Intro = () => {
  return (
    <>
      <div className='intro-main-container' id='intro'>
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
            <section>
              <h5>
                Welcome to my Portfolio <span class='h1'>👋</span>
              </h5>
              <h1>Hi, I'm David Ondiege</h1>
              <div className='intro-title'>
                <hr />
                &nbsp; &nbsp;<p>Full Stack web Developer</p>
              </div>
              <p>
                I'm a Fullstack web developer based in Nairobi - Kenya and i'm
                very passionate and dedicated to my work.
              </p>
              <a href='#contact'>
                <button id='connect-btn'>
                  Let's Connect <i class='fa-solid fa-circle-arrow-right'></i>
                </button>
              </a>
            </section>
          </div>
          <div className='intro-img'>
            <img src={potrait} alt='David Ondiege' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
