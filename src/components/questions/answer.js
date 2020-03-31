import React from "react";
import formatDate from "../../formatDate";
import axios from "axios";

class Answer extends React.Component{
constructor(props){
  super(props);
  this.state = {
    isReported:false
  };
  this.helpfulClick = this.helpfulClick.bind(this);
  this.sendHelpful = this.sendHelpful.bind(this);
  this.reportedClick = this.reportedClick.bind(this);
  this.sendReported = this.sendReported.bind(this);
}

//INITIALIZES LOCAL STORAGE OBJECTS FOR ANSWERS ON MOUNT
componentDidMount(){
  let helpfulAnswers = localStorage.getItem("helpfulAnswers");
  let reportedAnswers = localStorage.getItem("reportedAnswers");
  if (helpfulAnswers===null) {
    localStorage.setItem("helpfulAnswers",JSON.stringify([]));
  }
  if (reportedAnswers===null){
    localStorage.setItem("reportedAnswers",JSON.stringify([]));
  }
}


//CHECKS LOCAL STORAGE FOR PREVIOUS ANSWERS MARKED HELPFUL AND IF HELPFUL CLICK
//CORROSPONDS TO AN ANSWER NOT CONTAINED ON LOCAL STORAGE LIST THEN IT SENDS A PUT REQUEST
//TO THE API AND RELOADS THE ANSWERS

helpfulClick(event){
  let helpfulAnswers = localStorage.getItem("helpfulAnswers");
  helpfulAnswers = JSON.parse(helpfulAnswers);
  if (helpfulAnswers.indexOf(event.target.id) === -1) {
    helpfulAnswers.push(event.target.id);
    localStorage.setItem("helpfulAnswers", JSON.stringify(helpfulAnswers));
    this.sendHelpful(event.target.id);
  }
}

//UPDATES HELPFUL RATING ON API AND GETS ALL QUESTION DATA UPON COMPLETION
sendHelpful(id) {
  axios({
    method: "PUT",
    url: `http://3.134.102.30/qa/answer/${id}/helpful`
  })
  .then(data=>{
    // console.log(data);
    console.log("*** Successfully Putted Helpfulness to Answer ***")
    this.props.getProductQuestions(this.props.paramsId);
  })
  .catch(err=>{
    // console.error(err);
    console.error("!!! Error Putting Helpfulness to Answer !!!")
  })
}

//CHECKS LOCAL STORAGE FOR PREVIOUS ANSWERS MARKED REPORTED AND IF REPORT CLICK
//CORROSPONDS TO AN ANSWER NOT CONTAINED ON LOCAL STORAGE LIST THEN IT SENDS A PUT REQUEST
//TO THE API AND CHANGES THE 'REPORT' TEXT TO 'REPORTED'

reportedClick(event){
  let reportedAnswers = localStorage.getItem("reportedAnswers");
  reportedAnswers = JSON.parse(reportedAnswers);
  if (reportedAnswers.indexOf(event.target.id) === -1) {
    reportedAnswers.push(event.target.id);
    localStorage.setItem("reportedAnswers", JSON.stringify(reportedAnswers));
    this.sendReported(event.target.id);
  }
}

//UPDATES REPORTED STATUS ON API BUT DOES NOT FETCH DATA, INSTEAD CHANGES DISPLAY TO SHOW 'REPORTED'
sendReported(id){
  axios({
    method: "PUT",
    url: `http://3.134.102.30/qa/answer/${id}/report`
  })
  .then(data=>{
    // console.log(data);
    console.log("*** Successfully Putted Report to Answer ***")
    this.setState({isReported:true});
  })
  .catch(err=>{
    // console.error(err);
    console.error("!!! Error Putting Report to Answer !!!")
  })
}

render(){
  //BOLDEN IF SELLER IS ANSWERER
  let name = "";
  this.props.answerer_name === "Seller" ? name = <b>{this.props.answerer_name}</b> :
                                          name = this.props.answerer_name
  //CREATE INDIVIDUAL ANSWER TILE
  return (
    <div className="tile is-child box">
      <div className="title is-5">{`A: ${this.props.body}`}</div>
      <div className="is-inline-block">
      <div>
        by {name}{ `,
            ${formatDate(this.props.date)} |`}
      </div>
      <div className="is-inline-block" id={this.props.id} onClick={this.helpfulClick}>
        Helpful?:({this.props.helpfulness}) | {"\u00A0"}
      </div>
      {
      (!this.state.isReported) ?
      <div className="is-inline-block" id={this.props.id} onClick={this.reportedClick}>Report</div> : <div className="is-inline-block">Reported</div>
      }

  {/* MAP ANY EXISTING PHOTOS TO ANSWER */}
      </div>
      {this.props.photos.map( (photo, index)=>(<img
      style={{maxHeight: 100, maxWidth: 100}}
      src={photo}
      alt={photo}
      />))}

    </div>
  )
}
}

export default Answer;