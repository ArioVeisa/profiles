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
                  alt="Ario Veisa - Software Architect & Business Development"
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
                  I&apos;m Software Architect & Business Development.
                </h1>

                <p
                  className="section-text"
                  data-reveal="top"
                  data-reveal-delay="0.75s"
                >
                  Hello! I&apos;m Ario, a Software Architect & Business Development
                  based in Indonesia. I&apos;m very passionate about the work that I
                  do.
                </p>

                <div className="btn-wrapper" data-reveal="top" data-reveal-delay="1s">
                  <Link href="#working" className="btn btn-primary">See My Works</Link>
                  <Link href="https://wa.me/6285182302209" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Contact Me</Link>
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
                    A dedicated Software Architect & Developer based in
                    Indonesia, specializing in system architecture, web app development,
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
                      <p>Software Architect</p>
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
                    <h3 className="h4 card-title">Software Architect</h3>
                    <p className="card-text">
                      Designs scalable system architecture, plans technical
                      direction, and aligns application structure with business
                      needs for reliable digital products.
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
                        alt="technology leadership icon"
                      />
                    </div>
                    <h3 className="h4 card-title">Head of Tech Sadhanaofficial.id</h3>
                    <p className="card-text">
                      Leads the technology direction for Sadhanaofficial.id,
                      overseeing ERP/POS development, system architecture,
                      product improvements, and operational tools that help the
                      business scale across outlets and digital services.
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
                <Link href="/projects" className="btn btn-secondary">See All Projects</Link>
              </div>

              <ul className="grid-list">
                <li>
                  <div
                    className="project-card project-card-1"
                    style={{ backgroundColor: '#f8f5fb' }}
                  >
                    <div className="card-content" data-reveal="left">
                      <p className="card-tag" style={{ color: '#7b4df3' }}>
                        Web Development
                      </p>
                      <h3 className="h3 card-title">GymFit Membership Program</h3>
                      <p className="card-text">
                        Built an all-in-one gym membership system to manage
                        members, packages, payments, check-ins, QR codes,
                        notifications, and analytics in one platform for fitness
                        centers.
                      </p>
                      <Link href="/projects" className="btn-text" style={{ color: '#7b4df3' }}>
                        {/* <span className="span"></span> */}
                        <ion-icon
                          name="arrow-forward-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </Link>
                    </div>
                    <figure className="card-banner" data-reveal="right">
                      <img
                        src="/assets/images/projects/gymfit/gymfit-membership-dashboard.png"
                        width="650"
                        height="370"
                        loading="lazy"
                        alt="GymFit Membership Program - Web Development Project"
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
                        App Development
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
                        src="/assets/images/projects/bank-app/bank-app-mobile-preview.png"
                        width="600"
                        height="367"
                        loading="lazy"
                        alt="Bank App Mobile Preview - App Development Project"
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
                      <h3 className="h3 card-title">Sadhana ERP</h3>
                      <p className="card-text">
                        Identified new business opportunities, improved operations,
                        and established key partnerships that support the company&apos;s
                        long-term growth. Built an integrated ERP platform for inventory,
                        production, purchasing, finance, HR, and multi-outlet operations.
                      </p>
                 
                    </div>
                    <figure className="card-banner" data-reveal="right">
                      <img
                        src="/assets/images/projects/sadhana/sadhana-pos-dashboard-mockup.png"
                        width="650"
                        height="370"
                        loading="lazy"
                        alt="Sadhana ERP Dashboard - Business Development Project"
                        className="w-100"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div
                    className="project-card project-card-4"
                    style={{ backgroundColor: '#f4f8ff' }}
                  >
                    <div className="card-content" data-reveal="left">
                      <p className="card-tag" style={{ color: '#2f7df6' }}>
                        POS System
                      </p>
                      <h3 className="h3 card-title">POS System</h3>
                      <p className="card-text">
                        Built a point-of-sale system for outlet operations,
                        including product categories, menu selection, order cart,
                        checkout flow, sales history, and stock availability to
                        support faster cashier transactions.
                      </p>
                      
                    </div>
                    <figure className="card-banner" data-reveal="right">
                      <img
                        src="/assets/images/projects/sadhana/sadhana-pos-order-menu-mockup.png"
                        width="620"
                        height="370"
                        loading="lazy"
                        alt="POS System - Order Menu Dashboard"
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
                  action="https://wa.me/6285182302209"
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
