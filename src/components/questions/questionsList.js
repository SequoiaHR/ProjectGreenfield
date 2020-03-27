import React from "react";
import Question from "./question";
import formatDate from "../../formatDate"

class QuestionList extends React.Component{
constructor(props){
  super(props);
  this.state = {
    questions: null,
    display: 4
  };
}

componentDidMount(){
  console.log(this.props)
  this.props.getProductQuestions(4);
}

render(){
  return (
  <div className="box">
    <h1 className="title">QUESTONS & ANSWERS</h1>
    {
    this.props.store.questions[0] ? (this.props.store.questions.map( (question, index) => {
      return <Question key={index} question_body={question.question_body} question_date={formatDate(question.question_date)} asker_name={question.asker_name} question_helpfulness={question.question_helpfulness} reported={question.reported} answers={question.answers}/>
    })) : <div>{" "}</div>
    }
  </div>
  );
}

}

export default QuestionList;