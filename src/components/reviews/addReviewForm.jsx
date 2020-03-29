import React from "react";
import CharacteristicsRadio from "./characteristicsRadio.jsx";

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recommend: false,
      characteristics: {},
      summary: "",
      body: ""
    };
    this.onChangeBound = this.onChange.bind(this);
  }

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div className="subtitle">{`About the ${this.props.name}`}</div>
        <form>
          <label>
            <div className="add-input">Overall rating*</div>
            [rating selector goes here]
          </label>
          <br />
          <label>
          <div className="add-input">Do you recommend this product?*</div>
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
          <label>
          <div className="add-input">Summary:</div>
            <br />
            <input className="input" type="text" name="summary" maxlength="60" required="true" />
          </label>
          <label>
          <div className="add-input">Your review:</div>
            <br />
            <textarea 
              className="textarea"  
              name="body"
              maxlength="1000"
              minlength="50"
              required="true"
              rows="5"
              placeholder="Why did you like or not like the product?"
              value={this.state.body}
              onChange={this.onChangeBound} />
              {this.state.body.length < 50 
              ? `Please enter ${50 - this.state.body.length} more characters.`
              : "Minimum reached!"}
          </label>
        </form>
      </div>
    );
  }
}

export default AddReviewForm;