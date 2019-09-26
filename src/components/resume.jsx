import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
		<div>
			<div id="fh5co-resume" className="fh5co-bg-color">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>My Resume</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <ul className="timeline">
                <li className="timeline-heading text-center animate-box">
                  <div><h3>Work Experience</h3></div>
                </li>
                <li className="animate-box timeline-unverted">
                  <div className="timeline-badge"><i className="icon-suitcase" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Technology Lead</h3>
                      <span className="company">Infosys,  Apr 2019 - Jun 2019</span>
                    </div> 
                  </div>
                </li>
               
				 <li className="timeline-inverted animate-box">
                  <div className="timeline-badge"><i className="icon-suitcase" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Web Developer</h3>
						 <span className="company">Technopia IT Solutions,   Jan 2017 - Nov 2018</span>
                    </div>
                     
                  </div>
                </li>
				<li className="animate-box timeline-unverted">
                  <div className="timeline-badge"><i className="icon-suitcase" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">IT Analyst</h3>
                      <span className="company">Tata Consultancy Services Ltd,  - Oct 2014 - Dec 2016</span>
                    </div> 
                  </div>
                </li> 
				 <li className="timeline-inverted animate-box">
                  <div className="timeline-badge"><i className="icon-suitcase" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Web Developer</h3>
						<span className="company">Techguys247 IT Solutions,  Jan 2014 - Sep 2014</span>
                    </div>
                     
                  </div>
                </li>
                <li className="animate-box timeline-unverted">
                  <div className="timeline-badge"><i className="icon-suitcase" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Web Developer</h3>
                      <span className="company">Infort Technology Pvt. Ltd  2012 - 2013</span>
                    </div> 
                  </div>
                </li>
                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge"><i className="icon-suitcase" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Web Developer</h3>
                      <span className="company">Trident Web Infoservices  - 2011 - 2012</span>
                    </div>
                     
                  </div>
                </li>
                <li className="animate-box timeline-unverted">
                  <div className="timeline-badge"><i className="icon-suitcase" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Jr Web Developer</h3>
                      <span className="company">WhiteShow SOftware - 2011 - 2011</span>
                    </div>                     
                  </div>
                </li>
                <br />
                <li className="timeline-heading text-center animate-box">
                  <div><h3>Education</h3></div>
                </li>
                <li className="animate-box timeline-unverted">
                  <div className="timeline-badge"><i className="icon-graduation-cap" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Bachelors Degree</h3>
                      <span className="company">S R T M U Nanded India - 2006 - 2010</span>
                    </div>
                    <div className="timeline-body">
                      <p> Computer science Engineering .</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge"><i className="icon-graduation-cap" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Higher Secondary School</h3>
                      <span className="company"> 2004 - 2006</span>
                    </div>
                    
                  </div>
                </li>
				 
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
		</div>
	
	)
	}
}	