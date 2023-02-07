import potrait from '../img/david-ondiege.jpg';

const About = () => {
  return (
    <div className='about-main-container' id='about'>
      <h1>About Me</h1>
      <p>My Introduction</p>
      <div className='about-container'>
        <div className='about-img'>
          <img src={potrait} alt='David Ondiege' />
        </div>
        <div className='about-txt'>
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
            I build websites using HTML, CSS, JavaScript and ReactJS for the  frontend and Ruby on Rails for the backend of my projects. I also work on a few WordPress projects on the side. I spend most days learning and building things.
          </p>
          <button>
            Download Resume <i class='fa-solid fa-circle-down'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
