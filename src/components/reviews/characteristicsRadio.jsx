import React from "react";
import { MEANINGS } from "../../characteristicMeanings.js";

class CharacteristicsRadio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }




  render() {
    let { characteristic } = this.props;
    return (
      <div>
        <div>{characteristic}</div>
        <div>{MEANINGS[characteristic][1]}</div>
        <div>{MEANINGS[characteristic][5]}</div>
      </div>
    );
  }

}

export default CharacteristicsRadio;