//actions are just plain javascript objects to describe what happened
const productDetailsActions = productDetails => ({
  type: 'PRODUCT_DETAILS',
  productDetails: productDetails
});

export default productDetailsActions;
