import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState([]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        'service_o07car8',
        'template_avod1kv',
        form.current,
        '5D1KKXQaPNa9YvGj_'
      )
      .then(
        (result) => {
          setSendSuccess(true);
        },
        (error) => {
          setErrors(true);
        }
      );
  };

  return (
    <div className='contact-main-container' id='contact'>
      <h1>Contact Me</h1>
      <div className='contact-container'>
        <div className='contact-text' data-aos='fade-right'>
          <h3>Let's Connect</h3>
          <p>
            Have cool idea for new project? Want to build a website or have a
            question? Don't hesitate to contact me.
          </p>
          <div>
            <a href='https://twitter.com/incognito_098' target='_blank'>
              <i class='fa-brands fa-twitter'></i> div.id
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/david-ondiege' target='_blank'>
              <i class='fa-brands fa-linkedin'></i> David Ondiege
            </a>
          </div>
          <div>
            <a href='mailto:davidondiege@gmail.com' target='_blank'>
              <i class='fa-solid fa-envelope'></i> davidondiege@gmail.com
            </a>
          </div>
          <div>
            <a href='tel:+254714392898' target='_blank'>
              <i class='fa-solid fa-phone'></i> +254 714 392 898
            </a>
          </div>
        </div>
        {/* == START OF THE SECOND SECTION == */}
        {sendSuccess ? (
          <div className='success-message' data-aos='fade-left'>
            Thank you. <br />
            Your message has been received. I will reply soon.
          </div>
        ) : (
          <form
            className='contact-form'
            ref={form}
            onSubmit={sendEmail}
            data-aos='fade-left'
          >
            <div>
              <input
                type='text'
                placeholder='Your Name'
                name='user_name'
                required
              />
              <input
                type='email'
                placeholder='Your Email'
                name='user_email'
                required
              />
            </div>
            <input type='text' placeholder='Subject' name='subject' required />
            <textarea placeholder='Message' name='message' required />
            <button type='submit'>
              {sending ? (
                <>
                  Sending..{' '}
                  <span
                    class='spinner-border text-light '
                    style={{ width: '20px', height: '20px', marginTop: '1px' }}
                  ></span>
                </>
              ) : (
                <>
                  Send Message{' '}
                  <i
                    class='fa-solid fa-paper-plane'
                    style={{ color: 'white', marginLeft: '8px' }}
                    value='Send'
                  ></i>
                </>
              )}
            </button>
            {errors && errors?.map((error) => <li>{error}</li>)}
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
