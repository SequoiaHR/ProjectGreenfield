import React from "react";
import { MEANINGS } from "../../characteristicMeanings.js";
import "./reviews.css";

const FeaturesBreakdown = ({ metadata }) => {
  return (
    metadata.characteristics
      ? Object.keys(metadata.characteristics).map((characteristic) => {
          return (
            <div key={characteristic} className="slider-section">
              <label className="is-size-6 char-name">{characteristic}
                <input 
                  type="range"
                  min="1" 
                  max="5" 
                  value={metadata.characteristics[characteristic].value === null ? 3 : metadata.characteristics[characteristic].value} 
                  disabled={true} 
                  step=".5" 
                  style={{width:"100%"}} />
              </label>
              <div className="level">
                <div className="level-left">
                  <span className="level-item is-size-7 meaning">{MEANINGS[characteristic][1]}</span>
                </div>
                <div className="level-right">
                  <span className="level-item is-size-7 meaning">{MEANINGS[characteristic][5]}</span>
                </div>
              </div>
            </div>
          );
        })
    : null
  );
}

export default FeaturesBreakdown;