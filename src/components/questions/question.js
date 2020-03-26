import React from "react";
import AnswerList from "./answersList"


class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (<div>
      <div>
        {this.props.question_body}
      </div>
      <div>
        {this.props.question_date}
      </div>
      <div>
        {this.props.asker_name}
      </div>
      <div>
        {this.props.question_helpfulness}
      </div>
      <div>
        {this.props.reported}
      </div>
      <AnswerList answers={this.props.answers}/>
      </div>);
  }
}

export default Question;