import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (

      <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: 'url(%PUBLIC_URL%/images/cover_bg_3.jpg)'}} data-stellar-background-ratio="0.5">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t js-fullheight">
                <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                  <div className="profile-thumb" style={{background: 'url(images/user-3.jpg)'}} />
                  <h1><span>Jaywant Narwade </span></h1>
                  <h3><span>Web Designer / Developer </span></h3>
                  <p>
                  </p><ul className="fh5co-social-icons">
                    <li><a href="http://localhost:3000/"><i className="icon-twitter2" /></a></li>
                    <li><a href="http://localhost:3000/"><i className="icon-facebook2" /></a></li>
                    <li><a href="http://localhost:3000/"><i className="icon-linkedin2" /></a></li>
                  </ul>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      )
  }
}