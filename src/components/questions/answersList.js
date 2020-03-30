import React from "react";
import Answer from "./answer";
import "./questions.css"

class AnswerList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answers: null,
      display: 2
    };
    this.determineDisplayed = this.determineDisplayed.bind(this);
    this.seeMoreAnswersClick = this.seeMoreAnswersClick.bind(this);
  }

  //DETERMINES NUMBER OF ANSWERS RENDERED
  determineDisplayed(propsAnswers){
    let keys = Object.keys(propsAnswers);
    keys = keys.slice(0, this.state.display);
    return keys;
  }

  //SETS NUMBER OF ANSWERS DISPLAYED TO ALL ON CLICK
  seeMoreAnswersClick(event){
    event.preventDefault();
    this.setState({display: this.props.answers.length});
  }

  render(){
    let keys = this.determineDisplayed(this.props.answers);

    return (
      <React.Fragment>
        <div className="container answersExpand">
          {
          keys[0] ?
          (keys.map( (key, index) => {
            return (
            <Answer key={index}
                    id={this.props.answers[key].id}
                    body={this.props.answers[key].body}
                    date={this.props.answers[key].date}
                    answerer_name= {this.props.answers[key].answerer_name}
                    helpfulness={this.props.answers[key].helpfulness}
                    photos={this.props.answers[key].photos}
            />)
          })) : <div>{" "}</div>
          }
          </div>
          <div>
          {
          //IF DISPLAYED ANSWERS IS LESS THAN TOTAL ANSWERS THEN DISPLAY 'SHOW MORE' BUTTON
          (keys.length < Object.keys(this.props.answers).length) ?
          <button className="button is-medium" onClick={this.seeMoreAnswersClick}>Show More Answers</button> :
          //ELSE IF TOTAL ANSWERS IS MORE THAN TWO SHOW 'COLLAPSE ANSWERS' BUTTON
          (Object.keys(this.props.answers).length > 2) ?
          <button className="button is-medium" onClick={ (event)=>{ this.setState( {display:2} ) } }>Collapse Answers</button> :
          <div></div>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default AnswerList;