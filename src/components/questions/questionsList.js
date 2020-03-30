import React from "react";
import Question from "./question";
import formatDate from "../../formatDate"
import "./questions.css"

class QuestionList extends React.Component{
constructor(props){
  super(props);
  this.state = {
    questions: null,
    display: 4
  };
  this.determineDisplayed = this.determineDisplayed.bind(this);
  this.seeMoreQuestionsClick = this.seeMoreQuestionsClick.bind(this);
}

  //FETCHING INITIAL QUESTION DATA FROM STORE
  componentDidMount(){
    console.log(this.props)
    this.props.getProductQuestions(110);
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

  //SETS NUMBER OF QUESTIONS DISPLAYED TO CURRENT DISPLAY+2 ON CLICK
  seeMoreQuestionsClick(event){
    event.preventDefault();
    this.setState({display: this.state.display+2})
  }

  render(){
    return (
    <React.Fragment>
      <h1 className="title">QUESTONS & ANSWERS</h1>
      <div className="container questionsExpand">
        {
        (this.props.store.questions[0] ?
          this.determineDisplayed(this.props.store.questions).map( (question, index) => {
          return (
          <Question key={index}
                    question_body={question.question_body}
                    question_date={formatDate(question.question_date)}
                    asker_name={question.asker_name}
                    question_helpfulness={question.question_helpfulness}
                    reported={question.reported}
                    answers={question.answers}
          />)
        }) : <div>{" "}</div>)
        }
        </div><div>
        {
        //IF DISPLAYED QUESTIONS IS LESS THAN TOTAL QUESTIONS THEN DISPLAY 'SHOW MORE' BUTTON
        (this.determineDisplayed(this.props.store.questions).length <
        this.props.store.questions.length) ?
        <button className="button is-medium" onClick={this.seeMoreQuestionsClick}>Show More Questions</button> :
        //ELSE IF DISPLAYED QUESTIONS IS EQUAL TO TOTAL QUESTIONS SHOW 'COLLAPSE' BUTTON
        (this.determineDisplayed(this.props.store.questions).length ===
        this.props.store.questions.length && this.props.store.questions.length > 4) ?
        <button className="button is-medium" onClick={()=>{this.setState({display:4})}}>Collapse Questions</button> :
        <div></div>
        }
      </div>
    </React.Fragment>
    );
  }

}

export default QuestionList;