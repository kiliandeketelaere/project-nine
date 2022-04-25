import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Perfomance Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conversion Rate Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User flow Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Readability from any device</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accessibility</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full understanding and mastery of html5</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full understandingand mastery of css3</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>well equiped with Gridbox and Flexbox skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Well equiped with media queries and mobile responsive first mindset.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>No repeating code and Sass</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Javascript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bootstrap and React</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO optimized content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Keyword-Focused content creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content conversion optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Call To Action Focused</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Subtile animations to make content more attractive</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services