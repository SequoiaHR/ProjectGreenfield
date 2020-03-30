import React from "react";
import axios from "axios";

import StarInput from "./starInput.jsx";
import CharacteristicsRadio from "./characteristicsRadio.jsx";

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 5,
      recommend: null,
      characteristics: {},
      summary: "",
      body: "",
      photos: [],
      nickname: "",
      email: "",
      errors: []
    };
    this.onChangeBound = this.onChange.bind(this);
    this.changeCharacteristicBound = this.changeCharacteristic.bind(this);
    this.changeRatingBound = this.changeRating.bind(this);
    this.validateBound = this.validate.bind(this);
  }

  componentDidMount() {
    let nullCharacteristics = {};
    Object.keys(this.props.characteristics).forEach((char) => {
      nullCharacteristics[this.props.characteristics[char].id] = null;
    });
    this.setState({
      characteristics: nullCharacteristics
    });
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

  changeRating(num) {
    this.setState({
      rating: num
    });
  }

  validate(event) {
    event.preventDefault();
    const errors = [];
    // perform checks here
    if (errors.length > 0) {
      this.setState({
        errors: errors
      });
    } else {
      this.setState({
        errors: []
      });
      this.submit();
      this.props.exit();
    }
  }

  submit() {
    axios.post();
  }

  render() {
    return (
      <div>
        <div className="subtitle">{`About the ${this.props.name}`}</div>
        <form>
          <label>
            <div className="add-input">Overall rating (select):*</div>
            <StarInput width="25" height="25" update={this.changeRatingBound} />
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
              return <CharacteristicsRadio 
                key={charName} 
                characteristic={charName} 
                charId={this.props.characteristics[charName].id} 
                handler={this.changeCharacteristicBound} />;
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
              ? <span className="is-size-7">{`Please enter ${50 - this.state.body.length} more characters.`}</span>
              : <span className="is-size-7">Minimum reached!</span>}
          </label>
          <br />&nbsp;<br />
          <label>
            What is your nickname?*
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
            <div className="is-size-7">For privacy reasons, do not use your full name or email address</div>
          </label>
          <br />
          <label>
            What is your email?*
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
              <div className="is-size-7">For authentication reasons, you will not be emailed</div>
          </label>
          <br />
          <button className="button add-input" type="button">+ Add your photos (max 5)</button>
          <br />
          <button className="button add-input" type="submit" onClick={this.validateBound}>Submit</button>
        </form>
        <div id="errors">
          {this.state.errors.map((err) => {
            return <div>{err}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default AddReviewForm;