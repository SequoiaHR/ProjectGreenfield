import React from "react";
import { MEANINGS } from "../../characteristicMeanings.js";
import "./reviews.css";

// this component renders a single row of radio buttons for one characteristic.
const CharacteristicsRadio = ({ characteristic, charId, handler }) => {
  return (
    <div className="char-radio-row">
      <div>{characteristic}*</div>
      <div className="level">
        {[1, 2, 3, 4, 5].map((num) => { // render out rating meanings on one level
          return (
            <div key={num} className="level-item has-text-centered">
              <div className="heading">{MEANINGS[characteristic][num]}</div>
            </div>
          );
        })}
      </div>
      <div className="level">
        {[1, 2, 3, 4, 5].map((num) => { // add ratio buttons with appropriate attributes on a second level
          return (
            <div key={num} className="level-item has-text-centered">
              <input className="char-radio" type="radio" name={charId} value={num} onChange={handler} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacteristicsRadio;