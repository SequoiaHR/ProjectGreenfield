import React from "react";
import "./comparisonTable.css";

const ComparisonTable = ({ product, pageProduct }) => {
  var getUniqueFeatures = (features, pageFeatures) => {
    let productFeatureNames = features.map(item => item.feature);
    let pageFeatureNames = pageFeatures.map(item => item.feature);
    let allFeatureNames = [...productFeatureNames, ...pageFeatureNames];
    let uniqueFeatureComparison = allFeatureNames.reduce((unique, current) => {
      if (!unique.hasOwnProperty(current)) {
        unique[current] = new Array(3).fill(undefined);
        unique[current][0] = current;
      }
      return unique;
    }, {});

    for (let item of pageFeatures) {
      if (uniqueFeatureComparison.hasOwnProperty(item.feature)) {
        uniqueFeatureComparison[item.feature][1] = item.value;
      }
    }
    for (let item of features) {
      if (uniqueFeatureComparison.hasOwnProperty(item.feature)) {
        uniqueFeatureComparison[item.feature][2] = item.value;
      }
    }
    return uniqueFeatureComparison;
  };

  let comparison = getUniqueFeatures(product.features, pageProduct.features);

  var renderTableData = (feature, idx) => {
    let [feat, pageItem, compareItem] = feature;
    return (
      <tr key={idx}>
        {pageItem === "null" ? (
          <td className="has-text-centered">
            <i className="fas fa-check"></i>
          </td>
        ) : (
          <td className="has-text-centered">{pageItem}</td>
        )}
        <td className="has-text-centered is-feature">{feat}</td>
        {compareItem === "null" ? (
          <td className="has-text-centered">
            <i className="fas fa-check"></i>
          </td>
        ) : (
          <td className="has-text-centered">{compareItem}</td>
        )}
      </tr>
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th align="center">{pageProduct.name}</th>
          <th align="center"></th>
          <th align="center">{product.name}</th>
        </tr>
      </thead>
      <tbody className="scroll">
        {Object.values(comparison).map((feature, idx) => {
          return renderTableData(feature, idx);
        })}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
