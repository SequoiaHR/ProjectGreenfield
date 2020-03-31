import React from "react";
import Question from "./question";
import formatDate from "../../formatDate"
import Modal from "../Modal.jsx"
import AddQuestion from "./addQuestion.js"
import "./questions.css"

class QuestionList extends React.Component{
constructor(props){
  super(props);
  this.state = {
    questions: null,
    showModal: false,
    currentID: null,
    display: 4
  };
  this.determineDisplayed = this.determineDisplayed.bind(this);
  this.seeMoreQuestionsClick = this.seeMoreQuestionsClick.bind(this);
  this.addQuestionClick = this.addQuestionClick.bind(this);
  this.sortQuestions = this.sortQuestions.bind(this);
}

  //FETCHING INITIAL QUESTION DATA FROM STORE
  componentDidMount(){
    this.setState({currentID:this.props.paramsId});
    this.props.getProductQuestions(this.props.paramsId);
  }

  //RERENDERS COMPONENTS IF THE PRODUCT ID IN THE NAV BAR HAS CHANGED
  componentDidUpdate(){
    if(this.state.currentID !== this.props.paramsId){
      this.props.getProductQuestions(this.props.paramsId);
      this.setState({currentID:this.props.paramsId});
    }
  }

  //SHOWS THE MODAL FOR SUBMITTING A QUESTION
  addQuestionClick(){
    this.setState({showModal:!this.state.showModal});
  }

  //DETERMINES THE NUMBER OF QUESTIONS RENDERED
  determineDisplayed(propsQuestions){
    let questions = propsQuestions
    if( questions.length > 0 ) {
      questions = questions.slice(0, this.state.display)
    } else {
      questions = []
    }
    return questions;
  }

  //SORT QUESTIONS BY HELPFULNESS
  sortQuestions(questionsArray){
    questionsArray = Array.from(questionsArray) || [];
    let sortedQuestionsArray = questionsArray.sort((a,b)=> b.question_helpfulness - a.question_helpfulness)
    return sortedQuestionsArray;
  }

  //SETS NUMBER OF QUESTIONS DISPLAYED TO CURRENT DISPLAY+2 ON CLICK
  seeMoreQuestionsClick(event){
    event.preventDefault();
    this.setState({display: this.state.display+2})
  }

  render(){
    let sortedQuestions = this.sortQuestions(this.props.store.questions);
    return (
    <React.Fragment>
      <h1 className="title">QUESTIONS & ANSWERS</h1>
      <div className="container questionsExpand">
        {
        (this.props.store.questions[0] ?
          this.determineDisplayed(sortedQuestions).map( (question, index) => {
          return (
          <Question key={index}
                    question_id={question.question_id}
                    question_body={question.question_body}
                    question_date={formatDate(question.question_date)}
                    asker_name={question.asker_name}
                    question_helpfulness={question.question_helpfulness}
                    reported={question.reported}
                    answers={question.answers}
                    getProductQuestions={this.props.getProductQuestions}
                    paramsId={this.props.paramsId}
          />)
        }) : <div>{" "}</div>)
        }
        </div><div>
        {
        //IF DISPLAYED QUESTIONS IS LESS THAN TOTAL QUESTIONS THEN DISPLAY 'SHOW MORE' BUTTON
        (this.determineDisplayed(this.props.store.questions).length <
        this.props.store.questions.length) ?
        <button className="button is-medium" onClick={this.seeMoreQuestionsClick}>SHOW MORE QUESTIONS</button> :
        //ELSE IF DISPLAYED QUESTIONS IS EQUAL TO TOTAL QUESTIONS SHOW 'COLLAPSE' BUTTON
        (this.determineDisplayed(this.props.store.questions).length ===
        this.props.store.questions.length && this.props.store.questions.length > 4) ?
        <button className="button is-medium" onClick={()=>{this.setState({display:4})}}>COLLAPSE QUESTIONS</button> :
        <div></div>
        }
        <br/><br/>
        <button className="button is-large" onClick={this.addQuestionClick}>ASK A NEW QUESTION</button>
      </div>
      {this.state.showModal ?
      <Modal title="Ask Your Question"
             children={
                       <AddQuestion getProductQuestions={this.props.getProductQuestions}
                                    paramsId={this.props.paramsId}
                                    exitClick={this.addQuestionClick}
                       />}
             onExitClick={this.addQuestionClick}/> :
             <div></div>}
    </React.Fragment>
    );
  }

}

export default QuestionList;