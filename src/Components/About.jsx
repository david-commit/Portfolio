// import potrait from '../img/david-ondiege.jpg';

const About = () => {
  return (
    <div className='about-main-container' id='about' data-aos='fade-up'>
      <div className='about-container'>
        <section className='about-img' data-aos='fade-left'>
          <h1>About Me</h1>
          <h6 style={{color: 'rgb(13, 25, 48)', fontWeight: "700"}}>Who am I?</h6>
          {/* <img src={potrait} alt='David Ondiege' /> */}
        </section>
        <div className='about-txt' data-aos='fade-right'>
          <p>
            I’m a Full-Stack Developer based in Nairobi - Kenya, who likes to
            provide solutions for people's projects and businesses which it is a
            challenge that I enjoy overcoming.
          </p>
          <p>
            I am a passionate person who pursues his dreams, who works hard and
            who is results oriented. As a matter of fact, I constantly work on
            improving myself seeking to achieve the best version of myself.
          </p>
          <p>
            I build websites using HTML, CSS, JavaScript and ReactJS for the
            frontend and Ruby on Rails for the backend of my projects. I also
            work on a few WordPress projects on the side. I spend most days
            learning and building things.
          </p>
          <a
            href='https://drive.google.com/file/d/1n-BD70Ut36eONyyU3-CMUgwPUTm1eAlU/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>
              My Resume <i class='fa-solid fa-circle-down'></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
