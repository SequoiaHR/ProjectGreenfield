import React from "react";
import AnswerList from "./answersList"


class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (<div><div>Question Content</div><AnswerList/></div>);
  }
}

export default Question;