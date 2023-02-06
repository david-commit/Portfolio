import potrait from '../img/david-ondiege.jpg';

const About = () => {
  return (
    <div className='about-main-container' id='about'>
      <h1>About Me</h1>
      <p>My introduction</p>
      <div className='about-container'>
        <div className='about-img'>
          <img src={potrait} alt='David Ondiege' />
        </div>
        <div className='about-txt'>
          <h2>BOX</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia
            vel nesciunt dolore maxime cum dicta ad autem. Accusantium magni
            perferendis qui saepe explicabo consequatur minus quo error placeat
            iste nulla voluptatem fugiat, reiciendis est unde debitis? Totam,
            quia quam?
          </p>
          <button class='btn btn-dark'>
            Download Resume <i class='fa-solid fa-circle-down'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
