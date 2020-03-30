import React from "react";
import AnswerList from "./answersList"


class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (<div className="container">
      <div className="container">
        <div className="title is-inline-block">{`Q: ${this.props.question_body}`}</div>
        <div className="is-pulled-right is-inline-block">Helpful?({this.props.question_helpfulness}){" | "}Add Answer</div>
        <br/>
      </div>
      {/* <div>
      {this.props.asker_name}{" | "}{this.props.question_date}{" | "}{this.props.reported}
      </div> */}
      <AnswerList answers={this.props.answers}/>
      <br/>
      <br/>
      </div>);
  }
}

export default Question;