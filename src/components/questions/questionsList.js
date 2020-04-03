import React from "react";
import Question from "./question";
import formatDate from "../../formatDate";
import Modal from "../Modal.jsx";
import AddQuestion from "./addQuestion.js";
import recordInteraction from "../../interactionsHelper.js";
import "./questions.css";

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      showModal: false,
      currentID: null,
      filterContent: "",
      display: 2
    };
    this.determineDisplayed = this.determineDisplayed.bind(this);
    this.seeMoreQuestionsClick = this.seeMoreQuestionsClick.bind(this);
    this.addQuestionClick = this.addQuestionClick.bind(this);
    this.sortQuestions = this.sortQuestions.bind(this);
    this.filterQuestions = this.filterQuestions.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  //FETCHING INITIAL QUESTION DATA FROM STORE
  componentDidMount() {
    this.setState({ currentID: this.props.paramsId });
    this.props.getProductQuestions(this.props.paramsId);
  }

  //RERENDERS COMPONENTS IF THE PRODUCT ID IN THE NAV BAR HAS CHANGED
  componentDidUpdate() {
    if (this.state.currentID !== this.props.paramsId) {
      this.props.getProductQuestions(this.props.paramsId);
      this.setState({ currentID: this.props.paramsId });
      console.log(this.props.store.product_details.name);
    }
  }

  //SHOWS THE MODAL FOR SUBMITTING A QUESTION
  addQuestionClick(event) {
    this.setState({ showModal: !this.state.showModal });
    recordInteraction(event.target.className, "Q&A");
  }

  //DETERMINES THE NUMBER OF QUESTIONS RENDERED
  determineDisplayed(propsQuestions) {
    let questions = propsQuestions;
    if (questions.length > 0) {
      questions = questions.slice(0, this.state.display);
    } else {
      questions = [];
    }
    return questions;
  }

  //SORT QUESTIONS BY HELPFULNESS
  sortQuestions(questionsArray) {
    questionsArray = Array.from(questionsArray) || [];
    let sortedQuestionsArray = questionsArray.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
    return sortedQuestionsArray;
  }

  //SETS NUMBER OF QUESTIONS DISPLAYED TO CURRENT DISPLAY+2 ON CLICK
  seeMoreQuestionsClick(event) {
    recordInteraction(event.target.className, "Q&A");
    event.preventDefault();
    this.setState({ display: this.state.display + 2 });
  }

  //FILTERS DISPLAYED QUESTIONS IF THERE ARE MORE THAN THREE CHARS INPUTTED
  filterQuestions(questionsArray) {
    var filteredArray = [];
    if (this.state.filterContent.length >= 3) {
      for (let i = 0; i < questionsArray.length; i++) {
        if (questionsArray[i].question_body.toLowerCase().includes(this.state.filterContent.toLowerCase())) {
          filteredArray.push(questionsArray[i]);
        }
      }
      return filteredArray;
    }
    return questionsArray;
  }

  //ADDS SEARCH TERM TO LOCAL STATE VARIABLE
  searchChangeHandler(event) {
    this.setState({ filterContent: event.target.value });
  }

  render() {
    let sortedQuestions = this.sortQuestions(this.props.store.questions);
    let filteredSortedQuestions = this.filterQuestions(sortedQuestions);
    return (
      <React.Fragment>
        <h1 className="title is-4 questionsTitle">QUESTIONS & ANSWERS</h1>
        <textarea
          className="textarea is-medium"
          placeholder="Have A Question? Search For Answers..."
          name="search"
          rows="1"
          onChange={this.searchChangeHandler}
        ></textarea>
        <br />
        <div className="container questionsExpand">
          {this.props.store.questions[0] ? (
            this.determineDisplayed(filteredSortedQuestions).map((question, index) => {
              return (
                <Question
                  key={index}
                  question_id={question.question_id}
                  question_body={question.question_body}
                  question_date={formatDate(question.question_date)}
                  asker_name={question.asker_name}
                  question_helpfulness={question.question_helpfulness}
                  reported={question.reported}
                  answers={question.answers}
                  getProductQuestions={this.props.getProductQuestions}
                  paramsId={this.props.paramsId}
                  product_name={this.props.store.product_details.name}
                />
              );
            })
          ) : (
            <div> </div>
          )}
        </div>
        <div>
          {//IF DISPLAYED QUESTIONS IS LESS THAN TOTAL QUESTIONS THEN DISPLAY 'SHOW MORE' BUTTON
          this.determineDisplayed(filteredSortedQuestions).length < filteredSortedQuestions.length ? (
            <button className="button is-medium is-primary is-outlined showMoreQuestions" onClick={this.seeMoreQuestionsClick}>
              SHOW MORE QUESTIONS
            </button>
          ) : //ELSE IF DISPLAYED QUESTIONS IS EQUAL TO TOTAL QUESTIONS SHOW 'COLLAPSE' BUTTON
          this.determineDisplayed(filteredSortedQuestions).length === filteredSortedQuestions.length &&
            filteredSortedQuestions.length > 2 ? (
            <button
              className="button is-medium is-primary is-outlined "
              onClick={() => {
                this.setState({ display: 2 });
              }}
            >
              COLLAPSE QUESTIONS
            </button>
          ) : (
            <div></div>
          )}
          <br />
          <br />
          <button className="button is-medium is-pulled-right is-primary is-outlined askQuestionButton" onClick={this.addQuestionClick}>
            ASK A NEW QUESTION
          </button>
        </div>
        {this.state.showModal ? (
          <Modal
            title="Ask Your Question"
            children={
              <AddQuestion
                product_name={this.props.store.product_details.name}
                getProductQuestions={this.props.getProductQuestions}
                paramsId={this.props.paramsId}
                exitClick={this.addQuestionClick}
              />
            }
            onExitClick={this.addQuestionClick}
          />
        ) : (
          <div></div>
        )}
      </React.Fragment>
    );
  }
}

export default QuestionList;
