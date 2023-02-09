import React, { useState } from 'react';

const Contact = () => {
  const [sendSuccess, setSendSuccess] = useState(true);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSendSuccess(false);
    fetch(`/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.ok) {
        res.json(() => {
          setSendSuccess(true);
        })
      } else {
         res.json((res) => {
           setErrors(res.errors);
         });
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
          <div className='success-message'>Thank you. <br />
          Your message has been received. I will reply soon.</div>
        ) : (
          <form className='contact-form' onSubmit={handleSubmit}>
            <div>
              <input
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type='text'
              placeholder='Subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit'>
              {sending ? (
                <>
                Sending.. {' '}  <span class="spinner-border text-light " style={{ width: '20px', height: '20px', marginTop: '1px' }} ></span>
                </>
              ) : (
                <>
                  Send Message{' '}
                  <i
                    class='fa-solid fa-paper-plane'
                    style={{ color: 'white', marginLeft: '8px' }}
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
