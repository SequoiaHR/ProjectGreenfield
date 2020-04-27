import React from 'react';
import axios from 'axios';
const URL = '18.224.200.47';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      requiredQuestion: false,
      requiredNickname: false,
      requiredEmail: false,
      validEmail: false,
    };
    this.onChange = this.onChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.checkEmailValidity = this.checkEmailValidity.bind(this);
  }

  //STORES FORM INPUTS
  onChange(event) {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({ [field]: value });
  }

  checkEmailValidity(email) {
    // eslint-disable-next-line
    let regex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    return regex.test(email);
  }

  //CHECKS FEILD REQUIREMENTS AND TRIGGERS WARNING IF NEEDED ELSE SENDS POST REQUEST
  submitAnswer(event) {
    if (this.state.question.length === 0) {
      this.setState({ requiredQuestion: true });
    } else if (this.state.nickname.length === 0) {
      this.setState({ requiredNickname: true });
    } else if (this.state.email.length === 0) {
      this.setState({ requiredEmail: true });
    } else if (!this.checkEmailValidity(this.state.email)) {
      this.setState({ validEmail: true });
    } else {
      axios({
        method: 'POST',
        url: `http://${URL}/qa/${this.props.paramsId}?count=100`,
        data: {
          body: this.state.question,
          name: this.state.nickname,
          email: this.state.email,
        },
      })
        .then((data) => {
          this.props.getProductQuestions(this.props.paramsId);
          this.props.exitClick();
        })
        .catch((err) => {
          console.error('!!! Error Posting Answer to Question !!!');
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="subtitle is-5"> About The {this.props.product_name}</div>
        <label>Your Question*</label>
        <br />
        <textarea
          type="text"
          name="question"
          rows="15"
          cols="45"
          maxLength="1000"
          onChange={this.onChange}
          placeholder="Your Question"
          style={{ fontSize: '18pt' }}
        ></textarea>
        <br />
        {/* DISPLAY WARNING IF QUESTION IS GETTING TOO LONG*/}
        {this.state.question.length > 998 ? (
          <React.Fragment>
            <div>Your Question is Too Long! Please Shorten</div>
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        {/* DISPLAY WARNING IF QUESTION IS FIELD IS EMPTY*/}
        {this.state.requiredQuestion ? (
          <React.Fragment>
            {' '}
            <b>Question is a Required Feild!!!</b>
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}

        <label>Your Nickname*</label>
        <br />
        <input
          type="text"
          name="nickname"
          size="70"
          maxLength="60"
          onChange={this.onChange}
          placeholder="Jackson11!"
        ></input>

        {/* DISPLAY WARNING IF NICKNAME IS GETTING TOO LONG*/}
        {this.state.nickname.length > 58 ? (
          <React.Fragment>
            <div>Your Nickname is Too Long! Please Shorten</div>
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {/* DISPLAY WARNING IF NICKNAME FEILD IS EMPTY*/}
        {this.state.requiredNickname ? (
          <React.Fragment>
            {' '}
            <b>Nickname is a Required Feild!!!</b> <br />{' '}
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}

        <div>For Privacy Reasons, Do Not Use Your Full Name Or Email Address</div>
        <br />
        <label>Your Email*</label>
        <br />
        <input
          type="text"
          name="email"
          size="70"
          maxLength="60"
          onChange={this.onChange}
          placeholder="Jackson11@email.com"
        ></input>

        {/* DISPLAY WARNING IF EMAIL IS GETTING TOO LONG*/}
        {this.state.email.length > 58 ? (
          <React.Fragment>
            {' '}
            <div>Your Email is Too Long! Please Shorten</div> <br />{' '}
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {/* DISPLAY WARNING IF EMAIL FEILD IS EMPTY*/}
        {this.state.requiredEmail ? (
          <React.Fragment>
            {' '}
            <b>Email is a Required Feild!!!</b> <br />
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}

        {/* DISPLAY WARNING IF ENTERED EMAIL IS INVALID*/}
        {this.state.validEmail ? (
          <React.Fragment>
            {' '}
            <b>Current Email Is Invalid!!!</b> <br />
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}

        <div>For Authentication Reasons, You Will Not Be Emailed</div>
        <br />
        <button className="button is-small is-primary is-outlined submitQuestionButton" onClick={this.submitAnswer}>
          SUBMIT QUESTION
        </button>
        <br />
      </React.Fragment>
    );
  }
}

export default AddQuestion;
