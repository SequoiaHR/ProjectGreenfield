function productDetailsReducer(state = {}, action) {
  switch (action.type) {
    case 'PRODUCT_DETAILS':
      return [...state, action.productDetails]; // Do not mutate original state, spread is a good way to avoid this
    default:
      return state;
  }
}

export default productDetailsReducer;
