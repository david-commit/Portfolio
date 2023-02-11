import React, { useEffect, useRef } from 'react';
import potrait from '../img/david-ondiege.jpg';
import Typed from 'typed.js';

const Intro = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Fullstack Web Developer', 'IT Administrator'],
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 2500,
      // loop
      loop: true,
      // false = infinite
      // loopCount: 5,
      // show cursor
      showCursor: true,
      // character for cursor
      cursorChar: '|',
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

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
                <hr style={{border: '2px solid rgb(13, 25, 48)'}} />
                &nbsp; &nbsp;
                <p ref={el}></p>
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
