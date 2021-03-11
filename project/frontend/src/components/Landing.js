import React, {Component} from 'react'
import ModalLogin from "./ModalLogin";
import ImgTagline from '../assets/image/purpose.jpg'
import Prl1 from '../assets/image/parallax1.png'
import Vid1 from '../assets/image/Wonderful_Indonesia.mp4'


class Landing extends Component {


  render() {
    return (
      <div>
        <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-content">
              <h3>EMMA</h3>
              <h1>Focus on the work that matters</h1>
              <p>Dropbox is the world’s first smart workspace. We bring all your team’s content together
              while letting you use the tools you love. And we help cut through the clutter,
              surfacing what matters most.</p>
            </div>
            <div className="col-md-6">
              {/* Something image */}
            </div>
          </div>
        </div>
        </div> {/* close hero section */}

        <div className="tagline">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src={ImgTagline} className="img-box" alt="emma-tagline" />
            </div>
            <div className="col-md-4 tagline-content align-self-center">
              <h2>Say goodbye to busywork</h2>
              <p>Most “productivity” tools get in your way and constantly disrupt your flow.
              There’s a more enlightened way to work. Dropbox helps people be organized, stay focused,
              and get in sync with their teams.</p>
            </div>
          </div>
        </div>
        </div> {/* close tagline section */}

        <div className="videoBackground">
          <div>
            <video autoPlay muted loop playsInline id="myVideo">
              <source src={Vid1} type="video/mp4" />
            </video>
          </div>
          <div className="btn">
            <a href="#" className="btn-gathering">Our Gathering</a>
            <a href="#" className="btn-exp">New Experience</a>
          </div>
        </div> {/* close Video Background section */}

        <div className="feature">
        <div className="container">
          <div className="row feature-title">
            <div className="col-md-6">
              <h1>File storage and sharing
              are just the beginning</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="feat-content">
                <h2>Be organized</h2>
                <p>Bring traditional files, cloud content, Dropbox Paper docs,
                and web shortcuts together in one place—and work the way that works for you.</p>
              </div>
              <div className="feat-content">
                <h2>Stay focused</h2>
                <p>Personalized suggestions give you files and folders when you need them
                so you spend less time searching.</p>
              </div>
              <div className="feat-content">
                <h2>Get in sync</h2>
                <p>Coordinate with your team and push projects forward
                with the tools you use every day—all within Dropbox.</p>
              </div>
            </div>
            <div className="col-md-8">
              <img src={Prl1} className="img-box" alt="emma-tagline" />
            </div>
          </div>
        </div>
        </div> {/* close feature section */}

        <div className="benefits" id="benefits-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 title-benefits">
              <h1>Learn more about the benefits of EMMA</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="bnf-title">
                <h2>Centralize team and content</h2>
              </div>
              <div className="bnf-content">
                <p>Create, store, and share cloud content from Google Docs, Sheets,
                and Slides, Microsoft Office files, and Dropbox Paper alongside traditional files in Dropbox.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bnf-title">
                <h2>Team collaboration, any time, anywhere</h2>
              </div>
              <div className="bnf-content">
                <p>Easily access your team’s work from your computer, mobile device, or any web browser.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bnf-title">
                <h2>Find anything what you need fast</h2>
              </div>
              <div className="bnf-content">
                <p>Intelligently suggested files and folders keep your team one step
                ahead by giving everyone the content they need, when they need it.</p>
              </div>
            </div>
          </div>
        </div>
        </div>  {/* close benefits section */}


        <div className="trial">
        <div className="container">
          <div className="row trial-content">
            <div className="md-col-8">
              <h1>Bring the smart workspace to your business</h1>
            </div>
            <div className="md-col-4 mx-auto my-auto">
              <button className="btn btn-trial">Start Free</button>
            </div>
          </div>
        </div>
        </div>{/* close trial section */}

        <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h3>EMMA</h3>
              <ul>
                <li>Desktop app</li>
                <li>Mobile apps</li>
                <li>Plans</li>
                <li>Security</li>
                <li>Features</li>
              </ul>
            </div>
            <div className="col-md">
              <h3>Products</h3>
              <ul>
                <li>Plus</li>
                <li>Professional</li>
                <li>Business</li>
                <li>Enterprise</li>
              </ul>
            </div>
            <div className="col-md">
              <h3>Company</h3>
              <ul>
                <li>About us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Investor relations</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="col-md">
              <h3>Support</h3>
              <ul>
                <li>Help center</li>
                <li>Contact us</li>
                <li>Cookies</li>
                <li>Privacy & terms</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="col-md">
              <h3>Community</h3>
              <ul>
                <li>Developers</li>
                <li>Referrals</li>
                <li>Forum</li>
              </ul>
            </div>
          </div>
        </div>
        </div>{/* close main footer section */}

        <div className="footer">
        <div className="container">
          <hr />
          <p>Copyright © 2020 emma-project
          </p>
        </div>
        </div>
      </div>
    )
  }

}


export default Landing
