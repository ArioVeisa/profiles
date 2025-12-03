import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <article>
          {/* HERO Section */}
          <section className="section hero" aria-label="home">
            <div className="container">
              <figure className="hero-banner">
                <img
                  src="/assets/images/hero-img.jpg"
                  width="560"
                  height="540"
                  alt="Ario Veisa - Security Research & Business Development Expert"
                  className="w-100"
                  data-reveal="top"
                  loading="eager"
                />

                <img
                  src="/assets/images/hero-shape.svg"
                  width="203"
                  height="91"
                  alt="250+ Proyek Selesai - Ario Veisa"
                  className="shape"
                  data-reveal="top"
                  data-reveal-delay="0.25s"
                  loading="lazy"
                />
              </figure>

              <div className="hero-content">
                <h1
                  className="h1 hero-title"
                  data-reveal="top"
                  data-reveal-delay="0.5s"
                >
                  I&apos;m Security Research & Business Development.
                </h1>

                <p
                  className="section-text"
                  data-reveal="top"
                  data-reveal-delay="0.75s"
                >
                  Hello! I&apos;m Ario, a Security Research & Business Development
                  based in Indonesia. I&apos;m very passionate about the work that I
                  do.
                </p>

                <div className="btn-wrapper" data-reveal="top" data-reveal-delay="1s">
                  <Link href="#working" className="btn btn-primary">See My Works</Link>
                  <Link href="#contact" className="btn btn-secondary">Contact Me</Link>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT Section - akan dipindah ke komponen terpisah */}
          <section className="section about" aria-label="about" id="working">
            <div className="container">
              <div className="wrapper">
                <div data-reveal="left">
                  <h2 className="h2 section-title">What I Do?</h2>
                  <p className="section-text">
                    A dedicated Security Researcher & Developer based in
                    Indonesia, specializing in cybersecurity, web app development,
                    and business consulting. With a deep passion for creating
                    secure digital environments, focuses on analyzing threats,
                    developing secure systems, and providing strategic business
                    insights to address complex challenges in the digital
                    landscape.
                  </p>
                </div>
                
                <ul className="progress-list" data-reveal="right">
                  <li className="progress-item">
                    <div className="label-wrapper">
                      <p>Business Development</p>
                      <span className="span">90 %</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-fill"
                        style={{ width: '90%', backgroundColor: '#c7b1dd' }}
                      ></div>
                    </div>
                  </li>

                  <li className="progress-item">
                    <div className="label-wrapper">
                      <p>Web Development</p>
                      <span className="span">80 %</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-fill"
                        style={{ width: '80%', backgroundColor: '#8caeec' }}
                      ></div>
                    </div>
                  </li>

                  <li className="progress-item">
                    <div className="label-wrapper">
                      <p>Digital Forensic</p>
                      <span className="span">85 %</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-fill"
                        style={{ width: '85%', backgroundColor: '#b0d4c1' }}
                      ></div>
                    </div>
                  </li>

                  <li className="progress-item">
                    <div className="label-wrapper">
                      <p>Security Researcher</p>
                      <span className="span">85 %</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-fill"
                        style={{ width: '85%', backgroundColor: '#e3a6b6' }}
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Skills Grid */}
              <ul className="grid-list">
                <li data-reveal="bottom">
                  <div className="about-card">
                    <div className="card-icon">
                      <img
                        src="/assets/images/icon-1.svg"
                        width="52"
                        height="52"
                        loading="lazy"
                        alt="web design icon"
                      />
                    </div>
                    <h3 className="h4 card-title">Digital Forensic</h3>
                    <p className="card-text">
                      Analyzes digital data and recovers evidence from devices to
                      identify cybercrimes and support legal investigations.
                    </p>
                  </div>
                </li>
                
                <li data-reveal="bottom" data-reveal-delay="0.25s">
                  <div className="about-card">
                    <div className="card-icon">
                      <img
                        src="/assets/images/icon-2.svg"
                        width="52"
                        height="52"
                        loading="lazy"
                        alt="mobile design icon"
                      />
                    </div>
                    <h3 className="h4 card-title">Web Development</h3>
                    <p className="card-text">
                      Designs, builds, and maintains websites and web
                      applications, handling both front-end (user interface) and
                      back-end (data processing) development.
                    </p>
                  </div>
                </li>

                <li data-reveal="bottom" data-reveal-delay="0.5s">
                  <div className="about-card">
                    <div className="card-icon">
                      <img
                        src="/assets/images/icon-3.svg"
                        width="52"
                        height="52"
                        loading="lazy"
                        alt="web development icon"
                      />
                    </div>
                    <h3 className="h4 card-title">Business Development</h3>
                    <p className="card-text">
                      Identifies new business opportunities, develops marketing
                      strategies, and builds partnerships to drive long-term
                      growth.
                    </p>
                  </div>
                </li>

                <li data-reveal="bottom" data-reveal-delay="0.75s">
                  <div className="about-card">
                    <div className="card-icon">
                      <img
                        src="/assets/images/icon-4.svg"
                        width="52"
                        height="52"
                        loading="lazy"
                        alt="web seo icon"
                      />
                    </div>
                    <h3 className="h4 card-title">Security Researcher</h3>
                    <p className="card-text">
                      Identifies and analyzes vulnerabilities in systems,
                      applications, or networks to detect threats and protect
                      digital environments.
                    </p>
                  </div>
                </li>

                <li data-reveal="bottom" data-reveal-delay="0.75s">
                  <div className="about-card">
                    <div className="card-icon">
                      <img
                        src="/assets/images/icon-6.svg"
                        width="52"
                        height="52"
                        loading="lazy"
                        alt="web seo icon"
                      />
                    </div>
                    <h3 className="h4 card-title">
                      Head of CoreTechResource Community
                    </h3>
                    <p className="card-text">
                      CoreTechResource is a community for tech professionals and
                      enthusiasts focused on cybersecurity, programming, software
                      development, and career networking. Its mission is to share
                      knowledge and support skill development.
                    </p>
                  </div>
                </li>

                <li data-reveal="bottom" data-reveal-delay="1s">
                  <div className="about-card">
                    <div className="card-icon">
                      <img
                        src="/assets/images/icon-7.svg"
                        width="52"
                        height="52"
                        loading="lazy"
                        alt="web seo icon"
                      />
                    </div>
                    <h3 className="h4 card-title">Head of Minetech.io Startup</h3>
                    <p className="card-text">
                      MineTechnologyInnovation is a startup focused on advancing
                      third party technology. It brings together professionals,
                      researchers, and enthusiasts to drive innovation, develop
                      new methods, and solve industry challenges through
                      collaboration and cutting-edge solutions.
                    </p>
                  </div>
                </li>

                <li data-reveal="bottom" data-reveal-delay="1.25s">
                  <div className="about-card">
                    <div className="card-icon">
                      <img
                        src="/assets/images/icon-8.svg"
                        width="52"
                        height="52"
                        loading="lazy"
                        alt="web seo icon"
                      />
                    </div>
                    <h3 className="h4 card-title">Urbanlens Photography Content</h3>
                    <p className="card-text">
                      Urbanlens Photography Content focuses on capturing and
                      sharing the essence of urban life through photography. It
                      highlights the beauty, complexity, and diversity of cities
                      by exploring architecture, street life, cultural moments,
                      and hidden details within urban landscapes.
                    </p>
                  </div>
                </li>

                <li data-reveal="bottom" data-reveal-delay="1.50s">
                  <div className="about-card">
                    <div className="card-icon">
                      <img
                        src="/assets/images/icon-9.svg"
                        width="52"
                        height="52"
                        loading="lazy"
                        alt="web seo icon"
                      />
                    </div>
                    <h3 className="h4 card-title">Developer Open Source Project</h3>
                    <p className="card-text">
                      Contribute Code: write, review, and improve the codebase to
                      fix bugs, add features, or enhance performance. Collaborate
                      with the Community: interact with other developers, report
                      issues, review pull requests, and provide feedback on
                      contributions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* PROJECT Section */}
          <section className="section project" aria-labelledby="project-label" id="project">
            <div className="container">
              <div className="title-wrapper" data-reveal="top">
                <div>
                  <h2 className="h2 section-title" id="project-label">
                    Latest Projects
                  </h2>
                  <p className="section-text">
                    Check out some of my latest projects with creative ideas.
                  </p>
                </div>
                <Link href="https://github.com/arioveisa" className="btn btn-secondary">See All Projects</Link>
              </div>

              <ul className="grid-list">
                <li>
                  <div
                    className="project-card project-card-1"
                    style={{ backgroundColor: '#f8f5fb' }}
                  >
                    <div className="card-content" data-reveal="left">
                      <p className="card-tag" style={{ color: '#a07cc5' }}>
                        Digital Forensic
                      </p>
                      <h3 className="h3 card-title">Wazuh App</h3>
                      <p className="card-text">
                        Fully protected data, regular application of security
                        patches and hardening practices. Compliant with PCI DSS
                        and SOC2. A ready-to-use solution, with no additional
                        hardware or software required, driving down the cost and
                        complexity.
                      </p>
                      <Link href="/404" className="btn-text" style={{ color: '#a07cc5' }}>
                        {/* <span className="span"></span> */}
                        <ion-icon
                          name="arrow-forward-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </Link>
                    </div>
                    <figure className="card-banner" data-reveal="right">
                      <img
                        src="/assets/images/project-1.jpg"
                        width="650"
                        height="370"
                        loading="lazy"
                        alt="Web Design"
                        className="w-100"
                      />
                    </figure>
                  </div>
          </li>

                <li>
                  <div
                    className="project-card project-card-2"
                    style={{ backgroundColor: '#f1f5fd' }}
                  >
                    <div className="card-content" data-reveal="right">
                      <p className="card-tag" style={{ color: '#3f78e0' }}>
                        Web Development
                      </p>
                      <h3 className="h3 card-title">Bank App</h3>
                      <p className="card-text">
                        A web app that helps manage budgets and track inventory,
                        designed to streamline business operations and improve
                        cost efficiency.
                      </p>
                    
                    </div>
                    <figure className="card-banner" data-reveal="left">
                      <img
                        src="/assets/images/project-2.png"
                        width="600"
                        height="367"
                        loading="lazy"
                        alt="Web Design"
                        className="w-100"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div
                    className="project-card project-card-3"
                    style={{ backgroundColor: '#f5faf7' }}
                  >
                    <div className="card-content" data-reveal="left">
                      <p className="card-tag" style={{ color: '#7cb798' }}>
                        Business Development
                      </p>
                      <h3 className="h3 card-title">Company Project</h3>
                      <p className="card-text">
                        identify new business opportunities, improve operations,
                        and establish key partnerships that drive the company&apos;s
                        growth and long-term success. It focuses on expanding
                        market presence and creating sustainable strategies for
                        future projects.
                      </p>
                 
                    </div>
                    <figure className="card-banner" data-reveal="right">
                      <img
                        src="/assets/images/project-3.png"
                        width="500"
                        height="267"
                        loading="lazy"
                        alt="Web Design"
                        className="w-100"
                      />
                    </figure>
        </div>
                </li>

                <li>
                  <div
                    className="project-card project-card-4"
                    style={{ backgroundColor: '#fcf4f6' }}
                  >
                    <div className="card-content" data-reveal="left">
                      <p className="card-tag" style={{ color: '#d16b86' }}>
                        Security Research
                      </p>
                      <h3 className="h3 card-title">Maltego App</h3>
                      <p className="card-text">
                        Performed targeted manual penetration tests on critical
                        areas, such as user authentication, payment processing,
                        and access controls, to identify any potential weak points
                        that automated tools might have missed.
                      </p>
                      
                    </div>
                    <figure className="card-banner" data-reveal="right">
                      <img
                        src="/assets/images/project-4.png"
                        width="620"
                        height="370"
                        loading="lazy"
                        alt="Mobile Design"
                        className="w-100"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* CONTACT Section */}
          <section className="section contact" aria-label="contact" id="contact">
            <div className="container">
              <div className="contact-card">
                <div className="contact-content" data-reveal="left">
                  <div className="card-icon">
                    <img
                      src="/assets/images/icon-5.svg"
                      width="44"
                      height="44"
                      loading="lazy"
                      alt="envelop icon"
                    />
                  </div>
                  <h2 className="h2 section-title">
                    If you like what you see, let&apos;s work together.
                  </h2>
                  <p className="section-text">
                    I bring rapid solutions to make the life of my clients easier.
                  </p>
                </div>

                {/* Form contact akan mengarahkan langsung ke email Ario */}
                <form
                  action="mailto:arioveisa@gmail.com"
                  method="GET"
                  encType="text/plain"
                  className="contact-form"
                  data-reveal="right"
                >
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      required
                      className="input-field"
                    />
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Email *"
                      required
                      className="input-field"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message *"
                    required
                    className="input-field"
                  ></textarea>
                  <button type="submit" className="btn btn-secondary">
                    Send message
                  </button>
                </form>
              </div>
    </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
