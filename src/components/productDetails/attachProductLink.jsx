import React, { useState } from "react";
import { Link } from "react-router-dom";

var AttachProductLink = props => {
  let { listName, productId } = props;
  if (listName === "Related") {
    return (
      <Link to={`/product/${productId}`}>
        {props.children}
      </Link>
    );
  } else {
    return (<>{props.children}</>);
  }
};

export default AttachProductLink;
