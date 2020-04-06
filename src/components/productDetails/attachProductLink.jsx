import React from "react";
import { Link } from "react-router-dom";

var AttachProductLink = props => {
  let { productId } = props;
    return (
      <Link to={`/product/${productId}`}>
        {props.children}
      </Link>
    );
};

export default AttachProductLink;
