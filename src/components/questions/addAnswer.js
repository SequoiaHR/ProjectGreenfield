import React from 'react';
import axios from 'axios';
const URL = '18.224.200.47';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qID: this.props.qID,
      answer: '',
      nickname: '',
      email: '',
      requiredAnswer: false,
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
    if (this.state.answer.length === 0) {
      this.setState({ requiredAnswer: true });
    } else if (this.state.nickname.length === 0) {
      this.setState({ requiredNickname: true });
    } else if (this.state.email.length === 0) {
      this.setState({ requiredEmail: true });
    } else if (!this.checkEmailValidity(this.state.email)) {
      this.setState({ validEmail: true });
    } else {
      axios({
        method: 'POST',
        url: `http://${URL}/qa/${this.state.qID}/answers`,
        data: {
          body: this.state.answer,
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
        <div className="subtitle is-5">
          {this.props.product_name}
          {' : '}
          {this.props.question_body}
        </div>
        <label>Your Answer*</label>
        <br />
        <textarea
          type="text"
          name="answer"
          rows="15"
          cols="45"
          maxLength="1000"
          onChange={this.onChange}
          placeholder="Your Answer"
          style={{ fontSize: '18pt' }}
        ></textarea>
        <br />

        {/* DISPLAY WARNING IF ANSWER IS GETTING TOO LONG*/}
        {this.state.answer.length > 998 ? (
          <React.Fragment>
            <div>Your Answer is Too Long! Please Shorten</div>
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {/* DISPLAY WARNING IF ANSWER IS FIELD IS EMPTY*/}
        {this.state.requiredAnswer ? (
          <React.Fragment>
            <b>Answer is a Required Field!!!</b>
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
          placeholder="Jack543"
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
            <b>Nickname is a Required Field!!!</b>
            <br />
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
          placeholder="Jack@email.com"
        ></input>

        {/* DISPLAY WARNING IF EMAIL IS GETTING TOO LONG*/}
        {this.state.email.length > 58 ? (
          <React.Fragment>
            <div>Your Email is Too Long! Please Shorten</div>
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {/* DISPLAY WARNING IF EMAIL FEILD IS EMPTY*/}
        {this.state.requiredEmail ? (
          <React.Fragment>
            <b>Email is a Required Field!!!</b>
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}

        {/* DISPLAY WARNING IF ENTERED EMAIL IS INVALID*/}
        {this.state.validEmail ? (
          <React.Fragment>
            <b>Current Email Is Invalid!!!</b>
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}

        <div>For Authentication Reasons, You Will Not Be Emailed</div>
        <br />
        <button className="button is-small is-primary is-outlined " onClick={this.submitAnswer}>
          SUBMIT ANSWER
        </button>
        <br />
      </React.Fragment>
    );
  }
}

export default AddAnswer;
