import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Skill from './components/skill';
import Services from './components/services';
import Footer from './components/footer';
import ContactForm from '../src/components/contact';

/**
 * @config prepareing config prop.
 * api: url for the server endpoint
 * title: form title
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fields: this is the name of each field. This should be exact order of the fieldsConfig and fieldsConfig.fieldName should be  the same
 * fieldsConfig = settings for each input/textarea field
 */
const config = {
  api: `${process.env.REACT_APP_API}`,
  title: 'Contact Me',
  successMessage: 'Thank you for contcting me.',
  errorMessage: 'Sorry we have some problems.',
  fields:{
    firstName: '',
    lastName: '',
    email: '',
    msg: ''
  },
  fieldsConfig:  [
   { id: 1, label: 'First Name', fieldName: 'firstName', type: 'text',placeholder:'Your First Name', isRequired: true , klassName:'form-control'},
   { id: 2, label: 'Last Name', fieldName: 'lastName', type: 'text', placeholder: 'Your Last Name', isRequired: true , klassName:'form-control'},
   { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , klassName:'form-control'},
   { id: 4, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'Write something.....', isRequired: true , klassName:'form-control'}
  ]
}

function App() {
  return (
    <div>
	<div className="fh5co-loader"></div>
      <div id="page">	
		  <Header></Header>
		  <About></About>
		  <Resume></Resume>
		  <Services></Services>
		  <Skill></Skill>
			<ContactForm config={config}></ContactForm>
		  <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
