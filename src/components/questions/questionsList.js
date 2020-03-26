import React from "react";
import Question from "./question";

class QuestionList extends React.Component{
constructor(props){
  super(props);
  this.state = {
    questions: null,
    display: 4
  };
}

render(){
  return <div><div>QuestionList (map out questions here)</div><Question/></div>
}

}

export default QuestionList;