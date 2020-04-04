import React from "react";
import EMPTY_STAR from "../../starAssets/empty-star.png";
import FULL_STAR from "../../starAssets/full-star.png";

// display appropriate number of stars on user click, for add review form
class StarInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1
    };
    this.setFillBound = this.setFill.bind(this);
  }

  setFill(num) {
    switch(num) { // set new fill
      case 1:
        this.setState({
          1: 1,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        });
        break;
      case 2:
        this.setState({
          1: 1,
          2: 1,
          3: 0,
          4: 0,
          5: 0
        });
        break;
      case 3:
        this.setState({
          1: 1,
          2: 1,
          3: 1,
          4: 0,
          5: 0
        });
        break;
      case 4:
        this.setState({
          1: 1,
          2: 1,
          3: 1,
          4: 1,
          5: 0
        });
        break;
      case 5:
        this.setState({
          1: 1,
          2: 1,
          3: 1,
          4: 1,
          5: 1
        });
        break;
      default:
        return;
    }
    this.props.update(num); // update rating in add review form component
  }

  render() {
    return(
      <span>
        {[1, 2, 3, 4, 5].map((num) => { // conditionally map empty or full stars
          return(
            this.state[num]
              ? <img
              width={this.props.width}
              height={this.props.height}
              key={num}
              alt="full star"
              src={FULL_STAR}
              onClick={() => this.setFillBound(num)} />
              : <img
              width={this.props.width}
              height={this.props.height}
              key={num}
              alt="empty star"
              src={EMPTY_STAR}
              onClick={() => this.setFillBound(num)} />
          );
        })}
      </span>
    );
  }
}

export default StarInput;