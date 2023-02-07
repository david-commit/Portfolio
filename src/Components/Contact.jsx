import React, { useState } from 'react';

const Contact = () => {
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSendSuccess(false);
    fetch(``, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.ok) {
        setSendSuccess(true);
      }
    });
  };
  return (
    <div className='contact-main-container' id='contact'>
      <h1>Contact Me</h1>
      <div className='contact-container'>
        <div className='contact-text'>
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
          <div className='success-message'>
            <p>Thank you. I will reply soon.</p>
          </div>
        ) : (
          <form className='contact-form'>
            <div>
              <input type='text' placeholder='Your Name' />
              <input type='email' placeholder='Your Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Message'></textarea>
            <button type='submit'>
              {sending ? 'Sending..' : `Send Message `}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
