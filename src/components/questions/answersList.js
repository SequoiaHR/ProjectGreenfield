import React from "react";
import Answer from "./answer"

class AnswerList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answers: null,
      display: 2
    }
  }

  render(){
    return (
    <div>
      <div>
        AnswerList (map answers to Answerlist)
      </div>
      <Answer/>
    </div>
    );
  }
}

export default AnswerList;