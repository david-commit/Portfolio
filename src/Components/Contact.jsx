import React from 'react';

const Contact = () => {
  return (
    <div className='contact-main-container' id='contact'>
      <h1>Contact Me</h1>
      <div className='contact-container'>
        <div className='contact-text' class='mt-4 more_info'>
          <h2>Let's Connect</h2>
          <p>
            Have cool idea for new project? Want to build a website or have a
            question? Don't hesitate to contact me.
          </p>
          <span>
            <i class='fa-solid fa-envelope'></i>
            <a href='mailto:davidondiege@gmail.com' target='_blank'>
              {' '}
              davidondiege@gmail.com
            </a>
          </span>
          <span>
            <i class='fa-solid fa-phone'></i>
            <a href='tel:+254714392898' target='_blank'>
              {' '}
              +254 714 392 898
            </a>
          </span>
          <span>
            <i class='fa-brands fa-linkedin'></i>
            <a href='https://www.linkedin.com/in/david-ondiege' target='_blank'>
              {' '}
              David Ondiege
            </a>
          </span>
          <span>
            <i class='fa-brands fa-twitter'></i>
            <a href='https://twitter.com/incognito_098' target='_blank'>
              {' '}
              div.id
            </a>
          </span>
        </div>
        {/* == START OF THE SECOND SECTION == */}
        <div class='col-12 col-lg-8 d-grid align-content-center'>
          <form class='row'>
            <div class='col-12 col-lg-6'>
              <input type='text' placeholder='Your Name' />
            </div>
            <div class='col-12 col-lg-6 mt-3 mt-lg-0'>
              <input type='email' placeholder='Your Email' />
            </div>
            <div class='col-12 col-lg-12 mt-3'>
              <input type='text' placeholder='Subject' />
            </div>
            <div class='col-12 col-lg-12 mt-3'>
              <textarea
                placeholder='Message'
                rows='5'
                style={{ maxHeight: '300px' }}
              ></textarea>
            </div>
            <div class='mt-3 text-center text-lg-end'>
              <button
                class='btn btn-primary rounded-pill text-white mx-auto'
                type='submit'
              >
                Send Message or sending
              </button>
            </div>
            <div class='col-12 mt-3'>
              <p class='thanks'>Thank you. I will reply soon.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
