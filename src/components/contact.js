import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
//import "./styles.css";

/**
 * @component Form
 * @props - { object } -  config
 */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: null
    };
  }
  /**
  * @function handleFormSubmit
  * @param e { obj } - form event
  * @return void
  */
  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
		  debugger;
		  console.log(result)
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };
  /**
    * @function handleChange
    * @param e { obj } - change event
    * @param field { string } - namve of the field
    * @return void
    */
  handleChange = (e, field) => {
    let value = e.target.value;
    let updateValue = {};
    updateValue[field] = value;
    this.setState(updateValue);
  };

  render() {
    const { title, successMessage, errorMessage, fieldsConfig } = this.props.config;
    return (
      <div className="App">
        <h2>{title}</h2>
        <div>
		<div className="choose animate-box">
          <form action="#">
            {fieldsConfig &&
              fieldsConfig.map(field => {
                return (
                  <React.Fragment key={field.id}>
                    {field.type !== "textarea" ? (
                      <React.Fragment>
					  
						<div className="row form-group">
						<div className="col-md-4">
                        <label>{field.label}</label>
						</div>
						<div className="col-md-4">
                        <input
                          type={field.type}
                          className={field.klassName}
                          placeholder={field.placeholder}
                          value={field.name}
                          onChange={e => this.handleChange(e, field.fieldName)}
                        />
						</div>
						</div>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
					  <div className="col-md-4">
                        <label>{field.label}</label>
						</div>
					<div className="col-md-4">
                        <textarea className={field.klassName} placeholder={field.placeholder} onChange={e => this.handleChange(e, field.fieldName)} value={field.name} />
					</div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
			  <div className="form-group col-md-6">
				<input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
			</div>
            <div>
              {this.state.mailSent && <div className="sucsess">{successMessage}</div>}
              {this.state.error && <div className="error">{errorMessage}</div>}
            </div>
          </form>
		  </div>
        </div>
      </div>
    );
  }
}

export default Form;
//propTypes for the component
Form.propTypes = {
  config: PropTypes.object.isRequired
};