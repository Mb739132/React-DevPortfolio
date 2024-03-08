import headshot from "src\assets\images\headshot.jpg"

const About = () => {
  return (
    <section className="content" id="about">  
      <h1>About Me</h1>
      <div className="about-me">
        <div>
          <p>Hi, I'm Mariatu.</p>
          <p> 
          As a meticulous full-stack developer, I possess expertise in responsive web design and development, web accessibility, digital activation, project management, and design exploration.
          </p>
          {/* <hr /> */}
          <p>
            I completed a Full-Stack Web Development Bootcamp through The University of Pennsylvania in March 2024.  
          </p>
        </div>
        <img src={headshot} alt="headshot of Mariatu Bah" />
      </div>
    </section>
  )
}

export default About;