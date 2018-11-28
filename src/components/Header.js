import React from 'react'
import PropTypes from 'prop-types'
import jason from '../images/jason.png'
//header <span className="icon fa-diamond"></span>
const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={jason} width="95.5%"/>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Jason Wong</h1>
                <p>Aspiring Full Stack Web Developer. Audio & Video Producer. <br />
                Hoping to create app solution for Music Tech Industry.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('experience')}}>Experiences</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('project')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
