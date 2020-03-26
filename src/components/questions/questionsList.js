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

componentDidMount(){
  console.log(this.props)
  this.props.getProductQuestions(3);
}

render(){
  return (
  <div>
    {
    this.props.store.questions[0] ? (this.props.store.questions.map( (question, index) => {
      return <Question key={index} question_body={question.question_body} question_date={question.question_date} asker_name={question.asker_name} question_helpfulness={question.question_helpfulness} reported={question.reported} answers={question.answers}/>
    })) : <div>NO</div>
    }
  </div>
  );
}

}

export default QuestionList;