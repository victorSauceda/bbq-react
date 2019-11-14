import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

class FormHandler extends React.Component {
  state = {
    username: "",
    feedback: "",
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = "victorasauceda@gmail.com";

  handleCancel() {
    this.setState({
      username: "",
      feedback: ""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.username,
      this.state.feedback
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, username, feedback) {
    window.emailjs
      .send("mailgun", templateId, {
        senderEmail,
        receiverEmail,
        username: username,
        text: feedback
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  }

  render() {
    const style = {
      marginTop: "45px"
    };
    return (
      <Form
        className="feedback-form"
        style={style}
        onSubmit={this.handleSubmit}
      >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="username"
            onChange={this.handleChange}
            required
            value={this.state.username}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="please note how we can be of assistance "
            name="feedback"
            onChange={this.handleChange}
            required
            value={this.state.feedback}
          />
        </Form.Group>
        <Button variant="primary" size="lg" block onClick={this.handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" value="Submit" size="lg" block>
          Submit
        </Button>
      </Form>
      // <div>
      //       <form className="feedback-form" onSubmit={this.handleSubmit}>
      //         <h1>Your Feedback</h1>
      //         <div>
      //           <input
      //             type="text"
      //             className="text-input"
      //             id="username"
      //             name="username"
      //             onChange={this.handleChange}
      //             placeholder="Enter email"
      //             required
      //             value={this.state.username}
      //           />
      //         </div>
      //         <textarea
      //           type="text"
      //           className="text-input"
      //           id="feedback-entry"
      //           name="feedback"
      //           onChange={this.handleChange}
      //           placeholder="Enter your feedback here"
      //           required
      //           value={this.state.feedback}
      //         />

      //         <div className="btn-group">
      //           <button className="btn btn--cancel" onClick={this.handleCancel}>
      //             Cancel
      //           </button>
      //           <input type="submit" value="Submit" className="btn btn--submit" />
      //         </div>
      //       </form>
      //     </div>
    );
  }
}

FormHandler.propTypes = {
  env: PropTypes.object.isRequired
};

export default FormHandler;
