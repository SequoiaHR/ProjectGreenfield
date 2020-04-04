import React from "react";
import Modal from "../Modal.jsx";

import recordInteraction from "../../interactionsHelper.js";
import "./reviews.css";

// render a single review photo with associated modal pop-up
class ReviewPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }
    this.openModalBound = this.openModal.bind(this);
    this.exitModalBound = this.exitModal.bind(this);
  }

  openModal(event) {
    recordInteraction(`#${event.target.id}`, "Reviews");
    this.setState({
      modalOpen: true
    })
  }

  exitModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return(
      <div>
        <div>
          <img 
            src={this.props.photo.url} 
            id={`${this.props.id}-${this.props.photo.id}-photo-expand`} 
            className="actionable review-photo" 
            alt="product shown by reviewer" 
            onClick={this.openModalBound}></img>
          {this.state.modalOpen
            ? <Modal title="Photo" onExitClick={this.exitModalBound}>
              <div className="full-size-parent">
                <img src={this.props.photo.url} className="full-size-photo" alt="full-size product"></img>
              </div>
              </Modal>
            : null}
        </div>
      </div>
    );
  }

}

export default ReviewPhoto;