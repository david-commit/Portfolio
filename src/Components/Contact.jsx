import React from 'react';

const Contact = () => {
  return (
    <div className='contact-main-container'>
      <h1>Contact Me</h1>
      <div className='contact-container'>
        <div className='contact-text'>
          <h2>Let's Connect</h2>
          <p>
            Have cool idea for new project? Want to build a website or have a
            question? Don't hesitate to contact me.
          </p>
          <span>
            <i class='fa-solid fa-envelope'></i>
            <a href='mailto:davidondiege@gmail.com' target='_blank'>
              davidondiege@gmail.com
            </a>
          </span>
          <span>
            <i class='fa-solid fa-phone'></i>
            <a href='tel:+254714392898' target='_blank'>
              +254 714 392 898
            </a>
          </span>
          <span>
            <i class='fa-brands fa-linkedin'></i>
            <a
              href='https://www.linkedin.com/in/david-ondiege'
              target='_blank'
            ></a>
          </span>
          <span>
            <i class='fa-brands fa-twitter'></i>
            <a href='https://twitter.com/incognito_098' target='_blank'>
              {' '}
              Twitter
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
