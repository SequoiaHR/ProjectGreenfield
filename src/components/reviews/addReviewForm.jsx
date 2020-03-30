import React from "react";
import CharacteristicsRadio from "./characteristicsRadio.jsx";

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recommend: null,
      characteristics: {},
      summary: "",
      body: "",
      photos: [],
      nickname: "",
      email: "",
      valid: true
    };
    this.onChangeBound = this.onChange.bind(this);
    this.changeCharacteristicBound = this.changeCharacteristic.bind(this);
    this.submitBound = this.submit.bind(this);
  }

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  changeCharacteristic(event) {
    const characteristic = event.target.name;
    const value = event.target.value;
    this.setState({
      characteristics: {...this.state.characteristics, [characteristic]: value}
    });
  }

  submit(event) {
    event.preventDefault();
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
              <input type="radio" name="recommend" value={true} onChange={this.onChangeBound} /> Yes
              <input type="radio" name="recommend" value={false} onChange={this.onChangeBound} /> No
            </div>
          </label>
          <br />
          <div>
            {Object.keys(this.props.characteristics).map((charName) => {
              return <CharacteristicsRadio key={charName} characteristic={charName} handler={this.changeCharacteristicBound} />;
            })}
          </div>
          <label>
          <div className="add-input">Summary:*</div>
            <br />
            <input
              className="input" 
              type="text" 
              name="summary" 
              value={this.state.summary} 
              maxLength="60" 
              required={true} 
              onChange={this.onChangeBound} />
          </label>
          <label>
          <div className="add-input">Your review:*</div>
            <br />
            <textarea 
              className="textarea"  
              name="body"
              maxLength="1000"
              minLength="50"
              required={true}
              rows="5"
              placeholder="Why did you like or not like the product?"
              value={this.state.body}
              onChange={this.onChangeBound} />
              {this.state.body.length < 50 
              ? `Please enter ${50 - this.state.body.length} more characters.`
              : "Minimum reached!"}
          </label>
          <br />
          <label>
            What is your nickname?
            <input 
              className="input" 
              type="text" 
              name="nickname" 
              value={this.state.nickname} 
              maxLength="60" 
              placeholder="Example: jackson11!"
              required={true} 
              onChange={this.onChangeBound} /> 
              <br />
            For privacy reasons, do not use your full name or email address
          </label>
          <br />
          <label>
            What is your email?
            <input 
              className="input" 
              type="email" 
              name="email" 
              value={this.state.email} 
              maxLength="60" 
              placeholder="Example: jackson11@email.com"
              required={true} 
              onChange={this.onChangeBound} />
              <br />
              For authentication reasons, you will not be emailed
          </label>
          <br />
          <button className="button add-input" type="button">Add your photos (max 5):</button>
          <br />
          <button className="button add-input" type="submit" onClick={this.submitBound}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddReviewForm;