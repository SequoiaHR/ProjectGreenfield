import React from "react";
import Answer from "./answer";

class AnswerList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answers: null,
      display: 2
    };
  }

  makeAnswerArray(answerObj){

  }

  render(){
    return (
      <div>
      {
      Object.keys(this.props.answers)[0] ? (Object.keys(this.props.answers).map( (key, index) => {
        return <Answer key={index} id={this.props.answers[key].id} body={this.props.answers[key].body} date={this.props.answers[key].date} answerer_name= {this.props.answers[key].answerer_name} helpfulness={this.props.answers[key].helpfulness} photos={this.props.answers[key].photos}/>
      })) : <div>{" "}</div>
      }
    </div>
    );
  }
}

export default AnswerList;