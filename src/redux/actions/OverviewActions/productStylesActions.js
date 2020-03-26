//actions are just plain javascript objects to describe what happened
const productStylesActions = productStyles => ({
  type: 'PRODUCT_STYLES',
  productStyles: productStyles
});

export default productStylesActions;
