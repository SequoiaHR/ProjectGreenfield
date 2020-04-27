import React from 'react';
import AnswerList from './answersList';
import Modal from '../Modal.jsx';
import AddAnswer from './addAnswer.js';
import recordInteraction from '../../interactionsHelper.js';
import axios from 'axios';
import './questions.css';
const URL = '18.224.200.47';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.helpfulClick = this.helpfulClick.bind(this);
    this.addAnswerClick = this.addAnswerClick.bind(this);
    this.sendHelpful = this.sendHelpful.bind(this);
  }

  //INITIALIZES LOCAL STORAGE OBJECTS FOR QUESTIONS ON MOUNT
  componentDidMount() {
    let helpfulQuestions = localStorage.getItem('helpfulQuestions');
    if (helpfulQuestions === null) {
      localStorage.setItem('helpfulQuestions', JSON.stringify([]));
    }
  }

  //CHECKS LOCAL STORAGE FOR PREVIOUSE QUESTIONS MARKED HELPFUL AND IF HELPFUL CLICK
  //CORROSPONDS TO A QUESTION NOT CONTAINED ON LOCAL STORAGE LIST THEN IT SENDS A PUT REQUEST
  //TO THE API AND RELOADS THE QUESTIONS
  helpfulClick(event) {
    let helpfulQuestions = localStorage.getItem('helpfulQuestions');
    helpfulQuestions = JSON.parse(helpfulQuestions);
    if (helpfulQuestions.indexOf(event.target.id) === -1) {
      recordInteraction(event.target.className, 'Q&A');
      helpfulQuestions.push(event.target.id);
      localStorage.setItem('helpfulQuestions', JSON.stringify(helpfulQuestions));
      this.sendHelpful(event.target.id);
    }
  }

  //UPDATES HELPFUL RATING ON API AND GETS ALL QUESTION DATA UPON COMPLETION
  sendHelpful(id) {
    axios({
      method: 'PUT',
      url: `http://${URL}/qa/question/${id}/helpful`,
    })
      .then((data) => {
        this.props.getProductQuestions(this.props.paramsId);
      })
      .catch((err) => {
        console.error('!!! Error Putting Helpfulness to Question !!!');
      });
  }

  //DISPLAYS MODAL FOR INPUTTING AN ANSWER
  addAnswerClick(event) {
    this.setState({ showModal: !this.state.showModal });
    recordInteraction(event.target.className, 'Q&A');
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="title is-4 is-inline-block">{`Q: ${this.props.question_body}`}</div>
          <div className="is-pulled-right is-inline-block">
            <div className="is-inline-block is-clickable" id={this.props.question_id} onClick={this.helpfulClick}>
              Helpful?{' '}
              <u id={this.props.question_id} className={`question${this.props.question_id}isHelpful`}>
                Yes
              </u>
              ({this.props.question_helpfulness})
            </div>
            <div className="is-inline-block is-clickable" onClick={this.addAnswerClick}>
              {' | '}
              <u className={`addAnswerToQuestion${this.props.question_id} addAnswer`}>Add Answer</u>
            </div>
          </div>
          <br />
        </div>
        <AnswerList
          getProductQuestions={this.props.getProductQuestions}
          paramsId={this.props.paramsId}
          answers={this.props.answers}
        />
        <br />
        <br />
        {this.state.showModal ? (
          <Modal
            title="Submit Your Answer"
            children={
              <AddAnswer
                question_body={this.props.question_body}
                product_name={this.props.product_name}
                getProductQuestions={this.props.getProductQuestions}
                paramsId={this.props.paramsId}
                qID={this.props.question_id}
                exitClick={this.addAnswerClick}
              />
            }
            onExitClick={this.addAnswerClick}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Question;
