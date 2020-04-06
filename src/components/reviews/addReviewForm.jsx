import React from "react";
import axios from "axios";

import StarInput from "./starInput.jsx";
import CharacteristicsRadio from "./characteristicsRadio.jsx";
import recordInteraction from "../../interactionsHelper.js";

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
      errors: [],
      imageError: ""
    };
    this.onChangeBound = this.onChange.bind(this);
    this.changeCharacteristicBound = this.changeCharacteristic.bind(this);
    this.changeRatingBound = this.changeRating.bind(this);
    this.changeRecommendBound = this.changeRecommend.bind(this);
    this.uploadChangeBound = this.uploadChange.bind(this);
    this.validateBound = this.validate.bind(this);
  }

  componentDidMount() { // dynamically set characteristics object in state to all nulls for later validation
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
    const id = event.target.name;
    const value = event.target.value;
    this.setState({
      characteristics: {...this.state.characteristics, [id]: value}
    });
  }

  changeRating(num) {
    this.setState({
      rating: num
    });
  }

  changeRecommend() {
    if (document.getElementById("yes").checked) {
      this.setState({
        recommend: 1
      });
    } else {
      this.setState({
        recommend: 0
      });
    }
  }

  readFileAsync(file) { // extract data uri from a file
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => { resolve(reader.result) };
      reader.readAsDataURL(file);
    });
  }

  uploadChange(event) {

    if (!event.target.files || !event.target.files[0]) { return; } // prevent error on cancel

    const file = event.target.files[0];

    // validation for incorrect type or too many photos
    if (!file.type.startsWith("image/")) {
      this.setState({
        imageError: "You may only upload images."
      });
    } else if (this.state.photos.length >= 5) {
      this.setState({
        imageError: "Photo limit reached."
      });
    } else {

      this.setState({
        imageError: ""
      });

      this.readFileAsync(file) // upload photo to cloudinary
        .then((data) => {
          axios.post("https://api.cloudinary.com/v1_1/greenfield/image/upload", {
            file: data,
            upload_preset: "mqk58mpg"
          })
            .then((res) => { // store returned url in state
              this.setState({
                photos: [...this.state.photos, res.data.url]
              });
            })
            .catch((err) => {
              console.log("Error posting photo:", err);
            });
        })
        .catch((err) => {
          console.log("Could not read file:", err);
        });
    }
  }

  validate(event) {
    event.preventDefault();
    recordInteraction(`button#${event.target.id}`, "Reviews");
    const errors = [];
    // perform validation checks here
    if (this.state.recommend === null) { // recommended radio buttons
      errors.push(["Please choose whether to recommend this product.", 1]);
    }
    for (var charId in this.state.characteristics) { // characteristic radio buttons
      if (this.state.characteristics[charId] === null) {
        errors.push(["Please review all product characteristics.", 2]);
        break;
      }
    }
    if (!this.state.summary) { // summary
      errors.push(["Please enter a review summary.", 3]);
    }
    if (this.state.body.length < 50) { // body
      errors.push(["Please enter a review body of at least 50 characters.", 4]);
    }
    if (!this.state.nickname) { // nickname
      errors.push(["Please enter your nickname.", 5]);
    }
    // eslint-disable-next-line
    const emailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!this.state.email || !emailFormat.test(this.state.email)) { // email
      errors.push(["Please enter a valid email address.", 6]);
    }

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
    axios.post(`http://18.224.200.47/reviews/${this.props.id}`, {
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommend: this.state.recommend ? 1 : 0,
      name: this.state.nickname,
      email: this.state.email,
      photos: this.state.photos,
      characteristics: this.state.characteristics
    })
      .then((res) => {
        console.log("Review posted, received", res);
        this.props.fetch(this.props.id, this.props.sort)
      })
      .catch((err) => {
        console.log("Error posting review:", err);
      });
  }

  render() {
    return (
      <div id="review-form">
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
              <input type="radio" name="recommend" id="yes" value={1} onChange={this.changeRecommendBound} /> Yes
              <input type="radio" name="recommend" id="no" value={0} onChange={this.changeRecommendBound} /> No
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

          <input type="file" id="file-input" style={{display:"none"}} onChange={this.uploadChangeBound} />
          <button 
            className="button add-input"
            id="add-photos" 
            type="button" 
            onClick={() => document.getElementById("file-input").click()}>
            + Add your photos (max 5)
          </button>

          {/* render out any photos that have been added to state as thumbnails */}
          <br />
          <div className="photos-wrapper">
            {this.state.photos.map((url, idx) => {
              return <img key={idx} src={url} alt="your uploaded content" className="review-photo"></img>
            })}
          </div>

          <button className="button add-input review-submit" type="submit" id={`${this.props.id}-submit-review`} onClick={this.validateBound}>Submit</button>
        </form>
        
        {/* render out any errors that have been detected */}
        <div id="errors">
          {this.state.errors.map((err) => {
            return <div className="review-error" key={err[1]}>{err[0]}</div>;
          })}
          {this.state.imageError}
        </div>
      </div>
    );
  }
}

export default AddReviewForm;
