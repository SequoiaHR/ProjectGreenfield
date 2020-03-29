import React from "react";
import { MEANINGS } from "../../characteristicMeanings.js";
import "./reviews.css";

class CharacteristicsRadio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }




  render() {
    let { characteristic } = this.props;
    return (
      <div className="char-radio-row">
        <div>{characteristic}*</div>
        <div className="level">
          {[5, 4, 3, 2, 1].map((num) => {
            return (
              <div className="level-item has-text-centered">
                <div className="heading">{MEANINGS[characteristic][num]}</div>
              </div>
            );
          })}
        </div>
        <div className="level">
          {[5, 4, 3, 2, 1].map((num) => {
            return (
              <div className="level-item has-text-centered">
                <input className="char-radio" type="radio" name={characteristic} value={num} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default CharacteristicsRadio;