const Footer = () => {
  return (
    <div className='footer-main-container'>
      <div className='footer-container'>
        <section>
          Made with ❤️, By David Ondiege, Open sourced on{' '}
          <a href='https://github.com/david-commit' target='_blank' style={{marginLeft: '12px'}}>
            <i class='fa-brands fa-github'></i>
          </a>
        </section>
        <section>
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
      </div>
    </div>
  );
};

export default Footer;
