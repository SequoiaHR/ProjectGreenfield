import React from "react";
import CharacteristicsRadio from "./characteristicsRadio.jsx";

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }



  render() {
    return (
      <div>
        <div className="subtitle">{`About the ${this.props.name}`}</div>
        <form>
          <label>
            Overall rating*
            [rating selector goes here]
          </label>
          <br />
          <label>
            Do you recommend this product?*
            <div>
              <input type="radio" name="recommend" value="true" /> Yes
              <input type="radio" name="recommend" value="false" /> No
            </div>
          </label>
          <br />
          <div>
            {Object.keys(this.props.characteristics).map((charName) => {
              return <CharacteristicsRadio characteristic={charName} />;
            })}
          </div>
        </form>
      </div>
    );
  }
}

export default AddReviewForm;