import Link from "next/link";
import schedule from '../styles/schedule.module.css';

function MainPage() {
  return (
    <body>
      <section id="section-hero">
        <div className="hero-container">
          <img src="/img/pixel_2024_crescent.png" className="hero-img"/>
          <h1 className="hero-title">HORIZONS</h1>
          <div className="hero-subtitle">
            <strong>
            <h3>Georgia Tech</h3>
            <h3>Instructional Center</h3>
            <h3>March 9th-10th</h3>
            </strong>
           
          </div>
          <a className="hero-button" href="https://registration.hexlabs.org/">Register Here</a>
        </div>
      </section>

      

      <section id="section-about">
        <div className="about-container">
          <h2 className ="about-title"><img className="img-title" src="/img/pixel_about_stars.png" /></h2>
          <p>
          HexLabs is excited to welcome you back to 🌠 Horizons: the 24-hour design + tech make-a-thon!  On March 9 and 10th, all designers, coders, entrepreneurs, artists, and innovators of any major are invited to light up the Instructional Center with their brilliant ideas for a two-day, celestial-themed event! 🌌🌃

Come join us to express your creativity and craft stellar design-tech projects while attending workshops and mini-events, securing free food and swag, and basking under the glow of innovation. 🌠✨ At the journey's end, we'll host an expo where you can display your cosmic creation and submit it to one of our tracks (listed below) to win a grand prize that's out of this world!! 🌟🏆

Embrace the night sky's wonders and let your imagination soar like a comet across the universe. 🌙💫 Whether you're inspired by the analytical rigor of engineering 🔧, the creative narratives of the arts 🎨, or the insightful inquiries of the sciences 🔬, there's a place for you here. Don't miss this opportunity to connect with fellow space explorers from diverse academic disciplines and launch your ideas into orbit. 🪁

Prepare for a celestial odyssey of creativity and discovery. Let's reach for the stars together! 💙💛💜
          </p>
        </div>
      </section>

      <section id="section-registration">
        <div className="registration-flex">
          <div className="registration-container">
            <h2><img className="img-title" src="/img/pixel_track_stars.png" /></h2>
            <div className="star-group">
              <img src="/img/pixel_track_star_group.png" height="50px"/>
              <h3>PHYSICAL</h3>
            </div>
            <p className="descrip">
              Join this track to create tangible artistic projects, ranging from
              paintings and sculptures to fashion items and wearable tech. In the
              Physical Track, participants can have a very hands-on experience by
              designing and making unique pieces of art in any physical form!
            </p>
            <div className="star-group">
              <img src="/img/pixel_track_star_group.png" height="50px"/>
              <h3>DIGITAL</h3>
            </div>
            <p className="descrip">
              Enter the digital track if you are interested in projects that allow
              users to interact with diverse forms of art through any type of
              digital interface! Whether you are constructing an algorithm to
              create colorful generative art, designing a streaming service to
              revolutionize our experience of listening to music, developing the
              next big video game, or in any way involving yourself in the process
              of building and displaying artistic creations via digital means,
              this track is for you!
            </p>
          <div className="star-group">
              <img src="/img/pixel_track_star_group.png" height="50px"/>
              <h3>EDUCATION</h3>
          </div>
          <p className="descrip">Revolutionize learning with creative solutions that make education 
          more diverse and accessible. Use art, code, or other technologies to build inclusive learning
          environments tailored for diverse learners and communities.</p>

          <div className="star-group">
              <img src="/img/pixel_track_star_group.png" height="50px"/>
              <h3>MUSIC TECH</h3>
          </div>
          <p className="descrip">Develop a music technology project that fosters collaboration,
          utilizing immersive experiences, leveraging data-driven insights, personalizing user experiences,
          and engaging audiences in entirely new ways.
          </p>

          <div className="star-group">
              <img src="/img/pixel_track_star_group.png" height="50px"/>
              <h3>MIXED REALITY</h3>
          </div>
          <p className="descrip">Harness the power of mixed reality technologies to redefine how 
          we interact with the world around us. Blend the digital with the physical to create 
          rich experiences that not only entertain but also educate, empower, and enrich lives.
          This challenge beckons innovators to craft immersive environments, interactive narratives, 
          and transformative applications that captivate and inpsire.</p>
          </div>

        </div>
        <div className ="registration-container2">
          <p>
            Registration is FREE and opens on Friday, February 16th at horizons.hexlabs.org and closes on Friday, March 1st
          </p>
          <a href="https://registration.hexlabs.org/">Register Here</a>
        </div>
      </section>

      <section id="section-schedule">
        <div className= {schedule['schedule-container']}>
          <h3 className={schedule['schedule-title']}><img className="img-title" src="/img/pixel_schedule_stars.png" alt="Schedule Stars"/></h3>
          <table className={schedule['schedule-table']}>
            <thead>
              <tr>
                <th>Event</th>
                <th>Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
            <tr className={schedule['schedule-day-header']}>
                <td colSpan="3">Saturday Schedule</td>
              </tr>
              <tr>
                <td>Check In</td>
                <td>10:00 AM - 11:00 AM</td>
                <td>IC Lobby</td>
              </tr>
              <tr>
                <td>Opening Ceremony</td>
                <td>11:00 AM - 11:30 AM</td>
                <td>IC 103</td>
              </tr>
              <tr>
                <td>Hacking Starts</td>
                <td>11:30 AM</td>
                <td>IC 205, 209, 211, 215</td>
              </tr>
              <tr>
                <td>Lunch</td>
                <td>12:30 PM - 1:15 PM</td>
                <td>IC 105</td>
              </tr>
              <tr>
                <td>Hive Makerspace</td>
                <td>11:00 AM - 4:00 PM</td>
                <td>The Hive (Van Leer)</td>
              </tr>
              <tr>
                <td>Mill Makerspace</td>
                <td>4:00 PM - 9:00 PM</td>
                <td>The Mill (J. Erskine Love Jr. Manufacturing Building)</td>
              </tr>

              <tr>
                <td>GT Gourd Workshop</td>
                <td>2:00 PM - 3:00 PM</td>
                <td>IC 115</td>
              </tr>
              <tr>
                <td>Figma Workshop</td>
                <td>3:00 PM - 4:00 PM</td>
                <td>IC 111</td>
              </tr>
              <tr>
                <td>Tote Bag Painting Mini Event</td>
                <td>4:00 PM - 5:00 PM</td>
                <td>IC 115</td>
              </tr>
              <tr>
                <td>Guthman Fair</td>
                <td>4:00 PM - 6:30 PM</td>
                <td>Exhibition Hall</td>
              </tr>
              <tr>
                <td>Origami Mini Event</td>
                <td>5:00 PM - 6:00 PM</td>
                <td>IC 111</td>
              </tr>
              <tr>
                <td>Startup Exchange Workshop</td>
                <td>6:00 PM - 7:00 PM</td>
                <td>IC 115</td>
              </tr>
              <tr>
                <td>Karaoke Mini Event</td>
                <td>7:00 PM - 8:00 PM</td>
                <td>IC 111</td>
              </tr>
              
              <tr>
                <td>Dinner</td>
                <td>6:00 PM - 6:45 PM</td>
                <td>IC 105</td>
              </tr>
              <tr>
                <td>Swag Distribution</td>
                <td>7:00 PM - 7:45 PM</td>
                <td>IC Lobby</td>
              </tr>
              <tr>
                <td>Guthman Concert</td>
                <td>7:00 PM - 9:00 PM</td>
                <td>Ferst Center</td>
              </tr>
              <tr>
                <td>Midnight Snacks</td>
                <td>11:30 PM - 12:15 AM</td>
                <td>IC 105</td>
              </tr>

              <tr className={schedule['schedule-day-header']}>
                <td colSpan="3">Sunday Schedule</td>
              </tr>
              <tr>
                <td>Brunch</td>
                <td>11:00 PM - 11:30 PM</td>
                <td>IC 105</td>
              </tr>
              <tr>
                <td>Expo/Judging</td>
                <td>11:30 PM - 12:30 PM</td>
                <td>IC 111 & 115</td>
              </tr>
              <tr>
                <td>Closing Ceremony</td>
                <td>1:00 PM - 1:30 PM</td>
                <td>IC 103</td>
              </tr>
              <tr>
                <td>Prize Distribution</td>
                <td>1:00 PM - 2:00 PM</td>
                <td>Help Desk</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      <section id="section-judging">
        <div class="judging-star-group">
          <img src="/img/pixel_track_star_group.png" height="60px" border="solid black"/>
          <h2 className="judging-title" border="solid black">JUDGING & EXPO</h2>
          <img src="/img/pixel_track_star_group.png" height="60px" border="solid black"/>
        </div>

        <h4>SCHEDULE</h4>
        <p>
          Submissions will be open from Saturday, <strong>March 9th @ 11:00 PM</strong> and will close on 
          Sunday, <strong>March 10th @ 11:00 AM</strong>.<br/>
          Judging will take place from 11:30 AM - 12:30 PM on Sunday.
        </p>

        <h4>SUBMISSION PROCESS</h4>
        <p>
        Please follow these steps to submit your project:
          <ol>
            <li>Post your project on <a href="https://horizons-2024.devpost.com/">Devpost</a>, make sure to include the following in your submission:</li>
          </ol>
            <ul>
              <li>
                A video demoing your project (no more than 2 minutes in length).
                Treat it like a demo you would give to a judge if it were in person
              </li>
              <li>A brief description of your project</li>
              <li>Links to your Github repository or other documentation</li>
            </ul>
          <ol start={2}>
            <li>
              Next, submit your project and Devpost link to <a href="https://expo.hexlabs.org/">Expo</a>.
            </li>
          </ol>
        </p>
        
        <h4>QUESTIONS ??</h4>
        <p>
          For any problems with submissions, please visit help desk <strong>BEFORE</strong> the submission deadline 
          and our team will help you out!!
        </p>
      </section>

        <section id="section-faq">
          <h2 className ="faq-title"><img className="img-title" src="/img/pixel_faq_stars.png" /></h2>

          <p>
            <strong>
              So I've heard of a hackathon, but what's a make-a-thon?
            </strong>
          </p>
          <p>
            A make-a-thon is a creativity-driven event where teams make their
            ideas into reality with resources, materials, and support from
            HexLabs!
          </p>

          <p>
            <strong>Can I attend?</strong>
          </p>
          <p>
            Anyone who is a Georgia Tech student, or is 18 and above at any
            Georgia university can attend! With beginner-friendly workshops, fun
            and relaxing mini-events and great vibes, students from any background
            can come and enjoy!
          </p>

          <p>
            <strong>How much will this cost?</strong>
          </p>
          <p>
            Horizons is completely free! We will provide the food, swag, and
            resources you need so you can focus on your most awesome creation.
          </p>

          <p><strong>Where can I register?</strong></p>
                  <p>
                  Registration is <a href="https://registration.hexlabs.org/">open</a> and will close for
                  participants on Friday, March 1 2024 at 11:59pm
                  </p>
          <p>
            <strong>What should I bring?</strong>
          </p>
          <p>
            We request that you bring yourself, your laptop, and your student ID!
            If you are not a Georgia Tech student you will also need to bring a
            government ID. Feel free to bring anything else (art
            supplies, tools, etc...) that you think would be helpful.
          </p>

          <p>
            <strong>Where is Horizons?</strong>
          </p>
          <p>
            We'll be waiting for you at the Instructional Center, aka,
            <a href="https://www.google.com/maps/place/Instructional+Center/@33.7754478,-84.4012498,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5048ea3eb8fa1:0x3e4111b0dbacc6a6!8m2!3d33.7754478!4d-84.4012498!16s%2Fg%2F11c1n7f4t3?entry=ttu">
              759 Ferst Dr. NW, Atlanta, GA 30318
            </a>
          </p>

          <p>
            <strong>Will there be any makerspaces open during the event?</strong>
          </p>
          <p>
            We are currently in discussions of partnering with The Hive and the
            Invention Studio to offer spaces, tools, and mentorship during the
            event...
          </p>

          <p>
            <strong>How long is the event?</strong>
          </p>
          <p>
            Two days! Day 1 (Saturday March 9) will start at 10am;
            Day 2 (Sunday, March 10) will finish at 1:30pm.
          </p>

          <p>
            <strong>What resources will be there?</strong>
          </p>
          <p>
            We'll be providing lots of arts supplies, hardware, and other cool
            supplies. A full list of available supplies and services is coming
            soon. Feel free to tell us what you want to see at the event in your
            application.
          </p>

          <p>
            <strong>What size can teams be?</strong>
          </p>
          <p>
            The team can be up to 4 people in size! Let your friends know to
            register ASAP.
          </p>

          <p>
            <strong>My friends are out of town! How do I find a team?</strong>
          </p>
          <p>
            We will have a mixer at the start of the event to help you find a
            team, but if you prefer going solo, we’re here by your side too!
          </p>

          <p>
            <strong>Do you accept walk-ins?</strong>
          </p>
          <p>
          We're accepting a certain number of walk-in participants. 
          Just make sure to show up early to register at the door as spots will fill up quickly! 
          Walk-ins won't be eligible for the giveaway, but there's plenty of other opportunities 
          to win cool prizes and merch! Additionally, depending on numbers, food and swag may not 
          be guarenteed.
          </p>

        <p>
          <strong>Any other questions?</strong>
        </p>
        <p>
          Email us at{" "}
          <a href="mailto:hello@hexlabs.org">hello@hexlabs.org 💜</a>.
        </p>
      </section>
      <section id="section-express">
        <div className="express-container">
          <h1>express yourself!</h1>
          <div className="express-container-paragraph">
            <div>
              <p>
                Horizons is a celebration of the incredible intersection between
                art and technology. It is a platform for people to express
                themselves through art while using technology or engineering to
                augment its impact.
              </p>
              <p>
                Moreso, art and technology come together as avenues for people
                to share their ideas. To share their findings. To share their
                feelings. To express themselves.
              </p>
              <p>At Horizons, we challenge you to do just that!</p>
            </div>
          </div>
        </div>
        <div className="express-container-quote">
          <div>
            <img src="img/pixel_hexlabs_constellation_2.png" height="300px" />
            <img src="img/pixel_dino.png" />
            <p>
              “The art challenges the technology, and the technology inspires
              the art.”
            </p>
            <p>- John Lasseter</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-text">
          <p className="footer-1">
            <strong>We can't wait to see you expand your horizons 🌄😉!</strong>
          </p>
          <p className="footer-2">With 💜 from the HexLabs team</p>
        </div>

            <div className="icon-container">
              <a href="https://www.instagram.com/thehexlabs/">
                <img src="/icon/insta.svg" />
              </a>
              <a href="https://www.facebook.com/TheHexLabs">
                <img src="/icon/fb.svg" />
              </a>
              <a href="https://twitter.com/TheHexLabs">
                <img src="/icon/twitter.svg" />
              </a>
              <a href="https://github.com/HackGT">
                <img src="/icon/github.svg" />
              </a>
              <a href="https://hexlabs.org/">
                <img src="/icon/web.svg" />
              </a>
            </div>
          </footer>
    </body>
  );
}

export default MainPage;
