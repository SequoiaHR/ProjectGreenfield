function productStylesReducer(state = {}, action) {
  switch (action.type) {
    case 'PRODUCT_STYLES':
      return Object.assign({}, state, action.productStyles); // Do not mutate original state, spread is a good way to avoid this
    default:
      return state;
  }
}

export default productStylesReducer;
