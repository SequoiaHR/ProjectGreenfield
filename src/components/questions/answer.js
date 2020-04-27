import React from 'react';
import formatDate from '../../formatDate';
import recordInteraction from '../../interactionsHelper.js';
import axios from 'axios';
import './questions.css';
const URL = '18.224.200.47';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReported: false,
    };
    this.helpfulClick = this.helpfulClick.bind(this);
    this.sendHelpful = this.sendHelpful.bind(this);
    this.reportedClick = this.reportedClick.bind(this);
    this.sendReported = this.sendReported.bind(this);
  }

  //INITIALIZES LOCAL STORAGE OBJECTS FOR ANSWERS ON MOUNT
  componentDidMount() {
    let helpfulAnswers = localStorage.getItem('helpfulAnswers');
    let reportedAnswers = localStorage.getItem('reportedAnswers');
    if (helpfulAnswers === null) {
      localStorage.setItem('helpfulAnswers', JSON.stringify([]));
    }
    if (reportedAnswers === null) {
      localStorage.setItem('reportedAnswers', JSON.stringify([]));
    }
  }

  //CHECKS LOCAL STORAGE FOR PREVIOUS ANSWERS MARKED HELPFUL AND IF HELPFUL CLICK
  //CORROSPONDS TO AN ANSWER NOT CONTAINED ON LOCAL STORAGE LIST THEN IT SENDS A PUT REQUEST
  //TO THE API AND RELOADS THE ANSWERS
  helpfulClick(event) {
    let helpfulAnswers = localStorage.getItem('helpfulAnswers');
    helpfulAnswers = JSON.parse(helpfulAnswers);
    if (helpfulAnswers.indexOf(event.target.id) === -1) {
      recordInteraction(event.target.className, 'Q&A');
      helpfulAnswers.push(event.target.id);
      localStorage.setItem('helpfulAnswers', JSON.stringify(helpfulAnswers));
      this.sendHelpful(event.target.id);
    }
  }

  //UPDATES HELPFUL RATING ON API AND GETS ALL QUESTION DATA UPON COMPLETION
  sendHelpful(id) {
    axios({
      method: 'PUT',
      url: `http://${URL}/qa/answer/${id}/helpful`,
    })
      .then((data) => {
        this.props.getProductQuestions(this.props.paramsId);
      })
      .catch((err) => {
        console.error('!!! Error Putting Helpfulness to Answer !!!');
      });
  }

  //CHECKS LOCAL STORAGE FOR PREVIOUS ANSWERS MARKED REPORTED AND IF REPORT CLICK
  //CORROSPONDS TO AN ANSWER NOT CONTAINED ON LOCAL STORAGE LIST THEN IT SENDS A PUT REQUEST
  //TO THE API AND CHANGES THE 'REPORT' TEXT TO 'REPORTED'
  reportedClick(event) {
    let reportedAnswers = localStorage.getItem('reportedAnswers');
    reportedAnswers = JSON.parse(reportedAnswers);
    if (reportedAnswers.indexOf(event.target.id) === -1) {
      recordInteraction(event.target.className, 'Q&A');
      reportedAnswers.push(event.target.id);
      localStorage.setItem('reportedAnswers', JSON.stringify(reportedAnswers));
      this.sendReported(event.target.id);
    }
  }

  //UPDATES REPORTED STATUS ON API BUT DOES NOT FETCH DATA, INSTEAD CHANGES DISPLAY TO SHOW 'REPORTED'
  sendReported(id) {
    axios({
      method: 'PUT',
      url: `http://${URL}/qa/answer/${id}/report`,
    })
      .then((data) => {
        this.setState({ isReported: true });
      })
      .catch((err) => {
        console.error('!!! Error Putting Report to Answer !!!');
      });
  }

  render() {
    //BOLDEN ANSWERER'S NAME IF SELLER IS ANSWERER
    let name = '';
    this.props.answerer_name === 'Seller'
      ? (name = <b>{this.props.answerer_name} Response</b>)
      : (name = this.props.answerer_name);
    //CREATE INDIVIDUAL ANSWER ENTRIES
    return (
      <div className="tile is-child box">
        <div className="title is-5">{`A: ${this.props.body}`}</div>
        {/* MAP ANY EXISTING PHOTOS TO ANSWER */}
        {this.props.photos.map((photo, index) => (
          <img style={{ maxHeight: 100, maxWidth: 100 }} src={photo} alt={photo} />
        ))}
        <br />
        <div className="is-inline-block">
          <div className="is-inline-block">
            by {name}
            {`, ${formatDate(this.props.date)} | \u00A0`}
          </div>
          <div className="is-inline-block is-clickable" id={this.props.id} onClick={this.helpfulClick}>
            Helpful?{' '}
            <u id={this.props.id} className={`answer${this.props.id}isHelpful`}>
              Yes
            </u>
            ({this.props.helpfulness}) | {'\u00A0'}
          </div>
          {!this.state.isReported ? (
            <div className="is-inline-block is-clickable" id={this.props.id} onClick={this.reportedClick}>
              <u id={this.props.id} className={`answer${this.props.id}isReported`}>
                Report
              </u>
            </div>
          ) : (
            <div className="is-inline-block">Reported</div>
          )}
        </div>
      </div>
    );
  }
}

export default Answer;
