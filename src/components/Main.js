import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import dice  from '../images/dice.jpg'
import rentstrument from '../images/rentstrument.jpg'
import ticsoundpage from '../images/ticsoundpage.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Experiences</h2>
          <span className="image main"><img src={pic01} alt="Experiences" /></span>
          <p><strong>Content Producer, Sole Proprietor - Shiinstudio,  Singapore</strong><br />June 2009 - August 2017<br/> Produced and Composed songs, radio commercial for TV stations, product and services. Produced motion graphics and music video for local music acts. Manage and execute design projects for magazines, retailers and F & B.</p>
          <p><strong>Senior Designer - Pinpress Pte Ltd, Singapore</strong><br />May 2008 - April 2009<br/>Manage and execute design projects from design conceptualisation to liaising with supplier and client, quality control the print production and completion of projects.</p>
          <p><strong>Senior Graphic Designer - Artnexus Design</strong><br/>May 2007 - April  2008<br/>Conceptualising and execute design for corporate identity, Branding, annual reports, design. Liaising with suppliers and printers to make sure the product is well delivered.</p>
          <p><strong>Freelance Designer - Lancer Media, Pure Design and Wordsworth</strong><br/>2006 - 2007<br/>Freelancer to varies design firm. Designing corporate identity, annual reports and other design collaterals. </p>
          <p><strong>Senior Graphic Designer - NTUC Media</strong><br/>2001 - 2007<br/>Manage a team of 4 designer, to oversees the quality of design and completion of other publications and Ad Hoc projects  that assigned to them. Communicate with Union leaders, Editors, Journalist, sales team to get design briefs, conceptualise ideas for their campaigns.</p>
          <p><strong>Graphic Designer - Design Objectives</strong><br/>1999 - 2000<br/>Conceptualise and execute design solutions for hotels, serivces and corporate companies</p>
          <p><strong>Graphic Designer - WheelsAsia</strong><br/>1998 - 1999<br/>First job in a monthly car magazine publishing firm</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'project' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic02} alt="Projects" /></span>
          <h3>Dice Game</h3>
          <img src={dice} width="50%"/ >
          <p>First project using HTML Javascript CSS.It a dice throwing game, whoever the number is greater wins.<br/><strong>GitHub:</strong> <a href="https://github.com/ah5ive/dice-game" target="blank">https://github.com/ah5ive/dice-game</a>
          <br/><strong>Link: </strong><a href="https://ah5ive.github.io/dice-game/" target="blank">https://ah5ive.github.io/dice-game/</a></p>
          <h3>Rentstrument</h3>
          <img src={rentstrument} width="40%"/>
          <p>A web app for musicians and event organiser to rent pro audio equipments and instruments for their needs. (HTML, CSS3, Javascript, Node.js, Express.js, PostgreSQL and React views.)<br/> <strong>GitHub: </strong><a href="https://github.com/ah5ive/rentstrument" target="blank">https://github.com/ah5ive/rentstrument</a><br/><strong>Link:</strong> <a href="https://rentstrument.herokuapp.com" target="blank">https://rentstrument.herokuapp.com</a></p>
          <h3>Ticsound</h3>
          <img src={ticsoundpage} width="80%"/>
          <p>A web app for user to receive information for music events that is happening within it’s radius of current location and time. The app also allows user to create and update event on the app. (HTML, CSS3, Javascript, Ruby on Rails and PostgreSQL.)<br/><strong>GitHub:</strong> <a href="https://github.com/ah5ive/ticsound" target="blank">https://github.com/ah5ive/ticsound</a><br/><strong>Link:</strong> <a href="https://ticsound.herokuapp.com" target="blank">https://ticsound.herokuapp.com</a></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="About Me" /></span>
          <p>Graduated from General Assembly 12 Week Full time Web Development Immersive course.
             Gaining knowledge in HTML, CSS3, Javascript, Node.js, Express.js, React.js, PostgreSQL and Ruby on Rails. 20 years experience in the creative industry,  making a difference as a Front-End Web Developer.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form name="contact" method="post" action="/success" netlify-honeypot="bot-field" netlify>
                <input type="hidden" name="bot-field" />
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
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/jasonfei" className="icon fa-linkedin"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/ah5ive" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main