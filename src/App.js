import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Skill from './components/skill';
import Services from './components/services';
import Footer from './components/footer';

function App() {
  return (
    <div>
	<div class="fh5co-loader"></div>
      <div id="page">	
		  <Header></Header>
		  <About></About>
		  <Resume></Resume>
		  <Services></Services>
		  <Skill></Skill>
		  <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
