import '../App.css';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section id="hero" className="container">
      <div className="row">
        <div id="card" className="card text-center">
          <div className="card-header">
            <div className="profile-img"></div>

            <div className="header-description">
              <h1>Amon Kibet</h1>

              <TypeAnimation
                className="descriptionTyped"
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Cloud and DevOps Engineer',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />

              <div className="social-icons">
                <span>
                  <a
                    href="https://x.com/_AmonKibet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </span>                                                       

                <span>
                  <a
                    href="https://github.com/kibetAmon"
                    target="_blank"                                                                                                                             
                    rel="noreferrer"
                  >
                    <i className="fa fa-github"></i>
                  </a>      
                </span>

                <span>
                  <a                                                                                                                                                                                                                                                                                                                            
                    href="https://www.linkedin.com/in/amon-kibet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-title">About me</h2>

            <p className="card-text">
            Hey there 👋🏼, I'm Amon Kibet — a Full-Stack Software Engineer based in Kenya 🇰🇪. I architect scalable solutions across the entire stack, from sleek frontends to robust cloud infrastructure ☁️. My passion? Building modern, lightning-fast applications while orchestrating seamless CI/CD pipelines and cloud-native deployments 🚀. I thrive at the intersection of code, automation, and infrastructure — where DevOps meets innovation 💻⚡.
            Got an exciting opportunity or challenge? Let's build something extraordinary together 🔥.
            </p>

            <a
              href="https://drive.google.com/file/d/1jQtxDG5YPIuUVFzkXyBv_zFURH2CKHwq/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              id="download"
              className="btn hero-btn"
            >
              Download CV
            </a>

            <Link to="projects" spy smooth className="btn hero-btn">
              My Projects
            </Link>
          </div>
        </div>
      </div>

      <Link to="education" spy smooth>
        <div id="scroll-down" className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </section>
  );
}

export default Hero;
