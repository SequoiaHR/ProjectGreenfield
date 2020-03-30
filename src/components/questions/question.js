import React from "react";
import AnswerList from "./answersList"
import Modal from "../Modal.jsx"
import AddAnswer from "./addAnswer.js"


class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
    this.helpfulClick = this.helpfulClick.bind(this);
    this.addAnswerClick = this.addAnswerClick.bind(this);
  }

  helpfulClick(event){
    console.log("***HELPFUL CLICK***")
  }

  addAnswerClick(event){
    this.setState({showModal:!this.state.showModal})
  }

  render(){
    return (<div className="container">
      <div className="container">
        <div className="title is-inline-block">{`Q: ${this.props.question_body}`}</div>
        <div className="is-pulled-right is-inline-block">
          <div className="is-inline-block" onClick={this.helpfulClick}>Helpful?({this.props.question_helpfulness})</div>
          <div className="is-inline-block" onClick={this.addAnswerClick} >{" | "}Add Answer</div>
        </div>
        <br/>
      </div>
      <AnswerList answers={this.props.answers}/>
      <br/>
      <br/>
      {this.state.showModal ?
      <Modal title="Submit Your Answer"
             children={
                       <AddAnswer getProductQuestions={this.props.getProductQuestions}
                                  paramsId={this.props.paramsId}
                                  qID={this.props.question_id}
                                  exitClick={this.addAnswerClick}
                       />}
             onExitClick={this.addAnswerClick}/> :
             <div></div>}
      </div>);
  }
}

export default Question;