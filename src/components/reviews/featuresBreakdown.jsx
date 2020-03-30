import React from "react";
import { MEANINGS } from "../../characteristicMeanings.js";
import "./reviews.css";

const FeaturesBreakdown = ({ metadata }) => {
  return (
    metadata.characteristics
      ? Object.keys(metadata.characteristics).map((characteristic) => {
          return (
            <div key={characteristic} className="slider-section">
              <div className="is-size-6">{characteristic}</div>
              <input 
                type="range"
                min="1" 
                max="5" 
                value={metadata.characteristics[characteristic].value} 
                disabled={true} 
                step=".5" 
                style={{width:"100%"}} />
              <div className="level">
                <div className="level-left">
                  <span className="level-item is-size-7">{MEANINGS[characteristic][1]}</span>
                </div>
                <div className="level-right">
                  <span className="level-item is-size-7">{MEANINGS[characteristic][5]}</span>
                </div>
              </div>
            </div>
          );
        })
    : null
  );
}

export default FeaturesBreakdown;