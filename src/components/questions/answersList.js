import React from "react";
import Answer from "./answer";
import "./questions.css"
import recordInteraction from "../../interactionsHelper.js";

class AnswerList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answers: null,
      display: 2
    };
    this.determineDisplayed = this.determineDisplayed.bind(this);
    this.seeMoreAnswersClick = this.seeMoreAnswersClick.bind(this);
    this.getAnswerArray = this.getAnswerArray.bind(this);
  }

  //TRANSFORMS THE OBJECT OF ANSWERS INTO A SORTED ARRAY OF ANSWERS
  //FIRST SORTS BY HELPFULNESS AND THEN BRINGS ANY SELLER ANSWERS TO TOP
  getAnswerArray(answerObject){
    let answerKeys = Object.keys(answerObject);
    let answerArray = []
    for (let i = 0; i < answerKeys.length; i++){
      answerArray.push(answerObject[answerKeys[i]]);
    }
    answerArray.sort((a,b)=>b.helpfulness - a.helpfulness);
    answerArray.sort((a,b)=> {
      let result = 0;
      if (b.answerer_name === "Seller" && a.answerer_name === "Seller") {
        result = 0;
      } else if (b.answerer_name === "Seller") {
        result = 1;
      } else if (a.answerer_name === "Seller") {
        result = -1;
      }
      return result;
    });
    return answerArray;
  }

  //DETERMINES NUMBER OF ANSWERS CURRENTLY BEING RENDERED
  determineDisplayed(sortedAnswers){
    let displayAnswers = sortedAnswers.slice(0, this.state.display);
    return displayAnswers;
  }

  //SETS NUMBER OF ANSWERS RENDERED TO ALL ON CLICK
  seeMoreAnswersClick(event){
    event.preventDefault();
    recordInteraction(event.target.className, "Q&A");
    this.setState({display: this.props.answers.length});
  }

  render(){
    let answers = this.getAnswerArray(this.props.answers)
    answers = this.determineDisplayed(answers)

    return (
      <React.Fragment>
        <div className="container answersExpand">
          {answers[0] ?
          (answers.map( (answer, index) => {
            return (
            <Answer key={index}
                    id={answer.id}
                    body={answer.body}
                    date={answer.date}
                    answerer_name={answer.answerer_name}
                    helpfulness={answer.helpfulness}
                    photos={answer.photos}
                    getProductQuestions={this.props.getProductQuestions}
                    paramsId={this.props.paramsId}
            />)})) :
            <div>{" "}</div>
          }
          </div>
          <div>
          {//IF DISPLAYED ANSWERS IS LESS THAN TOTAL ANSWERS THEN DISPLAY 'SHOW MORE' BUTTON
          (answers.length < Object.keys(this.props.answers).length) ?
          <button className="button is-small is-primary is-outlined showMoreAnswers" onClick={this.seeMoreAnswersClick}>SHOW MORE ANSWERS</button> :
          //ELSE IF TOTAL ANSWERS IS MORE THAN TWO SHOW 'COLLAPSE ANSWERS' BUTTON
          (Object.keys(this.props.answers).length > 2) ?
          <button className="button is-small is-primary is-outlined collapseAnswers"
                  onClick={ (event)=>{ this.setState( {display:2} ); recordInteraction(event.target.className, "Q&A");} }
                  >
                    COLLAPSE ANSWERS
          </button> :
          <div></div>
          }
        </div>
      </React.Fragment>
    );
  }

}

export default AnswerList;