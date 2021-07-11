import PropTypes from 'prop-types';
import React from 'react';
import intro from '../images/intro.jpg';
import about from '../images/about.jpg';
import pawakan from '../images/pawakan.jpg';
import ifugao from '../images/ifugao.jpg';
import study from '../images/study.jpg';
import work from '../images/work.jpg';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={intro} alt="" />
          </span>
          <p>
            Hello! This is my first ever made website, utilizing Gatsby - a
            dynamic web development JavaScript wrapper. I initially wanted to
            create a website using JavaScript or at least some framework of it
            like Node.js. I discovered Gatsby and I was really impressed with it
            entirely. With that being said, I explore several different
            frameworks and various APIs to create my projects so please feel
            free to check out{' '}
            <a
              className="open-work"
              onClick={() => {
                this.props.onCloseArticle();
                this.props.onOpenArticle('work');
              }}
              target="_self"
            >
              my work
            </a>
            .
          </p>
          <p>
            This website couldn't have been made without:
            <ul>
              <li>JavaScript</li>
              <li>Gatsby</li>
              <li>Heroku</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={about} alt="" />
          </span>
          <p>
            I am Robert Macaibay [full name: Robert Arnold Tacderan Macaibay]. I
            am a second-generation Filipino-American, first-generation college
            graduate from the University of San Francisco with a B.S. in
            Computer Science and a Minor in Music. I am currently 23 at the time
            of writing this, and I swear I am at least 5'6".
          </p>
          <p>
            My identity as a Filipino-American is a central piece to who I am,
            and my work is not only for myself but also my ancestors and my
            people. I love my heritage so much that I've been a part of two
            Pilipino Cultural Night (PCN) ensembles, where I've come to embrace
            my body and the color of skin through dance and acting. From my
            experiences on the stage to the classroom, I hope I can bring my
            cultural influence to my next chapter in life and use my work as a
            platform to voice my people's history and struggles. [Pictured below
            is a dance I performed back in 2019 called Pawakan; Pictured below
            that is of me in a chieftain's Ifugao wear].
          </p>
          <span className="image sub">
            <img src={pawakan} alt="" />
          </span>
          <span className="image sub">
            <img src={ifugao} alt="" />
          </span>
          <p>
            I heavily identify as an avid gamer. It's an incredibly nerdy side
            of me, but I believe that video games has impacted me in more ways
            than I can count. I love the competitive side of me that comes out
            whenever I play League of Legends or Valorant; however, I find joy
            whenever the 'social gamer' me steps up in whenever I play Just
            Dance or Don't Starve Together.
          </p>
          <p>
            Finally, I am a music connoisseur - no really, look I have a minor
            in Music! I love all sorts of music that my playlists might sound
            like chaos to some. I used to perform in a Concert Band and a
            Marching Band, playing Euphonium/Baritone and Valve Trombone. I am
            in a long-term, committed relationship with K-POP, where I could
            probably teach a college course for two credits on K-POP.
            <br />
            [Please stream{' '}
            <a href="https://www.youtube.com/watch?v=_X3r09dgbQg">
              ASAP by STAYC!
            </a>
            ].
          </p>
          <p>
            I have many other hobbies and interests that I imagine people must
            be curious about, but I don't want to fill this page with too much
            information on me. All I can say is simply hit me up and I'll be
            more than down to chat. Or better yet for all you recruiters, hire
            me and I'll be more than likely to bring the team energy up or get
            them all into building mechanical keyboards (for the sweet, sweet
            improved WPM of course).
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={work} alt="" />
          </span>
          <h3>
            <a href="https://www.missionbit.org/">Mission Bit</a>
            <span className="work">08/2019 - 01/2021</span>
          </h3>
          <h4 className="work">Instructor's Assistant</h4>
          <p>
            Taught a class of underrepresented students how to program in C#,
            HTML, CSS, and JavaScript, introduced students to video game
            development and web developement, and helped students produce
            projects to present to industry professionals.
          </p>
          <span className="skills">
            <span className="skill study">C#</span>
            <span className="skill study">HTML</span>
            <span className="skill study">CSS</span>
            <span className="skill study">JavaScript</span>
            <span className="skill prof">Tutoring</span>
            <span className="skill prof">Teamwork</span>
          </span>
          <h3 className="work">
            <a href="https://www.showwcase.com/">Showwcase</a>
            <span className="work">01/2020 - 05/2020</span>
          </h3>
          <h4 className="work">Student Intern</h4>
          <p>
            Assigned as backend programmer with three other team members for
            Senior Teamwork Project, worked on Clearbit integration and
            ElasticSearch functionality, and presented progress on the platform
            in a CS Project Fair.
          </p>
          <span className="skills">
            <span className="skill study">React</span>
            <span className="skill study">TypeScript</span>
            <span className="skill study">MySQL</span>
            <span className="skill other">AWS</span>
            <span className="skill other">Clearbit</span>
            <span className="skill other">ElasticSearch</span>
            <span className="skill prof">Teamwork</span>
            <span className="skill prof">Backend Development</span>
            <span className="skill prof">Time Management</span>
            <span className="skill prof">Design</span>
            <span className="skill prof">Database</span>
          </span>
          <h3 className="work">
            <a href="http://designvibe.com/">DesignVibe Media</a>
            <span className="work">06/2015 - 08/2016</span>
          </h3>
          <h4 className="work">Web Intern</h4>
          <p>
            Trained under professional graphic designers and web designers,
            assisted on small projects and assignments pertaining to web
            development, and focused on organization of infomation on websites.
          </p>
          <span className="skills">
            <span className="skill study">HTML</span>
            <span className="skill study">CSS</span>
            <span className="skill prof">Web Development</span>
          </span>
          {close}
        </article>

        <article
          id="study"
          className={`${this.props.article === 'study' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Study</h2>
          <span className="image main">
            <img src={study} alt="" />
          </span>
          <h3>University of San Francisco | May 2020</h3>
          <h3>B.S. in Computer Science, Minor in Music</h3>
          <h4 className="skills">
            <u>Courses</u>
          </h4>
          <span className="skills">
            <span className="skill study">Intro to CS II</span>
            <span className="skill study">Software Development</span>
            <span className="skill study">Data Structures & Algorithms</span>
            <span className="skill study">Computer Architecture</span>
            <span className="skill study">Intro to Parallel Computing</span>
            <span className="skill study">UX/UI Design</span>
            <span className="skill study">Operating Systems</span>
            <span className="skill study">
              Programming Languages & Paradigms
            </span>
            <span className="skill study">Senior Team Project</span>
          </span>
          <h4 className="skills">
            <u>Extracurriculars</u>
          </h4>
          <span className="skills">
            <span className="skill extra">
              <a
                href="https://usfkasamahan.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Kasamahan - Director of Membership
              </a>
            </span>
            <span className="skill extra">
              <a
                href="https://usfdonsband.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                USF Dons Band - Manager
              </a>
            </span>
          </span>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={study} alt="" />
          </span>
          <p>
            Listed below are my current projects. All my other personal projects
            and school projects can be found on my{' '}
            <a href="https://github.com/rtmacaibay">Github</a>.
          </p>
          <h3>
            <a href="https://github.com/rtmacaibay/yummybot">Discord Bot</a>
            <span className="work">03/2020 - Present</span>
          </h3>
          <p>
            Created Discord bot for a personal Discord server to simplify
            different activities. Nicknamed bot "Yummy Bot" as an inside joke
            within my servers. Implemented several creative and humorous
            commands as well as useful functionality. Bot previously had YouTube
            playback and <i>"Animal Crossing: New Horizons"</i> commands but
            were deprecated for different reasons.
          </p>
          <span className="skills">
            <span className="skill study">JavaScript</span>
            <span className="skill other">
              <a href="http://acnhapi.com/">ACNH API</a>
            </span>
            <span className="skill other">
              <a href="https://discord.js.org/#/">Discord.js</a>
            </span>
            <span className="skill other">
              <a href="https://developers.google.com/youtube/v3">YouTube API</a>
            </span>
            <span className="skill other">Heroku</span>
            <span className="skill other">
              <a href="https://bonsai.io/">ElasticSearch</a>
            </span>
            <span className="skill other">GitHub</span>
          </span>
          <h3 className="work">
            <a href="https://www.macaibay.com/">Personal Website</a>
            <span className="work">05/2020 - Present</span>
          </h3>
          <p>
            Created a personal website using a React-based wrapper, Gatsby. Just
            wanted something that looked good and felt smooth. You're also
            looking at the very same website.
          </p>
          <span className="skills">
            <span className="skill study">Gatsby</span>
            <span className="skill study">React</span>
            <span className="skill study">HTML</span>
            <span className="skill study">CSS</span>
            <span className="skill study">SCSS</span>
            <span className="skill other">Heroku</span>
            <span className="skill other">GitHub</span>
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            method="post"
            action="https://getform.io/f/9f5790ee-dd77-4310-a8f7-83ed50e714c6"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="mailto:robert@macaibay.com"
                className="icon fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/macaibay/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rtmacaibay"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/macaibae/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onOpenArticle: PropTypes.func,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
