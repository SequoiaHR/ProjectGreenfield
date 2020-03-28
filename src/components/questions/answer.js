import React from "react";
import formatDate from "../../formatDate"

class Answer extends React.Component{
constructor(props){
  super(props);
  this.state = {};
}

render(){
  return (
    <div className="tile is-child box">
      <div className="title is-5">{`A: ${this.props.body}`}</div>
      <div>{`by ${this.props.answerer_name}, ${formatDate(this.props.date)}`}</div>
      <div>| Helpfulness:{" "}{this.props.helpfulness}</div>
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