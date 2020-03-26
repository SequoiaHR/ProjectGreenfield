import React from "react";

const ComparisonModal = ({ setShowModal, product, pageProduct }) => {
  var onExitClick = e => {
    e.preventDefault();
    setShowModal(false);
  };

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
        <td>{pageItem}</td>
        <td>{feat}</td>
        <td>{compareItem}</td>
      </tr>
    );
  };

  return (
    <div>
      <div className="modal-wrapper">
        <div className="modal-header">
          <button onClick={onExitClick}>
            <icon>X</icon>
          </button>
        </div>
        <div className="modal-table">
          <table>
            <thead>
              <tr>
                <th>{pageProduct.name}</th>
                <th>Features</th>
                <th>{product.name}</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(comparison).map((feature, idx) => {
                return renderTableData(feature, idx);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

//need to close modal as well.
export default ComparisonModal;
